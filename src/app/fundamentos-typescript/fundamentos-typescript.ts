import { Component } from '@angular/core';


@Component({
  selector: 'app-fundamentos-typescript',
  imports: [],
  templateUrl: './fundamentos-typescript.html',
  styleUrl: './fundamentos-typescript.css',
  
})
export class FundamentosTypescript {

let nombre:string = "Yuri" 
let color: string = "black";
console.log(nombre)
console.log(color)

let ecivil: boolean = true;
let ecivil1: = false; 
console.log(ecivil)

let edad: number = 37;
console.log(edad)

// Array of numbers
scores: number[] = [100, 95, 98];

let yu: any = true;
yu = "string"; 
Math.round(yu); 


let value: string | undefined | null = null;
console.log(typeof value);

value = 'hello';
console.log(typeof value);

value = undefined;
console.log(typeof value);


}
