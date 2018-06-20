import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { CONFIG } from '../../app-config';

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
    var jsonArr: any = {};
    jsonArr.location = "";
    //var param = JSON.stringify(jsonArr);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({withCredentials: true});
    var addr = CONFIG.url + "/admin/list";
    this.http.get(addr, options).subscribe
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
