import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.html',
  styleUrl: './interpolacion.css',
})
export class Interpolacion {

  numeroA: number = 50;  
  numeroB: number = 70; 

  Suma(): number {
    return this.numeroA + this.numeroB;
} 
}
