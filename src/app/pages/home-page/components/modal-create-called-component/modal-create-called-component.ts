import { Component, Input } from '@angular/core';
import { ModalComponent } from '../../../../components/modal-component/modal-component';
import { InputComponent } from '../../../../components/input-component/input-component';
import { ButtonComponent } from '../../../../components/button-component/button-component';
import { CreateCalledInterface } from '../../../../interfaces/modalCreateCalledInterfaces/modalCreateCalledInterface';
import { CalledServices } from '../../../../services/called/called-services';

@Component({
  selector: 'app-modal-create-called-component',
  imports: [ModalComponent, InputComponent, ButtonComponent],
  templateUrl: './modal-create-called-component.html',
  styleUrl: './modal-create-called-component.css',
})
export class ModalCreateCalledComponent {
  public createCalledModel: CreateCalledInterface={
    title: '',
    description: ''
  }

  constructor(private calledServices: CalledServices) { }
  
  @Input() isOpen: boolean = false;
  @Input() onClosedModal!: () => void;
  @Input() confirmAction!: () => void;

  public clearInputs(): void{
    this.createCalledModel.title = '';
    this.createCalledModel.description = '';
  }

  public registerCalled(): void{
    this.calledServices.createCalled(
      this.createCalledModel.title, 
      this.createCalledModel.description)
      .subscribe(response => {
        if(response.status)
          alert("Chamado criado com sucesso!");
        else{
          alert("Houve um erro ao criar o chamado!");
        }
    });
    this.clearInputs();
    this.confirmAction;
    this.onClosedModal;
  }
}
