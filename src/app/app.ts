import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component1 } from "./Component/component1/component1";
import { Component2 } from './Component/component2/component2';
import { Component3 } from './Component/component3/component3';
import { Component4 } from './Component/component4/component4';
import { Component5 } from './Component/component5/component5';
import { Typescrip1 } from './Typescript/typescrip1/typescript1';
import { Interpolacion } from './Binding/interpolacion/interpolacion';
import { BindingA } from './Binding/binding-a/binding-a';




@Component({
  selector: 'componente-inicial',
  imports: [RouterOutlet,
    Component1, Component2, Component3, Component4, Component5,
    Typescrip1, Interpolacion,BindingA],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   title = 'Ejercicios_angular';
}




