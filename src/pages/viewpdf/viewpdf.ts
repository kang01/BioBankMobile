import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-viewpdf',
  templateUrl: 'viewpdf.html',
})
export class ViewpdfPage {
  pdfSrc;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    this.pdfSrc = this.navParams.get('pdfSrc')
  }

  ionViewDidLoad() {
    this.presentLoading();

    console.log('ionViewDidLoad ViewpdfPage');
  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }

}
