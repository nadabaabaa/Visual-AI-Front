import { Component, Input } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { LanguageService } from 'src/app/language.service'

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class Footer {
  @Input()
  rootClassName: string = ''
  constructor( ) {}
  
}
