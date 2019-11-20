import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import {MatButtonModule, MatCheckboxModule, MatTableModule, MatFormFieldModule} from '@angular/material';
import { AppComponent } from './app.component';
import { AddBoardDialogComponent } from './component/add-board-dialog/add-board-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { BoardComponent } from './component/board/board.component';
import { AddListDialogComponent } from './component/add-list-dialog/add-list-dialog.component';
import { LoginComponent } from './component/login/login.component';
import { AddCardDialogComponent } from './component/add-card-dialog/add-card-dialog.component';
import { ChangeBoardNameDialogComponent } from './component/change-board-name-dialog/change-board-name-dialog.component';





@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddBoardDialogComponent,
    HomeComponent,
    BoardComponent,
    AddListDialogComponent,
    LoginComponent,
    AddCardDialogComponent,
    ChangeBoardNameDialogComponent,
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
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddBoardDialogComponent, BoardComponent, AddListDialogComponent, AddCardDialogComponent, ChangeBoardNameDialogComponent],
  

})
export class AppModule { }
