import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversecardComponent } from './reversecard.component';

describe('ReversecardComponent', () => {
  let component: ReversecardComponent;
  let fixture: ComponentFixture<ReversecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReversecardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReversecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
