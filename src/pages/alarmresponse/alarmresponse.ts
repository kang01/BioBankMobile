import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ViewimagePage } from '../viewimage/viewimage';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';


@IonicPage()
@Component({
  selector: 'page-alarmresponse',
  templateUrl: 'alarmresponse.html',
})
export class AlarmresponsePage {
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    private imagePicker: ImagePicker) {
  }
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
    console.log('ionViewDidLoad AlarmresponsePage');
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
  getPicture(){
    // 设置选项
    const options: ImagePickerOptions = {
      maximumImagesCount: 6,
      quality: 50
    };

    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
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
            this.getPicture()
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

}
