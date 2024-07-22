import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardformationComponent } from './cardformation.component';

describe('CardformationComponent', () => {
  let component: CardformationComponent;
  let fixture: ComponentFixture<CardformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
