import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-owbindingc',
  imports: [ FormsModule],
  templateUrl: './owbinding-c.html',
  styleUrl: './owbinding-c.css',
})


export class Owbindingc {

 contador: number = 0;
  inputValue: string = '';

  incrementar() {
    this.contador++;
  }

  decrementar() {
    if (this.contador > 0) {
      this.contador--;
    }
  }

  resetear() {
    this.contador = 0;
  }

  actualizarDesdeInput() {
    const numero = Number(this.inputValue);
    if (!isNaN(numero)) {
      this.contador = numero;
    }
  }

  actualizarAlPresionarEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.actualizarDesdeInput();
    }
  }
}
