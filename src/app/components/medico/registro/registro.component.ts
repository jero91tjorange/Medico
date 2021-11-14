import { RedireccionesService } from './../../../service/redirecciones.service';
import { AuthService } from './../../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  //selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent implements OnInit {

  constructor(
    private authservice: AuthService,
    private dialogref:MatDialogRef<RegistroComponent>,
    private redirecciones:RedireccionesService) { }

  ngOnInit(): void {
    
    if(this.authservice.verifyLogged()) this.redirecciones.redPerfil();
  }

  registrate(form:any){
    this.authservice.singUp({
      email:form.value.email,
      password:form.value.password,
      returnSecureToken: true
    }).subscribe(res => {
      console.log("Te registraste con exito con los siguientes datos:", res);
      
    });
    this.dialogref.close();
    this.redirecciones.redPerfil();


  }

}
