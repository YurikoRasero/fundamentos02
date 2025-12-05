import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twbinding-calc',
  imports: [FormsModule],
  templateUrl: './twbinding-calc.html',
  styleUrl: './twbinding-calc.css',
})
export class TwbindingCalc {

numero1: number = 0;
  numero2: number = 0;
  resultado: number | string = '';

  sumar() {
    this.resultado = this.numero1 + this.numero2;
  }

  restar() {
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar() {
    this.resultado = this.numero1 * this.numero2;
  }

  dividir() {
    if (this.numero2 === 0) {
      this.resultado = "Error: división por cero";
      return;
    }
    this.resultado = this.numero1 / this.numero2;
  }
}

