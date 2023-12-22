import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-professeur',
  templateUrl: './dash-professeur.component.html',
  styleUrls: ['./dash-professeur.component.css']
})
export class DashProfesseurComponent {

  // Gestion bouton
  boutonActif = 1;

  // Initialiser le contenu actuel
  currentContent: string = 'dashProf';

  // Mettre à jour le contenu actuel
  showComponant(contentId: string): void {
    this.currentContent = contentId; 
  }

}
