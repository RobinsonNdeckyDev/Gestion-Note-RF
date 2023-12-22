import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  private isAuthenticated = false;

  login() {
    // Logique de connexion (à adapter selon votre backend)
    this.isAuthenticated = true;
  }

  logout() {
    // Logique de déconnexion
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  
}
