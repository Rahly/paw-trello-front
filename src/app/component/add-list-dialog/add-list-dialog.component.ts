import { Component, OnInit, Inject, Output, EventEmitter} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { ListService } from '../../service/list.service';
import {List} from '../../model/list';
import {Router, ActivatedRoute, Params } from '@angular/router'



@Component({
  selector: 'app-add-list-dialog',
  templateUrl: './add-list-dialog.component.html',
  styleUrls: ['./add-list-dialog.component.css']
})
export class AddListDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddListDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private listService: ListService,
  private route: ActivatedRoute,
    private router: Router) {}

  listName = 'hello';
  id:number;

  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit() {
    console.log("Id czytassz");

   console.log(this.data.dataKey)
  }

  sendMessage(title: string) {
    console.log("Id boarda" + this.id);
    const list = new List();
    list.name = title;
    this.listService.addList(Number(this.data.dataKey), list).subscribe(value => console.log(value), error1 => console.log(error1));
    this.dialogRef.close();
  }


}
