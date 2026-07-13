import { Component, Input } from '@angular/core';
import { CalledViewModelInterface } from '../../../../interfaces/calledInterfaces/calledViewModelInterface';
import { ModalComponent } from '../../../../components/modal-component/modal-component';
import { InputComponent } from '../../../../components/input-component/input-component';
import { CalledServices } from '../../../../services/called/called-services';
import { ButtonComponent } from '../../../../components/button-component/button-component';

@Component({
  selector: 'app-modal-update-called-component',
  imports: [ModalComponent, InputComponent, ButtonComponent],
  templateUrl: './modal-update-called-component.html',
  styleUrl: './modal-update-called-component.css',
})
export class ModalUpdateCalledComponent {
  @Input() dataModal: CalledViewModelInterface = {
    id: '',
    userId: '',
    technicianId: null,
    title: '',
    description: '',
    status: 0,
    createdAt: ''
  }

  @Input() isOpen: boolean = false;
  @Input() onClosedModal!: () => void; 
  @Input() confirmAction!: () => void;

  constructor(private calledServices: CalledServices) { }

  clearInputs = () => {
    this.dataModal.title = "";
    this.dataModal.description = "";
  }

  updateCalled = () => {
    this.calledServices.updateCalled(this.dataModal).subscribe(response => {
      if(response.status){
        alert("Chamado atualizado com sucesso!");
        this.clearInputs();
        this.confirmAction();
        this.onClosedModal();
      }
    })
  }
}
