import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaComponent } from './rea.component';

describe('ReaComponent', () => {
  let component: ReaComponent;
  let fixture: ComponentFixture<ReaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
