import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';

// import { BlueprintPage } from '../pages/blueprint/blueprint';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { SettingsPage } from '../pages/settings/settings';
import { QuestionPaperModule } from '../pages/question-paper-genrator/question-paper-genrator.module';
import { BlueprintModule } from '../pages/blueprint/blueprint.module';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsEditPage } from '../pages/settings-edit/settings-edit';

@NgModule({
  declarations: [
    MyApp,
    // BlueprintPage,
    AboutusPage,
    SettingsPage,
    SettingsEditPage  
  ],
  imports: [
    QuestionPaperModule,
    BlueprintModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // BlueprintPage,
    AboutusPage,
    SettingsPage,
    SettingsEditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
