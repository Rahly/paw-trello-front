import { Component, OnInit, Inject, Output, EventEmitter} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-add-list-dialog',
  templateUrl: './add-list-dialog.component.html',
  styleUrls: ['./add-list-dialog.component.css']
})
export class AddListDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddListDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  listName: string;

  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit() {
  }

  save(){
    this.messageEvent.emit(this.listName);
    console.log(this.listName);
    this.dialogRef.close("It was saved add list ");
  }


}
