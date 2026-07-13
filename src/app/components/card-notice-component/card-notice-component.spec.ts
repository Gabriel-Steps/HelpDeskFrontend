import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNoticeComponent } from './card-notice-component';

describe('CardNoticeComponent', () => {
  let component: CardNoticeComponent;
  let fixture: ComponentFixture<CardNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardNoticeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardNoticeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
