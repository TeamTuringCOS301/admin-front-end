import { Component } from '@angular/core';
import { IonicPage, ModalController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConservationAreaMasterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conservation-area-master',
  templateUrl: 'conservation-area-master.html',
})
export class ConservationAreaMasterPage {

  constructor(public modCtrl: ModalController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConservationAreaMasterPage');
  }

  openModal(){
    const myModal = this.modCtrl.create('ConservationAreaCreatePage');
    myModal.present();
  }

}
