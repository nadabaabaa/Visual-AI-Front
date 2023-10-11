import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import {WebcamModule} from './modules/webcam/webcam.module';
import { FormsModule, NgModel } from '@angular/forms'; // Import this line

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageService } from './language.service';
import { CommonModule } from '@angular/common';

export function appInitializerFactory(translate: TranslateService) {
  return () => {
    translate.setDefaultLang('fr'); // Définissez la langue par défaut ici
    return translate.use('fr').toPromise();
  };
}

@NgModule({
  declarations: [AppComponent,],
  imports: [FormsModule , BrowserModule, AppRoutingModule, ComponentsModule, WebcamModule,HttpClientModule, TranslateModule.forRoot(),
 ],
   providers: [
    LanguageService, // Ajoutez le service ici
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService],
      multi: true,
    },
  ],  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
export  function createTranslateLoader(http : HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
