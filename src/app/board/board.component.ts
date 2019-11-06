import { Component, OnInit} from '@angular/core';
import { AddBoardDialogComponent } from '../add-board-dialog/add-board-dialog.component';
import { MatDialog  } from '@angular/material/dialog';
import { AddListDialogComponent } from '../add-list-dialog/add-list-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board-component.html',
  styleUrls: ['./board-component.scss'],

  entryComponents:[
    AddListDialogComponent,
  ],
})
export class BoardComponent implements OnInit {
  
  listName =  "something";

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  name = 'Angular 6';
  dataSource = [];  
  onAddData() {
    this.dataSource.push(this.listName);
 }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddListDialogComponent, {
      data: {
        myVar: "My VAR", boardName: this.listName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.onAddData();
    });
  }

  receiveMessage($event){
    this.listName = $event;
    console.log('Received event');
    
  }

}
