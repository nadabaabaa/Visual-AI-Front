import { Component, Input, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { LanguageService } from 'src/app/language.service'
import { ThemeService } from 'src/app/theme.service'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class Header implements OnInit  {
  @Input()
  text1: string = 'Home'
  @Input()
  rootClassName: string = ''
  @Input()
  image_alt: string = 'image'
  @Input()
  image_alt3: string = 'image'
  @Input()
  image_src2: string = 'f23a913e-d468-4bcd-a00e-2780ae2dd4d7'
  @Input()
  text3: string = 'About our Company'
  @Input()
  text: string = 'CYBIRIS'
  @Input()
  image_src1: string = '1b0f22a0-88e5-43ea-a2f8-e47bde89f8f2'
  @Input()
  image_src: string = 'fe058910-b224-4e00-9428-32dd8f2f9d06'
  @Input()
  text2: string = 'Product'
  @Input()
  image_alt1: string = 'image'
  @Input()
  image_alt2: string = 'image'
  @Input()
  image_src3: string = '/assets/logocybiris2.png';
  frChecked = false; // Initialement, le français n'est pas sélectionné
  enChecked = false; // Initialement, l'anglais n'est pas sélectionné
  signInButtonText: string = 'Sign In';

  constructor(public themeService: ThemeService,public translate: TranslateService,public languageService: LanguageService ) {

  }
  
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
  changeLanguage(language: string): void {
    this.languageService.setLanguage(language);
  }
 // changeLanguage(event: any): void {
  //  const selectedLanguage = event.target.value; // Obtenez la langue sélectionnée depuis l'événement
  //  this.languageService.setLanguage(selectedLanguage);
  //}
}
