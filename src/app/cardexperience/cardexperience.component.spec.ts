import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardexperienceComponent } from './cardexperience.component';

describe('CardexperienceComponent', () => {
  let component: CardexperienceComponent;
  let fixture: ComponentFixture<CardexperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardexperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
