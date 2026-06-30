import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateCalledComponent } from './modal-create-called-component';

describe('ModalCreateCalledComponent', () => {
  let component: ModalCreateCalledComponent;
  let fixture: ComponentFixture<ModalCreateCalledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCreateCalledComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCreateCalledComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
