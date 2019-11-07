import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ListService} from 'src/app/service/list.service';
import {List} from 'src/app/model/list';
import {AddListDialogComponent} from '../add-list-dialog/add-list-dialog.component';
import {Board} from "../../model/board";

@Component({
  selector: 'app-board',
  templateUrl: './board-component.html',
  styleUrls: ['./board-component.scss'],

  entryComponents: [
    AddListDialogComponent,
  ],
})
export class BoardComponent implements OnInit {

  constructor(public dialog: MatDialog, private listService: ListService) {
  }

  listName: string;
  dataSource = [];
  listsName = [];

  ngOnInit() {
    this.loadLists();
  }

  loadLists() {
    this.listsName = [];
    this.listService.getLists(1).subscribe(data => {
        data.map(list => this.listsName.push(list.name))
        this.dataSource = data;
      },
      error => {
        console.log(error);
      });
  }

  public eventEmitterMessage(msg: Board): void {
    debugger;
    console.log(msg);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddListDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      // this.receiveMessage($event)
      this.loadLists();
    });
  }

  receiveMessage($event) {
    this.listName = $event;
    console.log('Received event');
  }
}
