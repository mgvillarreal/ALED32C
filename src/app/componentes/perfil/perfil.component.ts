import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioApiService } from 'src/app/servicios/usuario-api.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  /* BANDERAS */
  muestraPerfilFlag = 1;
  formularioPerfilFlag = 0;
  mensajeActFlag = 0;

  datosUsuario: any;
  public forma: FormGroup;
  miUsuario = new Usuario;

  constructor(private router: Router, private fb: FormBuilder, private usuarioService: UsuarioApiService) { 
    this.datosUsuario = JSON.parse(localStorage.getItem('usuarioChat'));
    console.log('Datos Usuario: ', this.datosUsuario);
  }

  ngOnInit(): void {
    this.forma = this.fb.group({ 
      'nombre': ['', [Validators.required]],
      'apellido': ['', Validators.required],
      'nickname': ['', Validators.required],
      'email': ['', Validators.required],
      'fnacimiento': ['', Validators.required]
    });

    this.calculaEdad();
  }

  editaDatos(){
    if(this.formularioPerfilFlag==0){
      this.formularioPerfilFlag = 1;
      this.muestraPerfilFlag = 0;
    }
  }

  guardarDatos(){
    this.miUsuario.nombre = this.forma.value['nombre'];
    this.miUsuario.apellido = this.forma.value['apellido'];
    this.miUsuario.nickname = this.forma.value['nickname'];
    this.miUsuario.email = this.forma.value['email'];
    this.miUsuario.fnacimiento = this.forma.value['fnacimiento'];

    this.usuarioService.actualizaDatosUsuario(this.miUsuario).subscribe(res=>{
      console.log("Respuesta Service: ", res);
      this.usuarioService.traerDatosUsuario(this.miUsuario.email);
    });
    
    this.mensajeActFlag = 1;
    this.muestraPerfilFlag = 0;
    this.formularioPerfilFlag = 0;

  }

  vuelveaPerfil(){
    this.mensajeActFlag = 0;
    this.muestraPerfilFlag = 1;
    this.formularioPerfilFlag = 0;
  }

  calculaEdad(){
    let nacimientoDate = new Date(this.datosUsuario[0].usu_fnacimiento);
    let timeDiff = Math.abs(Date.now() - nacimientoDate.getTime());
    this.miUsuario.edad = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
  }

}
