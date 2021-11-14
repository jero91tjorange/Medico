import { Injectable } from '@angular/core';
//Cargar interface de los datos medico
import { Medico } from '../interface/medico';
//importar conexion para la base de datos
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class FireStoreService {

  constructor(private db:AngularFirestore) { }

  addMedic(valor:Medico){
    this.db.collection('Medico').doc().set({
      "id": valor.id,
      "name":valor.name,
      "lastName":valor.lastName,
      "birthDate": valor.birthDate,
      "placebirth": valor.placebirth,
      "cedula": valor.cedula,
      "phone": valor.phone,
      "especialidad": valor.especialidad,
      "curp": valor.curp,
      "fecha de registro":valor.fechaRegistro})
      .then(res => {
        console.log("Resultado: ",res);
      
    })
    .catch((error) => {
      console.log("Error al insertar datos: ",error);
      
    });
  }
}
