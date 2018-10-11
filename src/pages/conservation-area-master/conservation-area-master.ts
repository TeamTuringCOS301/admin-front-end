import { Component } from '@angular/core';
import { IonicPage, ModalController, NavParams, ToastController, NavController } from 'ionic-angular';
import { Http } from '../../http-api';
import { BackbuttonService } from '../../services/backbutton.service';
import { EN_TAB_PAGES } from "../../app-config";

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

  constructor(public modCtrl: ModalController, public navParams: NavParams, public http: Http, public toastCtrl : ToastController, private backbuttonService: BackbuttonService, public navCtrl: NavController) {
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

  ionViewWillEnter() {
    this.backbuttonService.pushPage(EN_TAB_PAGES.EN_TP_AREA, this.navCtrl);
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

