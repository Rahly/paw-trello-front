import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {AddBoardDialogComponent} from '../add-board-dialog/add-board-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {BoardComponent} from '../board/board.component';
import {BoardService} from 'src/app/service/board.service';
import {Board} from "../../model/board";
import { log } from 'util';
import {Router} from '@angular/router'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home-component.scss'],

  entryComponents: [
    AddBoardDialogComponent,
    BoardComponent,
  ],


})
export class HomeComponent implements OnInit {
  
  @Output() boardData = new EventEmitter<number>();
  
  constructor(public dialog: MatDialog, private boardService: BoardService, private _router: Router) {
  }

  boardName: string;
  dataSource = [];
  boardsName = [];

  ngOnInit() {
    this.loadBoards();
  }


  loadBoards() {
    this.boardsName = [];
    this.boardService.getBoards().subscribe(data => {
        data.map(board => this.boardsName.push(board.name));
        this.dataSource = data;
      },
      error => {
        console.log(error);
      });
  }
  
  onClick(index: number): void {
    const test = index;
    console.log("Index mojego boarda " + test)
    
    this.boardData.emit(test);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddBoardDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);

      this.loadBoards();
    });
  }

  openBoardComponent(boardId: number): void {
    const dialogRef = this.dialog.open(BoardComponent, {
      data: {
        myVar: this.dataSource[boardId]
      }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  openBoard(boardId: number){
    
    this._router.navigate(['/board', boardId]);
  }

}
