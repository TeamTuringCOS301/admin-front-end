import { Component } from '@angular/core';
import { IonicPage, ModalController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';

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

  area:any;
  areas:any;

  constructor(public modCtrl: ModalController, public navParams: NavParams, public http: Http) {
    this.areas = [];
    this.area = {};
    var jsonArr: any = {};
    jsonArr.location = "";
    var param = JSON.stringify(jsonArr);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers, withCredentials: true});
    var addr = "http://localhost:8080/area/list";
    this.http.get(addr).subscribe
    (
      (data) => //Success
      {
        var jsonResp = JSON.parse(data.text());
        //alert(data.text());
        this.areas = jsonResp.areas;
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConservationAreaMasterPage');
  }

  openModal(){
    const myModal = this.modCtrl.create('ConservationAreaCreatePage');
    myModal.present();
  }

}
