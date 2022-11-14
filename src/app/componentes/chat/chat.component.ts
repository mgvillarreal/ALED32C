import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/clases/mensaje';
import { ChatFirebaseService } from 'src/app/servicios/chat-firebase.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensajeChat = new Mensaje;
  public mensaje:Array<any> = new Array<any>();

  nuevoMensaje:string = "";
  usuarioLogueado:string;
  nicknameLogueado: string;

  inputBuscadorFlag:number=0;

  constructor(private firestoreApp: ChatFirebaseService) {
    firestoreApp.traerColeccion().subscribe(t=>
      {
        this.mensaje = [];
        (<Array<any>>t).forEach(element =>
          this.mensaje.push(element)
        )
        console.log("Mensaje: ", this.mensaje);
      }
    );
  }

  enviarMensaje():void{

    //if(this.nuevoMensaje == "" ) return;

    let datosUsuario = JSON.parse(localStorage.getItem('usuarioChat'));
    this.mensajeChat.usuario = datosUsuario[0]['usu_email'];
    this.mensajeChat.nickname = datosUsuario[0]['usu_nickname'];
    this.mensajeChat.fecha = new Date;
    this.mensajeChat.texto = this.nuevoMensaje;

    console.log("Mensaje Enviado: ", this.mensajeChat);

    this.firestoreApp.setMensaje(JSON.parse(JSON.stringify(this.mensajeChat)));

    this.nuevoMensaje = "";

    setTimeout(() => {
      //this.scrollHastaUltElementoPorClase();
    }, 10);
    
  }

  scrollHastaUltElementoPorClase():void{
    let elementos = document.getElementsByClassName('msj');
    let ultElemento:any = elementos[elementos.length - 1];
    let topPos = ultElemento.offsetTop;

    //@ts-ignore
    document.getElementById("contenedorMensajes")?.scrollTop = topPos;
  }

  obtenerUsuarioLogeado():void{

    if(localStorage.getItem('usuarioChat') !== null){
      let datosUsuario = JSON.parse(localStorage.getItem('usuarioChat'));
      this.usuarioLogueado = datosUsuario[0]['usu_email'];
      //this.nicknameLogueado = datosUsuario[0]['usu_nickname'];

      console.log("Usuario logueado chat: ", this.usuarioLogueado);
    }
  
  }

  inputBuscador(){
    if(this.inputBuscadorFlag == 0){
      this.inputBuscadorFlag = 1
    }
    else{
      this.inputBuscadorFlag = 0;
    }
  }

  ngOnInit(): void {
    this.obtenerUsuarioLogeado();
  }

}
