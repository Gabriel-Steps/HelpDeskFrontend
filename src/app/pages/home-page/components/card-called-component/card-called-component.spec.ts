import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCalledComponent } from './card-called-component';

describe('CardCalledComponent', () => {
  let component: CardCalledComponent;
  let fixture: ComponentFixture<CardCalledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCalledComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardCalledComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
