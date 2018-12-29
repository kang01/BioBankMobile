import { MenuPage } from './../pages/menu/menu';
import { LoginPage } from './../pages/login/login';
import { StartPage } from './../pages/start/start';
import { BrowserModule,HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { FormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { KonvaModule } from 'ng2-konva';
import { NgxGaugeModule } from 'ngx-gauge';
import { Camera } from '@ionic-native/camera';
import { Base64 } from '@ionic-native/base64';
import { ImagePicker } from '@ionic-native/image-picker';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { IonicStorageModule } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs';
import { EquipmentInfoPage } from '../pages/equipment-info/equipment-info';
import { MonitoringPage } from '../pages/monitoring/monitoring';
import { ViewimagePage } from '../pages/viewimage/viewimage';
import { ViewpdfPage } from '../pages/viewpdf/viewpdf';
import { AlarmresponsePage } from '../pages/alarmresponse/alarmresponse';
import { AddequipmentPage } from '../pages/addequipment/addequipment';
import { SearchPage } from '../pages/search/search';




// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


// export class MyHammerConfig extends HammerGestureConfig  {
//   overrides = <any>{
//      // override hammerjs default configuration
//      'pan': {threshold: 5},
//      'swipe': {
//         velocity: 0.4,
//         threshold: 20,
//         direction: 31 
//      },
//     'press':{}
//  }
// }
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
@NgModule({
  declarations: [
    MyApp,
    ListPage,
    StartPage,
    LoginPage,
    HomePage,
    MenuPage,
    TabsPage,
    EquipmentInfoPage,
    MonitoringPage,
    ViewimagePage,
    ViewpdfPage,
    AlarmresponsePage,
    AddequipmentPage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true' ,      //隐藏全部子页面tabs
      iconMode: 'ios',                  //引用iOS的返回图标
      mode: 'ios',                      //把平台设置成iOS的风格
      modalEnter: 'modal-slide-in',     //设置返回的动画效果
      modalLeave: 'modal-slide-out',    //设置返回的动画效果
      backButtonText : '返回',          //设置返回按钮的文本
    }),
    IonicStorageModule.forRoot(),
    KonvaModule,
    NgxGaugeModule,
    SwiperModule,
    PdfViewerModule,
    FormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    StartPage,
    LoginPage,
    HomePage,
    MenuPage,
    TabsPage,
    EquipmentInfoPage,
    MonitoringPage,
    ViewimagePage,
    ViewpdfPage,
    AlarmresponsePage,
    AddequipmentPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Base64,
    ImagePicker,
    DocumentViewer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // { 
    //   provide: HAMMER_GESTURE_CONFIG, 
    //   useClass: MyHammerConfig 
    // },
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class AppModule {
  overrides = {'swipe': {

    velocity:0.4,

    threshold:20}
  }
}

