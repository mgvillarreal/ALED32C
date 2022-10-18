import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  /* BANDERAS */
  mailLogeado: string;
  mostrarChat = false;

  constructor() { }

  ngOnInit(): void {
  }

}
