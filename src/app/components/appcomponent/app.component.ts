
import { Component } from '@angular/core';
//Importacion de auth de firestore
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Medico } from 'src/app/interface/medico';
//Colleciones y angular firestore
import { collection } from 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';

//import firebase from 'firebase/compat/app';???????????????????????????

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
  items:any;
  constructor(/*private angularfirestore:AngularFirestore, public auth: AngularFireAuth*/ ){
    //this.items = angularfirestore.collection('Medico').valueChanges();
  }

  /*Metodos de google auth
  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }
  */


}

