import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { BoardComponent } from './component/board/board.component';
import { LoginComponent } from './component/login/login.component';
import { MatFormFieldModule } from '@angular/material';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'board/:id', component: BoardComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatFormFieldModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, BoardComponent, LoginComponent]
