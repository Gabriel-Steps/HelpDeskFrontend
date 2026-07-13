import { Component, Input } from '@angular/core';
import { CalledViewModelInterface } from '../../../../interfaces/calledInterfaces/calledViewModelInterface';
import { UserViewModelInterface } from '../../../../interfaces/userInterfaces/userViewModelInterface';
import { UserServices } from '../../../../services/user/user-services';
import { formatDate } from '@angular/common';
import { CardSatusCalledComponent } from '../card-satus-called-component/card-satus-called-component';
import { ButtonComponent } from '../../../../components/button-component/button-component';
import { CalledServices } from '../../../../services/called/called-services';
import { ModalUpdateCalledComponent } from '../modal-update-called-component/modal-update-called-component';

@Component({
  selector: 'app-card-called-component',
  imports: [CardSatusCalledComponent, ButtonComponent, ModalUpdateCalledComponent],
  templateUrl: './card-called-component.html',
  styleUrl: './card-called-component.css',
})
export class CardCalledComponent {
  @Input() calledModel: CalledViewModelInterface = {
    id: '',
    userId: '',
    technicianId: null,
    title: '',
    description: '',
    status: 0,
    createdAt: ''
  }
  @Input() onTrigger!: () => void;
  public technician: UserViewModelInterface = {
    id: '',
    name: '',
    email: '',
    role: ''
  }
  public openInfo: boolean = false;
  public iconInfo: string = "assets/caret-down.png";
  public loadingInfo: boolean = true;
  public isOpenModalUpdate: boolean = false;

  constructor(private userServices: UserServices, private calledServices: CalledServices) { }

  switchStatusHistory = () => {
    if(this.openInfo){
      this.openInfo = false;
      this.iconInfo = "assets/caret-down.png";
    }else{
      this.openInfo = true;
      this.iconInfo = "assets/caret-up.png";
      if(this.loadingInfo){
        this.getTechnianById();
        this.loadingInfo = false;
      }
    }
  }

  getTechnianById = () => {
    if(this.calledModel.technicianId){
      this.userServices.getUserById(this.calledModel.technicianId).subscribe(response => {
        if(response.status){
          this.technician = response.data;
        }
      });
    }
  }

  convertDate = () => {
    return formatDate(this.calledModel.createdAt, 'dd/MM/yyyy', 'en-US');
  }

  getTextStatus = () => {
    let texto = "";
    if(this.calledModel.status === 0)
      texto = "ABERTO";
    else if(this.calledModel.status === 1)
      texto = "ANDAMENTO";
    else
      texto = "FECHADO";

    return texto;
  }

  getClassStatus = () => {
    let classe = "";
    if(this.calledModel.status === 0)
      classe = "aberto";
    else if(this.calledModel.status === 1)
      classe = "andamento";
    else
      classe = "fechado"

    return classe;
  }

  deleteCalled = () => {
    this.calledServices.deleteCalled(this.calledModel.id).subscribe(response => {
      if(response.status){
        alert("Chamado removido com sucesso!");
        this.onTrigger();
      }
    })
  }

  onSwitchModalUpdate = () => {
    if(this.isOpenModalUpdate)
      this.isOpenModalUpdate = false;
    else
      this.isOpenModalUpdate = true;
  }
}
