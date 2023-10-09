import { Component, OnInit } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { TranslateService } from '@ngx-translate/core'
import { LanguageService } from 'src/app/language.service'
import { ThemeService } from 'src/app/theme.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home implements OnInit {
  rawjynj: string = ' '
  rawzawv: string = ' '
  constructor(private title: Title, private meta: Meta,public themeService: ThemeService ,public translate: TranslateService,public languageService: LanguageService) {
    this.title.setTitle('Soft UI Pro')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Soft UI Pro',
      },
    ])
  } // home.component.ts (ou tout autre composant)
  ngOnInit() {
    // Utilisez le service LanguageService pour obtenir la langue sélectionnée
    const selectedLanguage = this.languageService.getSelectedLanguage();

    // Utilisez translate.use() pour définir la langue actuelle
    this.translate.use(selectedLanguage);

  }
  toggleTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.enableLightMode();
    } else {
      this.themeService.enableDarkMode();
    }
  }
 
  
}
