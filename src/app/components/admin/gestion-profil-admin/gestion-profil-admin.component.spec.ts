import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProfilAdminComponent } from './gestion-profil-admin.component';

describe('GestionProfilAdminComponent', () => {
  let component: GestionProfilAdminComponent;
  let fixture: ComponentFixture<GestionProfilAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionProfilAdminComponent]
    });
    fixture = TestBed.createComponent(GestionProfilAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
