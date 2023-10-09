import { Component, OnInit } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { TranslateService } from '@ngx-translate/core'
import { LanguageService } from 'src/app/language.service'
import { ThemeService } from 'src/app/theme.service'

@Component({
  selector: 'app-company',
  templateUrl: 'company.component.html',
  styleUrls: ['company.component.css'],
})
export class Company implements OnInit {
  constructor(private title: Title, private meta: Meta,public themeService: ThemeService,public translate: TranslateService,public languageService: LanguageService ) {}
    ngOnInit() {
      // Utilisez le service LanguageService pour obtenir la langue sélectionnée
      const selectedLanguage = this.languageService.getSelectedLanguage();
  
      // Utilisez translate.use() pour définir la langue actuelle
      this.translate.use(selectedLanguage);
  
      this.title.setTitle('Company - Soft UI Pro');
      this.meta.addTags([
        {
          property: 'og:title',
          content: 'Company - Soft UI Pro',
        },
      ]);
    }
  }
  

