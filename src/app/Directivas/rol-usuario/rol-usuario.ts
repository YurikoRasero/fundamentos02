import { Component } from '@angular/core';

@Component({
  selector: 'app-rol-usuario',
  imports: [],
  templateUrl: './rol-usuario.html',
  styleUrl: './rol-usuario.css',
})
export class RolUsuario {

  rolUsuario: string = 'viewer'; 
  mensaje: string = '';

  constructor() {
    this.actualizarMensaje();
  }

  cambiarRol(nuevoRol: string) {
    this.rolUsuario = nuevoRol;
    this.actualizarMensaje();
  }

  actualizarMensaje() {
    switch (this.rolUsuario) {
      case 'admin':
        this.mensaje = 'Acceso total: Puedes administrar usuarios y el sistema.';
        break;

      case 'editor':
        this.mensaje = 'Acceso de edición: Puedes modificar contenido.';
        break;

      case 'viewer':
        this.mensaje = 'Acceso de lectura: Solo puedes ver el contenido.';
        break;

      default:
        this.mensaje = 'Rol desconocido.';
        break;
    }
  }


}

