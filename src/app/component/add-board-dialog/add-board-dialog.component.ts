import { Component, OnInit, Inject, Output, EventEmitter} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoardService } from 'src/app/service/board.service';
import { Board } from 'src/app/model/board';



@Component({
  selector: 'app-add-board-dialog',
  templateUrl: './add-board-dialog.component.html',
  styleUrls: ['./add-board-dialog.component.css']
})
export class AddBoardDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddBoardDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private boardService: BoardService) {}

  boardName: string;

  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit() {
  }

  sendMessage(title: string){
    const board = new Board();
    board.name = title;
    this.boardService.addBoard(board).subscribe(value => console.log(value), error1 => console.log(error1));
    this.dialogRef.close("It was saved");
  }
}
