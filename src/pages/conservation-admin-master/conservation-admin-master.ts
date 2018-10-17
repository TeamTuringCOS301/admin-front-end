import { Component } from '@angular/core';
import { IonicPage, ModalController, AlertController, NavController, ToastController } from 'ionic-angular';
import { Http } from '../../http-api';
import { App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { handleError, Loading, checkLoggedIn } from '../../app-functions';

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

  admin: any;
  admins: any;
  constructor(public modCtrl: ModalController, public http: Http, public alertCtrl: AlertController, public navCtrl: NavController, private app: App, public storage: Storage, public toastCtrl:ToastController, public loading:Loading) {
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
    checkLoggedIn(this.storage, this.toastCtrl, this.navCtrl);
  }

  ionViewDidEnter() {
    this.updateConservationAdmin();
  }

  updateConservationAdmin() {
    this.loading.showLoadingScreen();
    this.http.get("/admin/list").subscribe
      (
      (data) => //Success
      {
        var jsonResp = JSON.parse(data.text());
        this.admins = jsonResp.admins;
      }
      );
      this.loading.doneLoading();
  }

  openModal() {
    const myModal = this.modCtrl.create('ConservationAdminCreatePage');
    myModal.onDidDismiss(() => {
      setTimeout(() => {
        this.updateConservationAdmin()
      }, 1000);
    })
    //history.pushState (null, null, "/superadmin/#");
    myModal.present();
  }

  showConfirm(admin: any) {
    const confirm = this.alertCtrl.create({
      title: 'Delete admin?',
      message: 'Do you agree to delete the admin, ' + admin.name + ' ' + admin.surname + '?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.loading.showLoadingScreen();
            this.http.get("/admin/remove/" + admin.id).subscribe
              (
              (data) => //Success
              {
                this.updateConservationAdmin();
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
      ]
    });
    confirm.present();
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
