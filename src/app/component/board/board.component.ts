import {Component, OnInit, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ListService} from 'src/app/service/list.service';
import {List} from 'src/app/model/list';
import {AddListDialogComponent} from '../add-list-dialog/add-list-dialog.component';
import {Board} from "../../model/board";
import {Router, ActivatedRoute, Params } from '@angular/router'
import { AddCardDialogComponent } from '../add-card-dialog/add-card-dialog.component';
import { Subscriber } from 'rxjs';
import {BoardService} from 'src/app/service/board.service';
import { ChangeBoardNameDialogComponent } from '../change-board-name-dialog/change-board-name-dialog.component';


@Component({
  selector: 'app-board',
  templateUrl: './board-component.html',
  styleUrls: ['./board-component.scss'],

  entryComponents: [
    AddListDialogComponent,
  ],
})
export class BoardComponent implements OnInit {

  constructor(public dialog: MatDialog, private listService: ListService,  private boardService: BoardService, private route: ActivatedRoute,
    private router: ActivatedRoute) {
  }

  dataSource = [];
  listId: number;


  ngOnInit() {
  this.listId = +this.route.snapshot.paramMap.get("id");
  this.loadLists(this.listId);
  }

  loadLists(index: number) {
    this.boardService.getLists(index).subscribe(data => {
        this.dataSource = data;
        console.log(this.dataSource);

      },
      error => {
        console.log(error);
      });
  }

  loadCards(id: number){

    
  }

  public eventEmitterMessage(msg: number): void {
    console.log(msg);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddListDialogComponent, {
      data: {
        dataKey: this.listId+1
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      // this.receiveMessage($event)
      console.log("Id odświeżany " + this.listId)

      this.loadLists(this.listId);
    });
  }

  openAddCardDialog(): void{
    const dialogRef = this.dialog.open(AddCardDialogComponent,{
      data: {
        dataKey: this.listId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadCards(this.listId);
    })
  }

  changeBoardName(): void{
    const dialogRef = this.dialog.open(ChangeBoardNameDialogComponent,{
      data: {
        dataKey: this.listId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadCards(this.listId);
    })
  }
}
