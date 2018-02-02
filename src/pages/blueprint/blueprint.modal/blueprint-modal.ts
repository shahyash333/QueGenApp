import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-blueprint-modal',
  templateUrl: 'blueprint-modal.html',
})
export class BlueprintModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController ) {
  }

  BlueprintcloseModal() {
    this.viewCtrl.dismiss();
  }

  
}
