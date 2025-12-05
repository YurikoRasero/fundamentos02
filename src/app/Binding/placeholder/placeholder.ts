import { Component } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  imports: [],
  templateUrl: './placeholder.html',
  styleUrl: './placeholder.css',
})
export class Placeholder {

  placeholderText: string = 'Escribe aquí...';

  cambiarPlaceholder() {
    this.placeholderText = 'Nuevo placeholder establecido!';
  }
}
