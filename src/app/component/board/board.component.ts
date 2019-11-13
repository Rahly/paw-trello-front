import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ListService} from 'src/app/service/list.service';
import {List} from 'src/app/model/list';
import {AddListDialogComponent} from '../add-list-dialog/add-list-dialog.component';
import {Board} from "../../model/board";
import {Router, ActivatedRoute, Params } from '@angular/router'


@Component({
  selector: 'app-board',
  templateUrl: './board-component.html',
  styleUrls: ['./board-component.scss'],

  entryComponents: [
    AddListDialogComponent,
  ],
})
export class BoardComponent implements OnInit {

  constructor(public dialog: MatDialog, private listService: ListService,  private route: ActivatedRoute,
    private router: Router) {
  }

  listName: string;
  dataSource = [];
  listsName = [];

  id: number;
  ngOnInit() {

    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
         this.id = +params['id'];
      } 
    });

    this.loadLists(this.id);
  }

  loadLists(id: number) {

    this.listsName = [];
    this.listService.getLists(id+1).subscribe(data => {
        data.map(list => this.listsName.push(list.name))
        this.dataSource = data;
      },
      error => {
        console.log(error);
      });
  }

  public eventEmitterMessage(msg: number): void {
    console.log(msg);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddListDialogComponent, {
      data: {
        dataKey: this.id+1
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      // this.receiveMessage($event)
      console.log("Id odświeżany " + this.id)

      this.loadLists(this.id);
    });
  }

  receiveMessage($event) {
    this.listName = $event;
    console.log('Received event');
  }

  boardData($event) {
    
    console.log('Received event ' + $event);
  }
}
