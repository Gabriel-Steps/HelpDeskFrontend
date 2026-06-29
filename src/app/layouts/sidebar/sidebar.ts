import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { ButtonComponent } from '../../components/button-component/button-component';

type Visibility = "visible" | "invisible";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  public iconSideBar: string = "assets/cross.png";
  public visibilitySideBarClass: Visibility = "visible";

  constructor(private router: Router) { }

  botoes = [
    {id: 1, text: "Home", icon: "assets/home.png", redirect: () => this.redirectHomePage()},
    {id: 2, text: "Perfil", icon: "assets/userbtn.png", redirect: () => this.redirectProfilePage()},
    {id: 3, text: "Sair", icon: "assets/entrance.png", redirect: () => this.logout()},
  ]

  public switchVisibility(): void {
    if (this.visibilitySideBarClass === "visible") {
      this.visibilitySideBarClass = "invisible";
      this.iconSideBar = "assets/menu-burger.png";
    } else {
      this.visibilitySideBarClass = "visible";
      this.iconSideBar = "assets/cross.png";
    }
  }

  public logout(): void {
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }

  public redirectHomePage(): void{
    this.router.navigate(['/home']);
  }

  public redirectProfilePage(): void{
    this.router.navigate(['/profile'])
  }
}