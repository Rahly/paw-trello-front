import { Component, OnInit, Inject, Output, EventEmitter} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { ListService } from '../../service/list.service';
import {List} from '../../model/list';


@Component({
  selector: 'app-add-list-dialog',
  templateUrl: './add-list-dialog.component.html',
  styleUrls: ['./add-list-dialog.component.css']
})
export class AddListDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddListDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private listService: ListService) {}

  listName = 'hello';
  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit() {
  }

  sendMessage(title: string) {
    const list = new List();
    list.name = title;
    this.listService.addList(1, list).subscribe(value => console.log(value), error1 => console.log(error1));
    this.dialogRef.close();
  }


}
