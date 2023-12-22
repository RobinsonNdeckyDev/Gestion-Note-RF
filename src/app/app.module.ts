import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashComponent } from './components/admin/admin-dash/admin-dash.component';
import { GestionProfsComponent } from './components/admin/gestion-profs/gestion-profs.component';
import { GestionEtudiantsComponent } from './components/admin/gestion-etudiants/gestion-etudiants.component';
import { GestionMatieresComponent } from './components/admin/gestion-matieres/gestion-matieres.component';
import { GestionClassesComponent } from './components/admin/gestion-classes/gestion-classes.component';
import { GestionProfilAdminComponent } from './components/admin/gestion-profil-admin/gestion-profil-admin.component';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { DashProfesseurComponent } from './components/professeur/dash-professeur/dash-professeur.component';
import { ProfilProfesseurComponent } from './components/professeur/profil-professeur/profil-professeur.component';
import { EvaluationProfComponent } from './components/professeur/evaluation-prof/evaluation-prof.component';
import { DashEtudiantComponent } from './components/etudiant/dash-etudiant/dash-etudiant.component';
import { ProfilEtudiantComponent } from './components/etudiant/profil-etudiant/profil-etudiant.component';
import { NoteEtudiantComponent } from './components/etudiant/note-etudiant/note-etudiant.component';
import { DashMinComponent } from './components/admin/dash-min/dash-min.component';
import { DashEtudComponent } from './components/etudiant/dash-etud/dash-etud.component';
import { DashProfComponent } from './components/professeur/dash-prof/dash-prof.component';
import { MonComposantComponent } from './components/mon-composant/mon-composant.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashComponent,
    GestionProfsComponent,
    GestionEtudiantsComponent,
    GestionMatieresComponent,
    GestionClassesComponent,
    GestionProfilAdminComponent,
    AuthComponent,
    DashProfesseurComponent,
    ProfilProfesseurComponent,
    EvaluationProfComponent,
    DashEtudiantComponent,
    ProfilEtudiantComponent,
    NoteEtudiantComponent,
    DashMinComponent,
    DashEtudComponent,
    DashProfComponent,
    MonComposantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
