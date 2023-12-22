import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteEtudiantComponent } from './note-etudiant.component';

describe('NoteEtudiantComponent', () => {
  let component: NoteEtudiantComponent;
  let fixture: ComponentFixture<NoteEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteEtudiantComponent]
    });
    fixture = TestBed.createComponent(NoteEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
