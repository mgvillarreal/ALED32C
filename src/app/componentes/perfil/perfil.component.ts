import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  datosUsuario: any;

  constructor() { 
    this.datosUsuario = JSON.parse(localStorage.getItem('usuarioChat'));
    console.log('datos usuario: ', this.datosUsuario[0]['usu_nombre']);
  }

  ngOnInit(): void {
  }

}
