import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConservationAreaMasterPage } from './conservation-area-master';

@NgModule({
  declarations: [
    ConservationAreaMasterPage,
  ],
  imports: [
    IonicPageModule.forChild(ConservationAreaMasterPage),
  ],
})
export class ConservationAreaMasterPageModule {}
