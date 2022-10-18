import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  public forma: FormGroup; 

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.forma = this.fb.group({ 
      'email': ['', [Validators.required, Validators.email]],
      'contrasena': ['', Validators.required],
    })
  }

}
