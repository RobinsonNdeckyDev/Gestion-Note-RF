import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashMinComponent } from './dash-min.component';

describe('DashMinComponent', () => {
  let component: DashMinComponent;
  let fixture: ComponentFixture<DashMinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashMinComponent]
    });
    fixture = TestBed.createComponent(DashMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
