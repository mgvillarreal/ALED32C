import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioApiService {

  url = 'https://hostinjor.com/aledmaga/v1/usuarios/';

  constructor(public http: HttpClient) { }

  guardarUsuario(datosUsuario: any){
    return this.http.post(this.url + 'registro', datosUsuario);
  }

  traerDatosUsuario(emailUsuario: any){
    let data = {
      "email": emailUsuario
    }

    return this.http.post(this.url + 'datos', data).subscribe(res=>{
      localStorage.setItem("usuarioChat",JSON.stringify(res));
      console.log('Res Datos Usuario Service: ', res);
    });
  }

  actualizaDatosUsuario(datosUsuario: any){
    console.log("Datos Service: ", datosUsuario);
    return this.http.post(this.url + 'modificacion', datosUsuario);
  }
  

}
