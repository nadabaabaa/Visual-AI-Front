// language.service.ts
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly LANGUAGE_KEY = 'selectedLanguage';

  constructor(private translate: TranslateService) {}

  setLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem(this.LANGUAGE_KEY, language); // Stockez la langue sélectionnée dans le localStorage
  }

  getSelectedLanguage(): string {
    const savedLanguage = localStorage.getItem(this.LANGUAGE_KEY);
    if (savedLanguage) {
      return savedLanguage;
    }
    return this.translate.getDefaultLang(); // Si aucune langue sélectionnée, retournez la langue par défaut
  }
}
