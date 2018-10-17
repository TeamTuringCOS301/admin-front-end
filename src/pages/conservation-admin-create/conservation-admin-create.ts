import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, NavController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '../../http-api';
import { Storage } from '@ionic/storage';
import { handleError, Loading, presentToast } from '../../app-functions';

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
  area: any;
  areas: any;
  conservationAdmin: any;
  constructor(public navParams: NavParams, public http: Http, public view: ViewController, public navCtrl: NavController, public toastCtrl: ToastController, public storage: Storage, public loading: Loading) {
    this.conservationAdmin = new FormGroup({username: new FormControl("", Validators.required), email: new FormControl("", Validators.required), fname: new FormControl("", Validators.required), sname: new FormControl("", Validators.required), carea: new FormControl("", Validators.required)});
    this.areas = [];
    this.area = {};
    this.http.get("/area/list").subscribe
    (
      (data) => //Success
      {
        var jsonResp = JSON.parse(data.text());
        this.areas = jsonResp.areas;
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConservationAdminCreatePage');
  }
  closeModal(){
    this.view.dismiss();
  }

  addConservationAdmin(value : any){
    var jsonArr = {
      "username":"",
      "email":"",
      "name":"",
      "surname":"",
      "area":0
    };

    jsonArr.username = value.username;
    jsonArr.email = value.email;
    jsonArr.name = value.fname;
    jsonArr.surname = value.sname;
    jsonArr.area = parseInt(value.carea);
    this.loading.showLoadingScreen();
    this.http.post("/admin/add", jsonArr).subscribe
    (
      (data) => {
        presentToast(this.toastCtrl, "Conservation admin added");
      },
      (error) => {
        if (handleError(this.storage, this.navCtrl, error, this.toastCtrl) == "") {
          console.log("No internet connection, retrying...");
        }
      }
    );
    this.loading.doneLoading();

    this.closeModal();
  }

}
