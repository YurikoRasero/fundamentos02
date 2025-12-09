import { Component } from '@angular/core';

@Component({
  selector: 'app-style-d',
  imports: [],
  templateUrl: './style-d.html',
  styleUrl: './style-d.css',
})
export class StyleD {
 esActivo: boolean = false;

  toggleActivo() {
    this.esActivo = !this.esActivo;
}
}
