import { Component } from '@angular/core';
import { IonicPage, ModalController, NavParams, ToastController, NavController, App } from 'ionic-angular';
import { Http } from '../../http-api';
import { Storage } from '@ionic/storage';
import { checkLoggedIn, handleError, Loading } from '../../app-functions';

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

  area: any;
  areas: any;

  constructor(public modCtrl: ModalController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController, public navCtrl: NavController, private app: App, public storage: Storage, public loading: Loading) {
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
    console.log('ionViewDidLoad ConservationAreaMasterPage');
    checkLoggedIn(this.storage, this.toastCtrl, this.navCtrl);
  }

  ionViewDidEnter() {
    this.updateConservationArea();
  }

  updateConservationArea() {
    this.loading.showLoadingScreen();
    this.http.get("/area/list").subscribe
      (
      (data) => //Success
      {
        var jsonResp = JSON.parse(data.text());
        this.areas = jsonResp.areas;
      },
      (error) => {
        if (handleError(this.storage, this.navCtrl, error, this.toastCtrl) == "") {
          console.log("No internet connection, retrying...");
        }
      }
      );
    this.loading.doneLoading();
  }

  openModal() {
    const myModal = this.modCtrl.create('ConservationAreaCreatePage');
    myModal.onDidDismiss(() => {
      setTimeout(() => {
        this.updateConservationArea()
      }, 1000);
    })
    myModal.present();
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

  public editArea(area) {
    this.loading.showLoadingScreen();
    this.http.get("/area/info/" + area.id).subscribe
      (
      (data) => //Success
      {
        var jsonResp = JSON.parse(data.text());
        let addModal = this.modCtrl.create("ConservationAreaEditPage", { 'area': jsonResp });
        addModal.onDidDismiss(result => {
          if (result) {
            this.http.post("/area/update/" + area.id, result).subscribe
              (
              (data) => {
                this.presentToast("Area Edited");
                setTimeout(() => {
                  this.updateConservationArea()
                }, 1000);
              },
              (error) => {
                if (handleError(this.storage, this.navCtrl, error, this.toastCtrl) == "") {
                  console.log("No internet connection, retrying...");
                }
              }
              );
          }
        });
        addModal.present();
      },
      (error) => {
        if (handleError(this.storage, this.navCtrl, error, this.toastCtrl) == "") {
          console.log("No internet connection, retrying...");
        }
      }
      );
    this.loading.doneLoading();
  }

  logout() {
    this.loading.showLoadingScreen();
    this.http.get("/superadmin/logout").subscribe
      (
      (data) => //Success
      {
        this.app.getRootNav().setRoot("LoginPage");
        this.storage.set('loggedIn', false).then(() => {
          this.navCtrl.setRoot('LoginPage');
        });
      },
      (error) => {
        if (handleError(this.storage, this.navCtrl, error, this.toastCtrl) == "") {
          console.log("No internet connection, retrying...");
        }
      }
      );
    this.loading.doneLoading();
  }
}

