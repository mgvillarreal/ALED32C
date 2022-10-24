import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { AuthFirebaseService } from 'src/app/servicios/auth-firebase.service';
import { UsuarioApiService } from 'src/app/servicios/usuario-api.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  miUsuario = new Usuario;
  public forma: FormGroup;

  msjError: string;

  constructor(private router: Router, private fb: FormBuilder, private authFirebaseService: AuthFirebaseService, private usuarioService: UsuarioApiService) { }

  ngOnInit(): void {
    this.forma = this.fb.group({ 
      'email': ['', [Validators.required, Validators.email]],
      'contrasena': ['', Validators.required],
    })
  }

  ingresarConEmailyContrasena(){
    this.miUsuario.email = this.forma.value['email'];
    this.miUsuario.contrasena = this.forma.value['contrasena'];
    console.log('Inbgreso: ', this.miUsuario);

    this.authFirebaseService.signInEmailPwd(this.miUsuario.email, this.miUsuario.contrasena);

    if(this.authFirebaseService.error != null){
      this.msjError = this.authFirebaseService.error;
      console.log("error: ", this.msjError);
      return
    }
    
    this.usuarioService.traerDatosUsuario(this.miUsuario.email);
  }

}
