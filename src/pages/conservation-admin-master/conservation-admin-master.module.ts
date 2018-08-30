import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConservationAdminMasterPage } from './conservation-admin-master';

@NgModule({
  declarations: [
    ConservationAdminMasterPage,
  ],
  imports: [
    IonicPageModule.forChild(ConservationAdminMasterPage),
  ],
})
export class ConservationAdminMasterPageModule {}
