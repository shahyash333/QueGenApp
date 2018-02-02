import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { BlueprintModalPage } from './blueprint.modal/blueprint-modal';

/**
 * Generated class for the BlueprintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-blueprint',
  templateUrl: 'blueprint.html',
})
export class BlueprintPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  public BlueprintopenModal() {
    let myModal = this.modalCtrl.create(BlueprintModalPage);
    myModal.present();
  }

}
