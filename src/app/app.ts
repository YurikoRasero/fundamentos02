import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { capa2 } from "./capa2/capa2";
import { capa1 } from "./capa1/capa1";
import { capa3 } from './capa3/capa3';



@Component({
  selector: 'componente-inicial',
  imports: [RouterOutlet, capa2, capa1, capa3],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fundamentos02');
}
