import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreEditPage } from './store-edit';

@NgModule({
  declarations: [
    StoreEditPage,
  ],
  imports: [
    IonicPageModule.forChild(StoreEditPage),
  ],
})
export class StoreEditPageModule {}
