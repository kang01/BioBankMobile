import { EquipmentInfoPage } from './../equipment-info/equipment-info';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Searchbar, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as _ from 'lodash';
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchText;
  searchSelectedText;
  searchContent = [];
  @ViewChild('searchbar') searchbar:Searchbar;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public modalCtrl: ModalController,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    setTimeout(() => {
      this.searchbar.setFocus();
    },1000);
    
    this.querySearchHistroy();
  }
  getItems(e){
    console.log(e);
   
  }
  contentChangeEvent(e){
    if(e.key == 'Enter'){
      this.search();
    }
  }
  querySearchHistroy(){
    this.storage.get("searchHistory").then((val)=>{
      this.searchContent = val || [];
      this.restrictSize();
    })
  }
  restrictSize(){
    if(this.searchContent.length > 5){
      this.searchContent.splice(5);
    }
  }
  searchClear(){
    this.storage.clear();
    this.searchContent = [];
    this.searchSelectedText = '';
  }
  search(){
    var index = _.indexOf(this.searchContent,this.searchText);
    if(index == -1){
      this.searchContent.unshift(this.searchText);
    }
    this.restrictSize();
    this.storage.set("searchHistory",this.searchContent);
    this.searchSelectedText =_.toUpper(this.searchText);
  }
  selectedSearchText(item){
    this.searchText = item;
    this.search()
  }
  queryEquipment(){
    this.navCtrl.push(EquipmentInfoPage,{equipmentCode:this.searchSelectedText,source:'search'})
    // this.openEquipmentInfoModal();
  }
  openEquipmentInfoModal() {
    let profileModal = this.modalCtrl.create(EquipmentInfoPage, {
        equipmentCode: this.searchSelectedText
    });
    profileModal.present();
  }

}
