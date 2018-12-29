import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EquipmentInfoPage } from './equipment-info';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EquipmentInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(EquipmentInfoPage),
    FormsModule
  ],
})
export class EquipmentInfoPageModule {}
