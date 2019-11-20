import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { BoardComponent } from './component/board/board.component';
import { LoginComponent } from './component/login/login.component';
import { MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms'
import { AddListDialogComponent } from './component/add-list-dialog/add-list-dialog.component';
import { RegisterComponent } from './component/register/register.component';
import { StartPageComponent } from './component/start-page/start-page.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'board/:id', component: BoardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'board/:id', component: AddListDialogComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'startPage', component: StartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatFormFieldModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, BoardComponent, LoginComponent, AddListDialogComponent, RegisterComponent, StartPageComponent]
