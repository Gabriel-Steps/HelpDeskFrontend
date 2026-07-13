import { Component, EventEmitter, Input, Output } from '@angular/core';

type TypeButton = "primary" | "secondary" | "sidebar" | "delete";

@Component({
  selector: 'app-button-component',
  imports: [],
  templateUrl: './button-component.html',
  styleUrl: './button-component.css',
})

export class ButtonComponent {
  @Input() text: string = "";
  @Input() type: TypeButton = "primary"
  @Input() icon?: string

  @Output() onClick = new EventEmitter<MouseEvent>();

  actionOnClick(event: MouseEvent){
    this.onClick.emit(event);
  }
}
