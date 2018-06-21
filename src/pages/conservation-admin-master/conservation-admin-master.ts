import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Http } from '../../http-api';

@Component({
  selector: 'page-conservation-admin-master',
  templateUrl: 'conservation-admin-master.html'
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
        console.log(data.text());
        this.admins = jsonResp.admins;
      }
    );
  }

  openModal(){
    const myModal = this.modCtrl.create('ConservationAdminCreatePage');
    myModal.present();
  }

}
