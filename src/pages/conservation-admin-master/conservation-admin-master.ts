import { Component } from '@angular/core';
import { IonicPage, ModalController, AlertController, NavController } from 'ionic-angular';
import { Http } from '../../http-api';
import {App} from 'ionic-angular';

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
  constructor(public modCtrl: ModalController, public http: Http, public alertCtrl: AlertController, public navCtrl: NavController, private app: App) {
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

  openModal() {
    const myModal = this.modCtrl.create('ConservationAdminCreatePage');
    myModal.onDidDismiss(() => {
      setTimeout(() => {
        this.updateConservationAdmin()
      }, 1000);
    })
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
            this.http.get("/admin/remove/" + admin.id).subscribe
              (
              (data) => //Success
              {
                this.updateConservationAdmin();
              }
              );
          }
        }
      ]
    });
    confirm.present();
  }

  logout() {
    this.http.get("/superadmin/logout").subscribe
      (
      (data) => //Success
      {
        /*let elements = document.querySelectorAll(".tabbar");

        if (elements != null) {
          Object.keys(elements).map((key) => {
            elements[key].style.display = 'none';
          });
        }*/
        this.app.getRootNav().setRoot("LoginPage");
      }
      );
  }

}
