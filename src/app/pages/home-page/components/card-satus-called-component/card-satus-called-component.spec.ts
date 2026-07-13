import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSatusCalledComponent } from './card-satus-called-component';

describe('CardSatusCalledComponent', () => {
  let component: CardSatusCalledComponent;
  let fixture: ComponentFixture<CardSatusCalledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSatusCalledComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardSatusCalledComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
