import { Component } from '@angular/core';
import { InputComponent } from '../../components/input-component/input-component';
import { ButtonComponent } from '../../components/button-component/button-component';
import { AuthServices } from '../../services/auth/auth-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-client-page',
  imports: [InputComponent, ButtonComponent],
  templateUrl: './register-client-page.html',
  styleUrl: './register-client-page.css',
})
export class RegisterClientPage {
  public name: string = '';
  public email: string = '';
  public password: string = '';
  public confirmPassword: string = '';

  constructor(private authService: AuthServices, private router: Router) {}

  public Register(): void{
    if(this.password !== this.confirmPassword){
      alert("As senhas estão diferentes!");
      return;
    }else if(this.name === '' || this.email === '' || this.password === '' || this.confirmPassword === ''){
      alert("Todos os campos devem estar preenchidos!");
      return;
    }
    this.authService.register(this.name, this.email, this.password, "Cliente").subscribe(response => {
      if(response.status){
        localStorage.setItem("user", response.data);
        this.router.navigate(['/home']);
    }
    })
  }

  public redirecionarParaLogin():void {
    this.router.navigate(['/login']);
  }
}
