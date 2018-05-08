import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConservationAreaCreatePage } from './conservation-area-create';

@NgModule({
  declarations: [
    ConservationAreaCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ConservationAreaCreatePage),
  ],
})
export class ConservationAreaCreatePageModule {}
