import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {

  nicknameUsuario: string = '';

  constructor() {
    let datosUsuario = JSON.parse(localStorage.getItem('usuarioChat'));
    this.nicknameUsuario = datosUsuario[0]['usu_nickname'];
  }

  ngOnInit(): void {
  }

}
