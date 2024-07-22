import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousselComponent } from './carrousel.component';

describe('CarrouselComponent', () => {
  let component: CarousselComponent;
  let fixture: ComponentFixture<CarousselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarousselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
