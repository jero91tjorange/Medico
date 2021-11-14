import { RedireccionesService } from './../../../service/redirecciones.service';
import { AuthService } from './../../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistroComponent } from '../registro/registro.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthService, private matdialog:MatDialog, private redirecciones:RedireccionesService) { }

  ngOnInit(): void {
    if(this.authservice.verifyLogged()) this.redirecciones.redPerfil();
  }

  login(form:any){
    this.authservice.login({
      email:form.value.email,
      password:form.value.password,
      returnSecureToken: true
    }).subscribe(res => {
      console.log("los datos son:", res);      
    });
    this.redirecciones.redPerfil();

  }

  Registrate(){
  this.matdialog.open(RegistroComponent);
  }
}
