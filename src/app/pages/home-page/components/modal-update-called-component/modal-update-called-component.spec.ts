import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateCalledComponent } from './modal-update-called-component';

describe('ModalUpdateCalledComponent', () => {
  let component: ModalUpdateCalledComponent;
  let fixture: ComponentFixture<ModalUpdateCalledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalUpdateCalledComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalUpdateCalledComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
