import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedireccionesService {

  constructor(private router:Router) { }

  redPerfil(){
    this.router.navigate(['/medico/perfil']);
  }

}
