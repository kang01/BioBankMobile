import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ViewimagePage } from '../viewimage/viewimage';
import { AlarmresponsePage } from '../alarmresponse/alarmresponse';
import { AddequipmentPage } from '../addequipment/addequipment';
@IonicPage()
@Component({
  selector: 'page-monitoring',
  templateUrl: 'monitoring.html',
})
export class MonitoringPage {
  
  
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private camera: Camera,
     public actionSheetCtrl: ActionSheetController,
     public modalCtrl: ModalController
     ) {
  }
  equipmentCodeStr;
  types = [
    { val: '1',label:'超温报警', isChecked: true, className:'color-red'},
    { val: '2',label:'液氮安全', isChecked: false, className:'color-red' },
    { val: '3',label:'消防报警', isChecked: false, className:'color-red' },
    { val: '4',label:'氧浓度报警', isChecked: false, className:'color-red' },
    { val: '5',label:'红外报警', isChecked: false, className:'color-red' },
    { val: '6',label:'供电报警', isChecked: false, className:'color-red' },
    { val: '7',label:'探头故障', isChecked: false, className:'color-red' },
    { val: '8',label:'探头失联', isChecked: false, className:'color-yellow' },
    { val: '9',label:'需要保养 & 维护', isChecked: false, className:'color-green' },
    { val: '10',label:'需要检测 & 校准', isChecked: false, className:'color-green' },
    { val: '11',label:'其他报警（严重）', isChecked: false, className:'color-red' },
    { val: '12',label:'其他报警（一般）', isChecked: false, className:'color-yellow' },
    { val: '13',label:'其他报警（正常）', isChecked: false, className:'color-green' }
  ];
  images = ['assets/imgs/112.jpg','assets/imgs/113.jpg'];
  options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation:true,
    allowEdit:true,
  }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad MonitoringPage');
  }
  alarmResponse(){
    this.navCtrl.push(AlarmresponsePage)
  }
  takePicture(){
    this.presentActionSheet();
  }
  carmera(){
    this.camera.getPicture(this.options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.images.unshift(base64Image);
    }, (err) => {
     });
  }
  viewImages(i){
    this.navCtrl.push(ViewimagePage,{images:this.images,selectedImageIndex:i})
  }
  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: '拍照片',
          handler: () => {
           this.options.sourceType = this.camera.PictureSourceType.CAMERA
           this.carmera()
          }
        },{
          text: '我的相册',
          handler: () => {
            this.options.sourceType =this.camera.PictureSourceType.PHOTOLIBRARY
            this.carmera()
          }
        },{
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  addEquipmentInfoModal() {
    let profileModal = this.modalCtrl.create(AddequipmentPage, {
    });
    profileModal.onDidDismiss(data => {
      console.log(data);
      this.equipmentCodeStr = data;
    });
    profileModal.present();
  }

}
