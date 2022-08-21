import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponentComponent } from '../app/home-component/home-component.component';
import {ListComponentComponent } from '../app/list-component/list-component.component';
import { LoginComponent } from '../app/login/login.component';

const routes: Routes = [
  {
    path:'' , component:HomeComponentComponent
  },
  {path:'listmenu', component: ListComponentComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
