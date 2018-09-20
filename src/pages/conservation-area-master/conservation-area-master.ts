import { Component } from '@angular/core';
import { IonicPage, ModalController, NavParams, ToastController } from 'ionic-angular';
import { Http } from '../../http-api';

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

  constructor(public modCtrl: ModalController, public navParams: NavParams, public http: Http, public toastCtrl : ToastController) {
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
  }

  updateConservationArea() {
    this.http.get("/area/list").subscribe
      (
      (data) => //Success
      {
        var jsonResp = JSON.parse(data.text());
        this.areas = jsonResp.areas;
      }
      );
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

  presentToast(text)
    {
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
                (data) =>
                {
                    this.presentToast("Area Edited");
                    setTimeout(() => {
                      this.updateConservationArea()
                    }, 1000);
                },
                (error) =>
                {
                    //this.presentToast("Error: " + error);
                }
            );
          }
        });
        addModal.present();
      }
      );
  }
}

