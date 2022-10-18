import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { AuthFirebaseService } from 'src/app/servicios/auth-firebase.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  /*BANDERAS*/
  parteForm:number = 0;

  miUsuario = new Usuario;
  public forma: FormGroup; 

  error:string;

  constructor(private router: Router, private fb: FormBuilder, private authFirebaseService: AuthFirebaseService) { }

  ngOnInit(): void {
    this.forma = this.fb.group({ 
      'email': ['', [Validators.required, Validators.email]],
      'contrasena': ['', Validators.required]
    })
  }

  registrarConGoogle(){
    this.authFirebaseService.signUp().then(res =>{
      //this.router.navigate(['bienvenida']);
      this.parteForm = 1;
      localStorage.setItem('usuario',String(res.user.email));
        this.error = 'Error en registro con Google';
    });
  }

  registrarConEmailyContrasena(){
    this.miUsuario.email = this.forma.value['email'];
    this.miUsuario.contrasena = this.forma.value['contrasena'];

    this.authFirebaseService.signUpEmailPwd(this.miUsuario.email, this.miUsuario.contrasena).then(res =>{
      this.parteForm = 1;
      localStorage.setItem('usuario',String(res.user.email));
      this.error = 'Error en registro con Email y Contraseña';
    })
  }

}
