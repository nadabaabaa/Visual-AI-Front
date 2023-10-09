import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import {WebcamModule} from 'ngx-webcam';
import { FormsModule } from '@angular/forms'; // Import this line
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { ComponentsModule } from '../../components/components.module'
import { Conversation } from './conversation.component'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/app.module';

const routes = [
  {
    path: '',
    component: Conversation,
  },
]

@NgModule({
  declarations: [Conversation],
  imports: [HttpClientModule ,FormsModule , CommonModule, WebcamModule,ComponentsModule, RouterModule.forChild(routes),HttpClientModule,
    TranslateModule],
  exports: [Conversation],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ConversationModule {}
