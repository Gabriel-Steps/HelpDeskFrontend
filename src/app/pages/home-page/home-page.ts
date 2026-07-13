import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../components/button-component/button-component';
import { ModalCreateCalledComponent } from './components/modal-create-called-component/modal-create-called-component';
import { AuthViewModelInterface } from '../../interfaces/authInterfaces/authVIewModelInterface';
import { CalledViewModelInterface } from '../../interfaces/calledInterfaces/calledViewModelInterface';
import { CalledServices } from '../../services/called/called-services';
import { CardCalledComponent } from './components/card-called-component/card-called-component';

@Component({
  selector: 'app-home-page',
  imports: [ButtonComponent, ModalCreateCalledComponent, CardCalledComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit{
  public usuario: AuthViewModelInterface = {
    id: '',
    name: '',
    email: '',
    token: '',
    role: ''
  }
  public listCalleds: CalledViewModelInterface[] = [];
  public isOpenModalCreateCalled: boolean = false;

  constructor(private router: Router, private calledServices: CalledServices, private cdr: ChangeDetectorRef) { }

  ngOnInit():void {
    const user = localStorage.getItem("user");
    if(user === null){
      this.router.navigate(['/login']);
      return;
    }
    this.usuario = JSON.parse(user) as AuthViewModelInterface;
    this.getAllCalledsByUserId();
  }

  invertIsOpenModalCreateCalled = () => {
    this.isOpenModalCreateCalled = !this.isOpenModalCreateCalled;
  }

  getAllCalledsByUserId = () => {
    this.calledServices.getAllCalledsByUserId().subscribe(response => {
      if(response.status){
        this.listCalleds = response.data;
        console.log(response.data);
        this.cdr.detectChanges();
      }
    })
  }
}
