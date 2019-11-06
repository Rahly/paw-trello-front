import { Component, OnInit} from '@angular/core';
import { AddBoardDialogComponent } from '../add-board-dialog/add-board-dialog.component';
import { MatDialog  } from '@angular/material/dialog';
import { BoardComponent } from '../board/board.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home-component.scss'],

  entryComponents:[
    AddBoardDialogComponent,
    BoardComponent,
  ],


})
export class HomeComponent implements OnInit {

  boardName =  "somethin";

  message = "hello world"

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  name = 'Angular 6';
   dataSource = [];  
   onAddData() {
     this.receiveMessage("receiveMessage($event)");
  this.dataSource.push(this.dataSource.length);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddBoardDialogComponent, {
      data: {
        myVar: "My VAR", boardName: this.boardName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.onAddData();
    });
  }

  receiveMessage($event: string){
    this.message = $event
    console.log('Received home event');
    console.log(this.message);

  }

  openBoardComponent(): void {
    const dialogRef = this.dialog.open(BoardComponent, {
      data: {
        myVar: "My VAR", boardName: this.boardName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.onAddData();
    });
  }

}
