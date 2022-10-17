import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFirebaseService } from 'src/app/servicios/auth-firebase.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  error?:string;

  constructor(private router: Router, private authFirebaseService: AuthFirebaseService) { }

  ngOnInit(): void {
  }

  registrarConGoogle(){
    this.authFirebaseService.signUp().then(res =>{
      //this.router.navigate(['bienvenida']);
      localStorage.setItem('usuario',String(res.user.email));
        this.error = '';
      });
  }

}
