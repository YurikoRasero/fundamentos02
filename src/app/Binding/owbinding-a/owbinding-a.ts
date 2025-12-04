import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-owbinding-a',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './owbinding-a.html',
  styleUrl: './owbinding-a.css',
})
export class OwbindingA {

  color:string= "negro";
}
