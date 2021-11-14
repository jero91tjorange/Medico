import { collection } from 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component } from '@angular/core';
//Importacion de auth de firestore
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
  items:any;
  constructor(private angularfirestore:AngularFirestore, /*pruebas*/ public auth: AngularFireAuth ){
    this.items = angularfirestore.collection('Medico').valueChanges();
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }
}

