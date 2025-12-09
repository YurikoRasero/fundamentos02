import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twbinding-divisa',
  imports: [FormsModule, DecimalPipe
  ],
  templateUrl: './twbinding-divisa.html',
  styleUrl: './twbinding-divisa.css',
})

export class TwbindingDivisa {

  cantidad: number = 0;
  monedaOrigen: string = 'EUR';
  monedaDestino: string = 'USD';
  resultado: number = 0;

  // Tasas ficticias, puedes cambiarlas
  tasas: any = {
    EUR: { EUR: 1, USD: 1.1, GBP: 0.85 },
    USD: { EUR: 0.90, USD: 1, GBP: 0.77 },
    GBP: { EUR: 1.17, USD: 1.30, GBP: 1 }
  };

  convertir() {
    const tasa = this.tasas[this.monedaOrigen][this.monedaDestino];
    this.resultado = this.cantidad * tasa;
  }

}
