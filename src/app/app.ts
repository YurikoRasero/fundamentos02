import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { capa1 } from "./capa1/capa1";

import { Capa4 } from './capa4/capa4';
import { Capa5 } from './capa5/capa5';
import { Capa2 } from './capa2/capa2';
import { Capa3 } from './capa3/capa3';


@Component({
  selector: 'componente-inicial',
  imports: [RouterOutlet, capa1, Capa2, Capa3, Capa4, Capa5],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   title = 'Fundamentos02';
}




