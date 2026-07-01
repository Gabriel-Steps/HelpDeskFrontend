import { Component, Input } from '@angular/core';

type PreviewImage = string | null;

@Component({
  selector: 'app-preview-image-perfil-user-component',
  imports: [],
  templateUrl: './preview-image-perfil-user-component.html',
  styleUrl: './preview-image-perfil-user-component.css',
})
export class PreviewImagePerfilUserComponent {
  @Input() previewUrl: PreviewImage = null;
}
