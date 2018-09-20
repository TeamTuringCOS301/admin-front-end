import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConservationAreaEditPage } from './conservation-area-edit';

@NgModule({
  declarations: [
    ConservationAreaEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ConservationAreaEditPage),
  ],
})
export class ConservationAreaEditPageModule {}
