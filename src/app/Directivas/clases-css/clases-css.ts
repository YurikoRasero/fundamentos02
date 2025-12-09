import { Component } from '@angular/core';

@Component({
  selector: 'app-clases-css',
  imports: [],
  templateUrl: './clases-css.html',
  styleUrl: './clases-css.css',
})
export class ClasesCss {
 status: string = 'inactivo';

  cambiarEstado() {
    this.status = this.status === 'activo' ? 'inactivo' : 'activo';
}
}
