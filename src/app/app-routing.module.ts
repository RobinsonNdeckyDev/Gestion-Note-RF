import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { AdminDashComponent } from './components/admin/admin-dash/admin-dash.component';
import { DashProfesseurComponent } from './components/professeur/dash-professeur/dash-professeur.component';
import { DashEtudiantComponent } from './components/etudiant/dash-etudiant/dash-etudiant.component';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'login', component: AuthComponent},
  {path: 'admin', component: AdminDashComponent},
  {path: 'professeur', component: DashProfesseurComponent},
  {path: 'professeur/:id', component: DashProfesseurComponent},
  {path: 'etudiant', component: DashEtudiantComponent},
  {path: 'etudiant/:id', component: DashEtudiantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
