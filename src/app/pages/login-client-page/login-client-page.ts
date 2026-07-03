import { Component } from '@angular/core';
import { AuthServices } from '../../services/auth/auth-services';
import { Router } from '@angular/router';
import { InputComponent } from '../../components/input-component/input-component';
import { ButtonComponent } from '../../components/button-component/button-component';
import { UserLoginInterface } from '../../interfaces/loginInterfaces/userLoginInterface';

@Component({
  selector: 'app-login-client-page',
  imports: [InputComponent, ButtonComponent],
  templateUrl: './login-client-page.html',
  styleUrl: './login-client-page.css',
})
export class LoginClientPage {
  public userLogin: UserLoginInterface = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthServices, private router: Router) {}

  public Login(): void{
    if(this.userLogin.email === '' || this.userLogin.password === ''){
      alert("Todos os campos devem estar preenchidos!");
      return;
    }
    this.authService.login(this.userLogin.email, this.userLogin.password).subscribe(response => {
      if(response.status){
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem('token', response.data.token);
        this.router.navigate(['/home']);
      }
    })
  }

  public redirecionarParaRegister(): void{
    this.router.navigate(['/register']);
  }
}
