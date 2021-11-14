import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import {MatDialogModule} from '@angular/material/dialog';

const routes:Routes=[
  {
    path:'', children:[
      {path: '', component:LoginComponent},
      //{path: 'registro', component: RegistroComponent},
      {path: 'perfil', component: PerfilComponent},
    ]
  }

]


@NgModule({
  declarations: [
  
    LoginComponent,
    RegistroComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatDialogModule
  ]
})
export class MedicoModule { }
