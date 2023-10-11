import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Footer } from './footer/footer.component'
import { Header } from './header/header.component'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { createTranslateLoader } from '../app.module'
import { LanguageService } from '../language.service'
import { FormsModule, NgModel } from '@angular/forms'

@NgModule({
  declarations: [
    Footer,
    Header,
  ],
  imports: [CommonModule, RouterModule,HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }), ],
  exports: [
    Footer,
    Header,
  ],
  providers: [LanguageService], // Ajoutez le service ici

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}

  

