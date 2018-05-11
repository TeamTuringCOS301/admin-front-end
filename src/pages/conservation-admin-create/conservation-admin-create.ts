import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl} from '@angular/forms';

/**
 * Generated class for the ConservationAdminCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conservation-admin-create',
  templateUrl: 'conservation-admin-create.html',
})
export class ConservationAdminCreatePage {

  conservationAdmin: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.conservationAdmin = new FormGroup({username: new FormControl(), email: new FormControl()});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConservationAdminCreatePage');
  }

  addConservationAdmin(value: any){

  }

}
