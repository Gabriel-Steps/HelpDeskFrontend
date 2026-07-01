import { ChangeDetectorRef, Component } from '@angular/core';
import { InputComponent } from '../../components/input-component/input-component';
import { ButtonComponent } from '../../components/button-component/button-component';
import { AuthServices } from '../../services/auth/auth-services';
import { Router } from '@angular/router';
import { PreviewImagePerfilUserComponent } from '../../components/preview-image-perfil-user-component/preview-image-perfil-user-component';
import { UserRegisterInterface } from '../../interfaces/registerInterfaces/userRegisterInterface';

@Component({
  selector: 'app-register-client-page',
  imports: [InputComponent, ButtonComponent, PreviewImagePerfilUserComponent],
  templateUrl: './register-client-page.html',
  styleUrl: './register-client-page.css',
})
export class RegisterClientPage {
  public userRegister: UserRegisterInterface = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  public selectedFile: File | null = null;
  public previewUrl: string | null = "assets/user-no-pic.png";

  constructor(private authService: AuthServices, private router: Router, private cdr: ChangeDetectorRef) {}

  public Register(): void{
    if(this.userRegister.password !== this.userRegister.confirmPassword){
      alert("As senhas estão diferentes!");
      return;
    }else if(this.userRegister.name === '' ||
      this.userRegister.email === '' || 
      this.userRegister.password === '' || 
      this.userRegister.confirmPassword === ''){
      alert("Todos os campos devem estar preenchidos!");
      return;
    }
    this.authService.register(
      this.userRegister.name,
      this.userRegister.email, 
      this.userRegister.password, "Cliente")
      .subscribe(response => {
      if(response.status){
        localStorage.setItem("user", response.data);
        this.router.navigate(['/home']);
    }
    })
  }

  public redirecionarParaLogin():void {
    this.router.navigate(['/login']);
  }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files;

    if (files && files.length > 0) {
      const file = files[0];
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        alert('Imagem muito grande! Máximo 5MB');
        return;
      }
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        alert('Tipo de arquivo não permitido! Use JPG, PNG ou GIF');
        return;
      }
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewUrl = e.target?.result as string;
        this.cdr.detectChanges();

      };
      reader.readAsDataURL(file);
    }
  }

  public confirmar(): void{
    console.log("Confirmado")
  }
}
