import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {

  nicknameUsuario: string = '';

  constructor(private router: Router) {
    if(localStorage.getItem('usuarioChat').length > 2){
      let datosUsuario = JSON.parse(localStorage.getItem('usuarioChat'));
      this.nicknameUsuario = datosUsuario[0]['usu_nickname'];
    }
    
  }

  ngOnInit(): void {
  }

  desloguear(){
    let arrayUsuario = [];
    arrayUsuario.pop();
    localStorage.setItem("usuarioChat", JSON.stringify(arrayUsuario));
    this.nicknameUsuario = '';
    this.router.navigate(['inicio']);
  }

}
