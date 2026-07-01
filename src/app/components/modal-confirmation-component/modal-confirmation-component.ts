import { Component, Input } from '@angular/core';
import { ModalComponent } from '../modal-component/modal-component';
import { ButtonComponent } from '../button-component/button-component';

@Component({
  selector: 'app-modal-confirmation-component',
  imports: [ModalComponent, ButtonComponent],
  templateUrl: './modal-confirmation-component.html',
  styleUrl: './modal-confirmation-component.css',
})
export class ModalConfirmationComponent {
  @Input() isOpen: boolean = false;
  @Input() onClosedModal!: () => void;
  @Input() titleModal: string = "";
  @Input() message: string = "";
  @Input() onClick!: () => void;
}
