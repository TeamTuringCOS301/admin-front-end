import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';
import { Http } from '../../http-api';
import { CONFIG } from '../../app-config';
import { BackbuttonService } from '../../services/backbutton.service';
import { EN_TAB_PAGES } from "../../app-config";

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

  verifiedRewards: any;
  newRewards: any;
  allNewRewards: any;
  allVeriRewards: any;
  reward: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alertCtrl: AlertController, private backbuttonService: BackbuttonService, private app: App) {
    this.allNewRewards = [];
    this.allVeriRewards = [];
    this.reward = {};

    this.http.get("/reward/list").subscribe
      (
      (data) => //Success
      {
        var jsonResp = JSON.parse(data.text());
        this.verifiedRewards = jsonResp.rewards;
        this.verifiedRewards.forEach(element => {
          element.url = CONFIG.url + "/reward/image/" + element.id;
        });

        this.allVeriRewards = jsonResp.rewards;
        this.allVeriRewards.forEach(element => {
          element.url = CONFIG.url + "/reward/image/" + element.id;
        });
      },
      (error) => {
        alert(error);
      }
      );

    this.http.get("/reward/list/new").subscribe
      (
      (data) => //Success
      {
        var jsonResp = JSON.parse(data.text());
        this.newRewards = jsonResp.rewards;
        this.newRewards.forEach(element => {
          element.url = CONFIG.url + "/reward/image/" + element.id;
        });

        this.allNewRewards = jsonResp.rewards;
        this.allNewRewards.forEach(element => {
          element.url = CONFIG.url + "/reward/image/" + element.id;
        });
      },
      (error) => {
        alert(error);
      }
      );
  }

  ionViewWillEnter() {
    this.backbuttonService.pushPage(EN_TAB_PAGES.EN_TP_STORE, this.navCtrl);
  }

  navPop() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreMasterPage');
  }

  updateRewards() {
    this.http.get("/reward/list").subscribe
      (
      (data) => //Success
      {
        var jsonResp = JSON.parse(data.text());
        this.verifiedRewards = jsonResp.rewards;
        this.verifiedRewards.forEach(element => {
          element.url = CONFIG.url + "/reward/image/" + element.id;
        });

        this.allVeriRewards = jsonResp.rewards;
        this.allVeriRewards.forEach(element => {
          element.url = CONFIG.url + "/reward/image/" + element.id;
        });
      },
      (error) => {
        alert(error);
      }
      );

    this.http.get("/reward/list/new").subscribe
      (
      (data) => //Success
      {
        var jsonResp = JSON.parse(data.text());
        this.newRewards = jsonResp.rewards;
        this.newRewards.forEach(element => {
          element.url = CONFIG.url + "/reward/image/" + element.id;
        });

        this.allNewRewards = jsonResp.rewards;
        this.allNewRewards.forEach(element => {
          element.url = CONFIG.url + "/reward/image/" + element.id;
        });
      },
      (error) => {
        alert(error);
      }
      );
  }

  showPrompt(id: any) {
    const prompt = this.alertCtrl.create({
      title: 'Verify',
      message: "Enter a coin value for this reward to verify it.",
      inputs: [
        {
          name: 'value',
          placeholder: '',
          type: 'number'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
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

  verifyReward(id: any, value: any) {
    var jsonArr = {
      "coinValue": 0,
      "verify": true
    };

    jsonArr.coinValue = parseInt(value);

    this.http.post("/reward/verify/" + id, jsonArr).subscribe
      (
      (data) => //Success
      {
        this.updateRewards();
      },
      (error) => {
        //alert(error);
      }
      );
  }

  unverifyReward(id: any) {
    var jsonArr = {
      "coinValue": 1,
      "verify": false
    };

    this.http.post("/reward/verify/" + id, jsonArr).subscribe
      (
      (data) => //Success
      {
        this.updateRewards();
      },
      (error) => {
        //alert(error);
      }
      );
  }

  onSearchInput(data) {
    this.newRewards = [];
    var searched = data.target.value;
    if (searched && searched.trim() != '') {
      this.reward = this.allNewRewards.filter((item) => {
        var lowName = item.areaName.toLowerCase();
        var lowSearch = searched.toLowerCase();
        if (lowName.indexOf(lowSearch) >= 0) {
          this.newRewards.push(item);
        }
      })
    }
    else {
      this.newRewards = this.allNewRewards;
    }

    this.verifiedRewards = [];
    var searched = data.target.value;
    if (searched && searched.trim() != '') {
      this.reward = this.allVeriRewards.filter((item) => {
        var lowName = item.areaName.toLowerCase();
        var lowSearch = searched.toLowerCase();
        if (lowName.indexOf(lowSearch) >= 0) {
          this.verifiedRewards.push(item);
        }
      })
    }
    else {
      this.verifiedRewards = this.allVeriRewards;
    }
  }

  onSearchCancel(data) {
    this.newRewards = this.allNewRewards;
    this.verifiedRewards = this.allVeriRewards;
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
