import { animate, animation, style, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animaciones',
  templateUrl: './animacion.component.html',
  styleUrls: ['./animacion.component.css']
})
export class AnimacionComponent implements OnInit {

  public fadeAnimation = animation([
    style({ opacity: '{{ start }}' }),
    animate('{{ time }}',
    style({ opacity: '{{ end }}'}))
    ],
    { params: { time: '1000ms', start: 0, end: 1 }});

  constructor() { }

  ngOnInit(): void {
  }

  usarAnimacion(){
    useAnimation(this.fadeAnimation, {
      params: {
        time: '2s',
        start: 1,
        end: 0
      }
    })
  }

}
