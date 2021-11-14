import { FireStoreService } from './../../../service/fire-store.service';
import { AuthService } from './../../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Medico } from 'src/app/interface/medico';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.sass']
})
export class PerfilComponent implements OnInit {

  constructor(private authservice:AuthService, private router:Router, private fireStoreservice:FireStoreService) { }
  
  /*interfaceMedico: Medico = {    
    id: '',
    name: '',
    lastName: '',
    birthDate: new Date(),
    placebirth: '',
    cedula: '',
    phone: '',
    especialidad: '',
    curp: '',
    fechaRegistro: new Date(),
  }//tambien se tiene la opcion de no poner el name en los input y pasarle los valores atrevz del ngmodel ejemplo <input type="text"  [(ngModel)]=Medico.name para el llenado automatico>
  */
  
  ngOnInit(): void {
    
  }

  logout(): void{
    this.authservice.logout();
    this.router.navigate(['/medico']);
  }

  addMedico(form:any){

    //this.fireStoreservice.addMedic(this.interfaceMedico); opcion 1 declarando la interface arriba y poner el ngModel directo a la interface sin form tal como se especifica arriba
    

    
    
    //console.log("valor: ", this.interfaceMedico);
    
    //let fecha=form.value.fNacimiento

    /*
    console.log(`
      Nombre: ${form.value.name}
      apellido: ${form.value.lastName}
      fecha de nacimiento: ${form.value.fNacimiento}
      lugar de nacimiento: ${form.value.lNacimiento}
      cedula: ${form.value.cedula}
      telefono: ${form.value.phone}
      especialidad: ${form.value.especialidad}
      curp: ${form.value.curp}
      fecha de resgistro:  ${new Date()}

      nueva fecha: ${fecha}
      `);
      */
    
  }

}
