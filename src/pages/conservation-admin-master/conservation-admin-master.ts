import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-conservation-admin-master',
  templateUrl: 'conservation-admin-master.html'
})
export class ConservationAdminMasterPage {

  constructor(public modCtrl: ModalController) {

  }

  openModal(){
    const myModal = this.modCtrl.create('ConservationAdminCreatePage');
    myModal.present();
  }

}
