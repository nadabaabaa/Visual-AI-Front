import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { TranslateService } from '@ngx-translate/core'
import { LanguageService } from 'src/app/language.service'
import { ThemeService } from 'src/app/theme.service'

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css'],
})
export class Products {

  constructor(private title: Title, private meta: Meta,public themeService: ThemeService,public languageService: LanguageService,public translate: TranslateService) {
    this.title.setTitle('Products - Soft UI Pro')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Products - Soft UI Pro',
      },
    ])
 
    }  
    ngOnInit() {
      // Vérifiez si la langue par défaut n'a pas encore été définie
      if (!this.translate.getDefaultLang()) {
        // Définir la langue par défaut (par exemple, 'fr')
        this.translate.setDefaultLang('fr');
      }
    
      // Vous pouvez également vérifier si la langue actuelle n'a pas encore été définie
      if (!this.translate.currentLang) {
        // Utilisez translate.use() pour définir la langue ici
        this.translate.use('fr'); // Définissez la langue actuelle sur 'fr' (français)
      }
    }
}
