import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '../../http-api';

/**
 * Generated class for the StoreMasterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store-master',
  templateUrl: 'store-master.html',
})
export class StoreMasterPage {

  verifiedRewards : any;
  verifiedAreas: any;
  newRewards : any;
  newAreas : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alertCtrl: AlertController) {
    this.http.get("/reward/list").subscribe
    (
      (data) => //Success
      {
        var jsonResp = JSON.parse(data.text());
        console.log(jsonResp);
        this.verifiedRewards = jsonResp.rewards;
      },
      (error) =>
      {
        alert(error);
      }
    );

    this.http.get("/reward/list/new").subscribe
    (
      (data) => //Success
      {
        var jsonResp = JSON.parse(data.text());
        console.log(jsonResp);
        this.newRewards = jsonResp.rewards;
      },
      (error) =>
      {
        alert(error);
      }
    );
  }

  navPop()
  {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreMasterPage');
  }

  showPrompt(id: any) {
    const prompt = this.alertCtrl.create({
      title: 'Verify',
      message: "Enter a coin value for this reward to verify it.",
      inputs: [
        {
          name: 'value',
          placeholder: ''
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Verify',
          handler: data => {
            this.verifyReward(id, data.value);
          }
        }
      ]
    });
    prompt.present();
  }

  verifyReward(id : any, value: any) {
    var jsonArr = {
      "coinValue": 0,
    };

    jsonArr.coinValue = parseInt(value);

    this.http.post("/reward/verify/" + id, jsonArr).subscribe
    (
      (data) => //Success
      {
        var jsonResp = JSON.parse(data.text());
        alert(jsonResp);
      },
      (error) =>
      {
        alert(error);
      }
    );
  }

}
