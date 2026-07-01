import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewImagePerfilUserComponent } from './preview-image-perfil-user-component';

describe('PreviewImagePerfilUserComponent', () => {
  let component: PreviewImagePerfilUserComponent;
  let fixture: ComponentFixture<PreviewImagePerfilUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewImagePerfilUserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PreviewImagePerfilUserComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
