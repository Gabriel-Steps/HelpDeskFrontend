import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-component',
  imports: [],
  templateUrl: './modal-component.html',
  styleUrl: './modal-component.css',
})
export class ModalComponent {
  @Input() title: string = "";
  @Input() isOpen: boolean = false;
  @Input() onclosed!: () => void;

  @Output() onClosed = new EventEmitter<MouseEvent>();
  
  actionOnClick(event: MouseEvent){
    this.onClosed.emit(event);
  }

  fechar() {
    if (this.onclosed) {
      this.onclosed();
    }
  }
}
