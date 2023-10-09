import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Company } from './company.component'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { createTranslateLoader } from 'src/app/app.module'

const routes = [
  {
    path: '',
    component: Company,
  },
]

@NgModule({
  declarations: [Company],
  imports: [ ComponentsModule, RouterModule.forChild(routes),HttpClientModule,CommonModule,
    TranslateModule],
  exports: [Company],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CompanyModule {}
