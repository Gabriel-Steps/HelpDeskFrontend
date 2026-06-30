import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../components/button-component/button-component';
import { ModalCreateCalledComponent } from './components/modal-create-called-component/modal-create-called-component';

type Result = null | string

@Component({
  selector: 'app-home-page',
  imports: [ButtonComponent, ModalCreateCalledComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  public nome: Result = "";
  public isOpenModalCreateCalled: boolean = false;

  constructor(private router: Router) { }

  ngOnInit():void {
    var user = localStorage.getItem("user");
    if(user === null)
      this.router.navigate(['/login']);

    this.nome = user;
  }

  invertIsOpenModalCreateCalled = () => {
    if(!this.isOpenModalCreateCalled)
      this.isOpenModalCreateCalled = true
    else
      this.isOpenModalCreateCalled = false
  }
}
