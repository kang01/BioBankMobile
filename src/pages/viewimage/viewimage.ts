import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare let Swiper: any;

@IonicPage()
@Component({
  selector: 'page-viewimage',
  templateUrl: 'viewimage.html',
})
export class ViewimagePage {
  images;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
    this.images = navParams.get('images');
    this.selectedImageIndex = navParams.get('selectedImageIndex');
  }
  @ViewChild('panel') panel: ElementRef;
  swiper: any;
  selectedImageIndex;
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewimagePage');
    console.log(this.selectedImageIndex);
    this.swiper = new Swiper(this.panel.nativeElement, {
      initialSlide:this.selectedImageIndex,
      zoom: true,//双击,手势缩放
      loop: false,//循环切换
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      on:{
        slideChange: ()=>{
          if(this.swiper){
            let activeIndex = this.swiper.activeIndex;
            if(activeIndex < this.images.length && activeIndex >= 0){
              this.selectedImageIndex =  activeIndex;
            }
          }
        }
      }
    })
  }
  
  

}
