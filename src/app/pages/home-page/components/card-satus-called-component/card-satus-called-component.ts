import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-satus-called-component',
  imports: [],
  templateUrl: './card-satus-called-component.html',
  styleUrl: './card-satus-called-component.css',
})
export class CardSatusCalledComponent {
  @Input() text: string = "";
  @Input() status: string = "";
}
