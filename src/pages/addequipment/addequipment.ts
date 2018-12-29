import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-addequipment',
  templateUrl: 'addequipment.html',
})
export class AddequipmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }
  selectedSegment ="1";
  floors = [
    {
      id:1,name:"F1"
    },
    {
      id:2,name:"F2"
    },
    {
      id:3,name:"F3"
    },
    {
        id:4,name:"F4"
    }
  ];
  f1=[
    {id:1,name:'F1-01',isSelected:true},
    {id:2,name:'F1-02',isSelected:false},
    {id:3,name:'F1-03',isSelected:false},
    {id:4,name:'F1-04',isSelected:false},
    {id:5,name:'F1-05',isSelected:false},
    {id:6,name:'F1-06',isSelected:false},
    {id:7,name:'F1-07',isSelected:false},
    {id:8,name:'F1-08',isSelected:false},
    {id:9,name:'F1-09',isSelected:false},
    {id:10,name:'F1-10',isSelected:false},
    {id:11,name:'F1-11',isSelected:false},
    {id:12,name:'F1-12',isSelected:false},
    {id:13,name:'F1-13',isSelected:false},
    {id:14,name:'F1-14',isSelected:false},
    {id:15,name:'F1-15',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
    {id:16,name:'F1-16',isSelected:false},
  ]
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddequipmentPage');
  }
  finish(){
    
    var data = [];
    _.remove(this.f1,{isSelected:false});
    _.forEach(this.f1,(f)=>{
      data.push(f.name);
    })
    var str = _.join(data,',');
    this.viewCtrl.dismiss(str);
  }

}
