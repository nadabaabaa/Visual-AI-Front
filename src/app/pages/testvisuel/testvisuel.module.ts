import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'; 
import { ComponentsModule } from '../../components/components.module'
import { testvisuel } from './testvisuel.component'
import { WebcamModule } from 'ngx-webcam';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/app.module';

const routes = [
  {
    path: '',
    component: testvisuel,
  },
]

@NgModule({
  declarations: [testvisuel],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes) , FormsModule,WebcamModule,HttpClientModule,
    TranslateModule],
  exports: [testvisuel],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestvisuelModule {}
