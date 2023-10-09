import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Home } from './home.component'
import { ThemeService } from 'src/app/theme.service'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { createTranslateLoader } from 'src/app/app.module'

const routes = [
  {
    path: '',
    component: Home,
  },
]

@NgModule({
  declarations: [Home],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes),HttpClientModule,
    TranslateModule],
  exports: [Home],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
