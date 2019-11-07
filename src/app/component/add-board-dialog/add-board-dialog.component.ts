import { Component, OnInit, Inject, Output, EventEmitter} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListService } from 'src/app/service/list.service';



@Component({
  selector: 'app-add-board-dialog',
  templateUrl: './add-board-dialog.component.html',
  styleUrls: ['./add-board-dialog.component.css']
})
export class AddBoardDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddBoardDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  boardName: string;


  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit() {
  }

  save(){
    this.messageEvent.emit(this.boardName);
    console.log(this.boardName);
    this.dialogRef.close("It was saved");
  }

 

}
