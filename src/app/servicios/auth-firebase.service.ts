import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  constructor(private route: Router, private AuthFirestore: AngularFireAuth) { }

  async signUp() {
    try{
      return await this.AuthFirestore.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    catch (error) {
      console.log('Error en registro con Google', error);
      return null;
    }
  }
  
}