import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {AddBoardDialogComponent} from '../add-board-dialog/add-board-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {BoardComponent} from '../board/board.component';
import {BoardService} from 'src/app/service/board.service';
import {Board} from "../../model/board";



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
  
  @Output() boardData: EventEmitter<Board> = new EventEmitter();
  
  constructor(public dialog: MatDialog, private boardService: BoardService) {
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
  
  onClick(): void {
    const test: Board = {
      id: 1,
      name: 'Haha'
    };
    debugger;
    this.boardData.emit(test);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddBoardDialogComponent, {
      data: {
        boardId: "My VAR", boardName: this.boardName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
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

}
