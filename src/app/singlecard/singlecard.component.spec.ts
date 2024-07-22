import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecardComponent } from './singlecard.component';

describe('SinglecardComponent', () => {
  let component: SinglecardComponent;
  let fixture: ComponentFixture<SinglecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglecardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
