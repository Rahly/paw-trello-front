import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import {MatButtonModule, MatCheckboxModule, MatTableModule} from '@angular/material';
import { AppComponent } from './app.component';
import { AddBoardDialogComponent } from './add-board-dialog/add-board-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { BoardComponent } from './board/board.component';
import { AddListDialogComponent } from './add-list-dialog/add-list-dialog.component';





@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddBoardDialogComponent,
    HomeComponent,
    BoardComponent,
    AddListDialogComponent,
  ],
  exports: [ AddBoardDialogComponent, BoardComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddBoardDialogComponent, BoardComponent, AddListDialogComponent],
  

})
export class AppModule { }
