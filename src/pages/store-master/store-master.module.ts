import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreMasterPage } from './store-master';

@NgModule({
  declarations: [
    StoreMasterPage,
  ],
  imports: [
    IonicPageModule.forChild(StoreMasterPage),
  ],
})
export class StoreMasterPageModule {}
