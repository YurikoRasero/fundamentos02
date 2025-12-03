import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding-a',
  imports: [FormsModule],
  templateUrl: './binding-a.html',
  styleUrl: './binding-a.css',
})
export class BindingA {

  color:string= "negro";
}
