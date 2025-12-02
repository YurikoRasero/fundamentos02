import { Component } from '@angular/core';
import { Component2 } from '../component2/component2';


@Component({
  selector: 'app-component4',
  imports: [Component2],
  templateUrl: './component4.html',
  styleUrl: './component4.css',
})
export class Component4 {

}
