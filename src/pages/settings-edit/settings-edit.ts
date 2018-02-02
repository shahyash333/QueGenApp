import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { Camera } from '@ionic-native/camera';
/**
 * Generated class for the SettingsEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-settings-edit',
	templateUrl: 'settings-edit.html',
})
export class SettingsEditPage {
	public imageSrc: any;
	constructor(public navCtrl: NavController, public navParams: NavParams) {

	}
	// public gallery() {
	// 	let cameraOptions = {
	// 		sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
	// 		destinationType: this.camera.DestinationType.FILE_URI,
	// 		quality: 100,
	// 		targetWidth: 1000,
	// 		targetHeight: 1000,
	// 		encodingType: this.camera.EncodingType.JPEG,
	// 		correctOrientation: true
	// 	}

	// 	this.camera.getPicture(cameraOptions)
	// 		.then((file_uri) => {
	// 			this.imageSrc = file_uri;
	// 			console.log(this.imageSrc);
	// 		},
	// 		err => console.log(err));

	// }
	ionViewDidLoad() {
		console.log('ionViewDidLoad SettingsEditPage');
	}

}
