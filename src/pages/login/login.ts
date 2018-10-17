import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, App } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '../../http-api';
import { Storage } from '@ionic/storage';
import { handleError, Loading } from '../../app-functions';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  adminUser: any;
  constructor(public http: Http, public navCtrl: NavController, public toastCtrl: ToastController, private app: App, public storage: Storage, public loading: Loading) {
    this.adminUser = new FormGroup({ user: new FormControl("", Validators.required), pass: new FormControl("", Validators.required) });
  }

  ionViewWillLoad() {
    this.storage.get('loggedIn').then
      (
      (val) => {
        if (val == true) {
          this.navCtrl.setRoot('TabsPage');
        }
      }
      );
    this.loading.doneLoading();
  }

  public loginAdmin(value: any) {
    var jsonArr = {
      "username": "",
      "password": ""
    };
    jsonArr.username = value.user;
    jsonArr.password = value.pass;

    this.loading.showLoadingScreen();
    this.http.post("/superadmin/login", jsonArr).subscribe
      (
      (data) => {
        var jsonResp = JSON.parse(data.text());
        if (jsonResp.success) {
          this.presentToast("Logged in!")
          this.storage.set('loggedIn', true).then(() => {
            this.app.getActiveNav().setRoot("TabsPage");
          });
        }
        else {
          this.presentToast("Error logging in! Please try again!");
        }
      },
      (error) => {
        handleError(this.storage, this.navCtrl, error, this.toastCtrl);
      }
      );
      this.loading.doneLoading();
  }

  presentToast(text) {
    let toast = this.toastCtrl.create(
      {
        message: text,
        duration: 1500,
        position: 'bottom',
        dismissOnPageChange: false
      }
    );
    toast.present();
  }
}
