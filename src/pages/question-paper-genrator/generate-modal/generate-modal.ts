import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-generate-modal',
  templateUrl: 'generate-modal.html',
})
export class GenerateModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController ) {
  }

  GeneratecloseModal() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenerateModalPage');
  }

}
