import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Http } from '../../http-api';

/**
 * Generated class for the ConservationAdminMasterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conservation-admin-master',
  templateUrl: 'conservation-admin-master.html',
})
export class ConservationAdminMasterPage {

  admin:any;
  admins:any;
  constructor(public modCtrl: ModalController, public http: Http) {
    this.admins = [];
    this.admin = {};
    this.http.get("/admin/list").subscribe
    (
      (data) => //Success
      {
        var jsonResp = JSON.parse(data.text());
        this.admins = jsonResp.admins;
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConservationAdminMasterPage');
  }

  updateConservationAdmin() {
    this.http.get("/admin/list").subscribe
    (
      (data) => //Success
      {
        var jsonResp = JSON.parse(data.text());
        this.admins = jsonResp.admins;
      }
    );
  }

  openModal(){
    const myModal = this.modCtrl.create('ConservationAdminCreatePage');
    myModal.onDidDismiss(() => {
      setTimeout(() => {
        this.updateConservationAdmin()
      }, 1000);
    })
    myModal.present();
  }

}
