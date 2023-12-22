import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-etudiant',
  templateUrl: './dash-etudiant.component.html',
  styleUrls: ['./dash-etudiant.component.css']
})
export class DashEtudiantComponent {

  // Gestion bouton
  boutonActif = 1;

  // Initialiser le contenu actuel
  currentContent: string = 'dashEtud';

  // Mettre à jour le contenu actuel
  showComponant(contentId: string): void {
    this.currentContent = contentId; 
  }

}
