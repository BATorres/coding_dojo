import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-crear-sala',
  templateUrl: './crear-sala.component.html',
  styleUrls: ['./crear-sala.component.sass']
})
export class CrearSalaComponent implements OnInit {

  socketSala = io('localhost:3001');

  constructor() {
    this.socketSala.on('connect', () => {
      console.log('Conectandose al socket del backend', this.socketSala.id);
    })
  }

  ngOnInit() {
  }

}
