import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhatComponent } from './what/what.component';
import { WorkComponent } from './work/work.component';
import { IntroComponent } from './intro/intro.component';


const routes: Routes = [
  {path : 'intro' , component : IntroComponent},
  {path : 'what' , component : WhatComponent},
  {path : 'work' , component : WorkComponent},
  {path:'',redirectTo: "intro" , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
