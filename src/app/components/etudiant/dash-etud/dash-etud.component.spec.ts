import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashEtudComponent } from './dash-etud.component';

describe('DashEtudComponent', () => {
  let component: DashEtudComponent;
  let fixture: ComponentFixture<DashEtudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashEtudComponent]
    });
    fixture = TestBed.createComponent(DashEtudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
