import { ViewpdfPage } from './../viewpdf/viewpdf';
import { MonitoringPage } from './../monitoring/monitoring';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-equipment-info',
  templateUrl: 'equipment-info.html',
})
export class EquipmentInfoPage {
  selectedSegment= "1";
  equipmentCode;
  source;
  options = {
    title: 'My PDF'
  }
  constructor(
    public navCtrl: NavController, 
    public params: NavParams,
    ) {
    console.log('UserId', params.get('equipmentCode'));
    this.equipmentCode = params.get('equipmentCode');
    this.source = params.get('source');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipmentInfoPage');
  }
  buttonClick(){
    this.navCtrl.push(MonitoringPage)
  }
  segmentChanged(event){
    console.log(event);
  }
  viewPdf1(){
    // this.document.viewDocument('https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf', 'application/pdf', this.options)
    // this.pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
    this.navCtrl.push(ViewpdfPage,{pdfSrc:'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf'})
  }
  viewPdf2(){
    this.navCtrl.push(ViewpdfPage,{pdfSrc:'assets/templates/BBIS.pdf'})
  }

}
