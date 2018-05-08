import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConservationAdminCreatePage } from './conservation-admin-create';

@NgModule({
  declarations: [
    ConservationAdminCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ConservationAdminCreatePage),
  ],
})
export class ConservationAdminCreatePageModule {}
