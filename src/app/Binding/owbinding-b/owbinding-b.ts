import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-owbinding-b',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './owbinding-b.html',
  styleUrl: './owbinding-b.css',
})
export class OwbindingB {

isDisable: boolean= true;

enable(){
  this.isDisable=!this.isDisable
}

}
