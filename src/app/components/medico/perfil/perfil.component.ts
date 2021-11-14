import { AuthService } from './../../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.sass']
})
export class PerfilComponent implements OnInit {

  constructor(private authservice:AuthService, private router:Router) { }

  ngOnInit(): void {
    
  }

  logout(): void{
    this.authservice.logout();
    this.router.navigate(['/medico']);

  }

}
