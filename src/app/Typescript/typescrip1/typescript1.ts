import { Component } from '@angular/core';

@Component({
  selector: 'app-typescript1',
  imports: [],
  templateUrl: './typescript1.html',
  styleUrl: './typescript1.css',
})
export class Typescrip1 {

  ejercicioA(): void {
let nombre:string = "Yuri" 
let casado: boolean = true;
let edad: number = 37;
let cp: null= null;
let raza:undefined= undefined;


console.log(`Nombre: ${nombre}`);
console.log(`Estado civil: ${casado}`)
console.log(`Edad: ${edad}`)
console.log(`Codigo postal: ${cp}`)
console.log(`Raza animal: ${raza}`)

  }

  ejercicioB(): void {
 let calculador: number = 23;
 const maxnumintentos: number = 4; 
 var mensaje: string = "It works!";

calculador += 1;
console.log(`Contador: ${calculador}`); 
console.log(`Num maximo intentos: ${maxnumintentos}`); 
console.log(`Mensaje: ${mensaje}`); 

 mensaje = "¡Furula!";
 console.log(`Mensaje actualizado: ${mensaje}`)

  }

ejercicioC(): void {
let x: number = 9;

if (x % 2 === 0) {
      console.log(`${x} es un numero par`);
    } else {
      console.log(`${x} es un numero impar`);
    }
  }

ejercicioD(): void {let edad: number = 38;

    if (edad >= 18) {
      console.log(`Es mayor de edad`);
    } else {
      console.log(`Es menor de edad`);
    }}
  
ejercicioE(): void {
let edoPedido: string = "enviado";
//Bucle para solicitar el estado del envio del pedido.
    if (edoPedido === "enviado") {
      console.log(`Pedido enviado`);
    } else if (edoPedido === "espera") {
      console.log(`Pedido en espera`);
    } else if (edoPedido === "cancelado") {
      console.log(`Pedido cancelado`);
    } else {
      console.log(`Estado del pedido no desconocido`);
    }

}

ejercicioF(): void {
console.log("Imprimir numeros del 1 al 5:");

    for (let z = 1; z <= 5; z++) {
      console.log(z);
    }

}

ejercicioG(): void {
//Suma de numeros
  let suma: number = 0;
  let contador: number = 1;

    while (contador <= 10) {
      suma += contador;
      contador++;
    }
     console.log(`La suma de los números del 1 al 10 es: ${suma}`);
}

ejercicioH(): void {
let bodys: string[] = ["face", "hand", "finger", "eyes", "hair"];

    console.log("Array body:");

    for (let body of bodys) {
      console.log(body);
    }

}

ejercicioI(): void {

let ciudades: string[] = ["Mexico", "Guadalajara", "Monterrey", "Oaxaca,Yucatan"];
//Añadir una nueva ciudad
  ciudades.push("Oaxaca");
    console.log("Tras añadir a 'Oaxaca':", ciudades);
//Cambiar una nueva ciudad
  ciudades[1] = "Guanajuato";
    console.log("Tras cambiar 'Oaxaca' por 'Guanajuato':", ciudades);
// Elimina una Ciudad del array
ciudades.splice(3, 1); 
    console.log("Después de eliminar '':", ciudades);
// Buscar la Ciudad eliminada del array
 let indexOaxaca = ciudades.indexOf("Oaxaca");
    if (indexOaxaca !== -1) {
      console.log(`'Oaxaca' se enciuuentra en el array en el indice ${indexOaxaca}`);
    } else {
      console.log("'Oaxaca' no esta en el array");
    }
//Insertar una nueva ciudad en una posición específica
  ciudades.splice(1, 0, "Chiapas");
    console.log("Tras insertar 'Chiapas' cambia a la posicion 1:", ciudades);

    console.log("Array de Ciudades:", ciudades);
  }

ejercicioJ(): void {
let scores: Number[]= [100, 95, 98];
   console.log(scores)
  }

}
