import { Component, Input } from '@angular/core';
import { ModalComponent } from '../../../../components/modal-component/modal-component';
import { InputComponent } from '../../../../components/input-component/input-component';
import { ButtonComponent } from '../../../../components/button-component/button-component';
import { CreateCalledInterface } from '../../../../interfaces/modalCreateCalledInterfaces/modalCreateCalledInterface';

@Component({
  selector: 'app-modal-create-called-component',
  imports: [ModalComponent, InputComponent, ButtonComponent],
  templateUrl: './modal-create-called-component.html',
  styleUrl: './modal-create-called-component.css',
})
export class ModalCreateCalledComponent {
  public createCalled: CreateCalledInterface={
    title: '',
    description: ''
  }
  
  @Input() isOpen: boolean = false;
  @Input() onClosedModal!: () => void;
}
