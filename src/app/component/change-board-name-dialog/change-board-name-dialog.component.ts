import { Component, OnInit, Inject } from '@angular/core';
import { Board } from 'src/app/model/board';
import { BoardService } from 'src/app/service/board.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-change-board-name-dialog',
  templateUrl: './change-board-name-dialog.component.html',
  styleUrls: ['./change-board-name-dialog.component.css']
})
export class ChangeBoardNameDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ChangeBoardNameDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private boardService: BoardService) { }
  
  dataSource: Board;

  ngOnInit() {
    console.log(this.data.dataKey)
    console.log("Jestem w changu" + this.data.dataKey)
  }

  setBoardName(title: string){
    this.boardService.getBoard(this.data.dataKey-1).subscribe(data => {
      this.dataSource = data;
    },
    error => {
      console.log(error);
    });

    this.dataSource.name = title;

    console.log(this.dataSource);
    //this.boardService.changeBoardName().subscribe(value => console.log(value), error1 => console.log(error1));
    this.boardService.changeBoardName(this.dataSource).subscribe(value => console.log(value), error1 => console.log(error1));
    this.dialogRef.close("It was saved");
  }
}