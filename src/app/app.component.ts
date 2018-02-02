import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { QuestionPaperGenratorPage } from '../pages/question-paper-genrator/question-paper-genrator';
import { BlueprintPage } from '../pages/blueprint/blueprint';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { SettingsPage } from '../pages/settings/settings';
import { SettingsEditPage } from '../pages/settings-edit/settings-edit';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = QuestionPaperGenratorPage;

  pages: Array<{title: string, img: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Question Paper Genrator',  img: '../assets/imgs/question.png', component: QuestionPaperGenratorPage },
      { title: 'Blueprint',  img: "../assets/imgs/blueprint.png", component: BlueprintPage },
      { title: 'About us',  img: "../assets/imgs/about.png", component: AboutusPage },
      { title: 'Settings',  img: "../assets/imgs/settings.png", component: SettingsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
