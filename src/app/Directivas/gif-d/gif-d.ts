import { Component } from '@angular/core';

@Component({
  selector: 'app-gif-d',
  imports: [],
  templateUrl: './gif-d.html',
  styleUrl: './gif-d.css',
})
export class GifD {

  
  estaAutenticado: boolean = false;

  alternarAuth() {
    this.estaAutenticado = !this.estaAutenticado;

}
}
