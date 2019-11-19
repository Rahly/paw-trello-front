import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import {MatButtonModule, MatCheckboxModule, MatTableModule} from '@angular/material';
import { AppComponent } from './app.component';
import { AddBoardDialogComponent } from './component/add-board-dialog/add-board-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { BoardComponent } from './component/board/board.component';
import { AddListDialogComponent } from './component/add-list-dialog/add-list-dialog.component';
import { LoginComponent } from './component/login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddBoardDialogComponent,
    HomeComponent,
    BoardComponent,
    AddListDialogComponent,
    LoginComponent,
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
