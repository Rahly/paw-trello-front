import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ListService } from 'src/app/service/list.service';
import {Card} from '../../model/card';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-card-dialog',
  templateUrl: './add-card-dialog.component.html',
  styleUrls: ['./add-card-dialog.component.css']
})
export class AddCardDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddCardDialogComponent> , @Inject(MAT_DIALOG_DATA) public data: any, private listService: ListService,
   private route: ActivatedRoute, private _router: Router) { }


  dataSource;
  index: number;

  ngOnInit() {

  }

  sendMessage(title: string) {
    console.log("Id listy" + this.index);
    const card = new Card();
    card.name = title;
    this.listService.addCard(Number(this.data.dataKey), card).subscribe(value => console.log(value), error1 => console.log(error1));
    this.dialogRef.close();
  }

}
