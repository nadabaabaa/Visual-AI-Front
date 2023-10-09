import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkMode = false;

  constructor() {
    // Vérifiez si le thème est déjà en mode sombre lors du chargement de l'application
    this.darkMode = localStorage.getItem('theme') === 'dark';
    this.applyTheme();
  }

  enableDarkMode() {
    this.darkMode = true;
    this.applyTheme();
    // Enregistrez le thème dans le stockage local
    localStorage.setItem('theme', 'dark');
  }

  enableLightMode() {
    this.darkMode = false;
    this.applyTheme();
    // Supprimez le thème du stockage local
    localStorage.removeItem('theme');
  }

  isDarkTheme() {
    return this.darkMode;
  }

  private applyTheme() {
    if (this.darkMode) {
      // Appliquez les styles du mode sombre ici
      document.body.classList.add('darkmode');
      document.body.style.backgroundImage = 'url("assets/photo.jpg")';
    } else {
      // Appliquez les styles du mode clair ici
      document.body.classList.remove('darkmode');
      document.body.style.backgroundImage = 'url("assets/photo2.jpg")';
    }
  }
}
