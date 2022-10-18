import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioApiService {

  url = 'http://localhost/APIALED3/usuarios/';

  constructor(public http: HttpClient) { }

  guardarUsuario(datosUsuario: any){
    return this.http.post(this.url + 'registro', datosUsuario);
  }

}
