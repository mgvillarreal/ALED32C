import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DocumentData, Firestore } from '@angular/fire/firestore';
import { collection, getDoc, getDocs, setDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Mensaje } from '../clases/mensaje';

@Injectable({
  providedIn: 'root'
})
export class ChatFirebaseService {

  constructor(public firestore: AngularFirestore) { }

  traerColeccion():Observable<any>{
    var mensajes = this.firestore.collection('mensajes', ref=>ref.orderBy('fecha','asc'));
    return mensajes.valueChanges();
  }

  setMensaje(mensajeNuevo: Mensaje){
    var mensajeRef = this.firestore.collection('mensajes');
    mensajeRef.add(mensajeNuevo);
  }

}
