import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { AdminDashComponent } from './components/admin/admin-dash/admin-dash.component';
import { DashProfesseurComponent } from './components/professeur/dash-professeur/dash-professeur.component';
import { DashEtudiantComponent } from './components/etudiant/dash-etudiant/dash-etudiant.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'login', component: AuthComponent},
  {path: 'admin', component: AdminDashComponent, canActivate: [AuthGuard]},
  {path: 'professeur', component: DashProfesseurComponent,  canActivate: [AuthGuard]},
  {path: 'professeur/:id', component: DashProfesseurComponent,  canActivate: [AuthGuard]},
  {path: 'etudiant', component: DashEtudiantComponent,  canActivate: [AuthGuard]},
  {path: 'etudiant/:id', component: DashEtudiantComponent,  canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
