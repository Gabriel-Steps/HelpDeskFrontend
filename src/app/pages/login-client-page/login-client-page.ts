import { Component } from '@angular/core';
import { AuthServices } from '../../services/auth/auth-services';
import { Router } from '@angular/router';
import { InputComponent } from '../../components/input-component/input-component';
import { ButtonComponent } from '../../components/button-component/button-component';

@Component({
  selector: 'app-login-client-page',
  imports: [InputComponent, ButtonComponent],
  templateUrl: './login-client-page.html',
  styleUrl: './login-client-page.css',
})
export class LoginClientPage {
  public email: string = '';
  public password: string = '';

  constructor(private authService: AuthServices, private router: Router) {}

  public Login(): void{
    if(this.email === '' || this.password === ''){
      alert("Todos os campos devem estar preenchidos!");
      return;
    }
    this.authService.login(this.email, this.password).subscribe(response => {
      if(response.status){
        localStorage.setItem("user", JSON.stringify(response.data));
        this.router.navigate(['/home']);
      }
    })
  }

  public redirecionarParaRegister(): void{
    this.router.navigate(['/register']);
  }
}
