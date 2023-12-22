import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationProfComponent } from './evaluation-prof.component';

describe('EvaluationProfComponent', () => {
  let component: EvaluationProfComponent;
  let fixture: ComponentFixture<EvaluationProfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluationProfComponent]
    });
    fixture = TestBed.createComponent(EvaluationProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
