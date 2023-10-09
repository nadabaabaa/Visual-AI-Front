import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'; 
import { ComponentsModule } from '../../components/components.module'
import { SignUp } from './sign-up.component'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/app.module';

const routes = [
  {
    path: '',
    component: SignUp,
  },
]

@NgModule({
  declarations: [SignUp],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes) , FormsModule,HttpClientModule,
    TranslateModule],
  exports: [SignUp],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SignUpModule {}
