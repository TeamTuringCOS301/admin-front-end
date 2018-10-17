import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App, ToastController } from 'ionic-angular';
import { Http } from '../../http-api';
import { CONFIG } from '../../app-config';
import { Storage } from '@ionic/storage';
import { handleError, Loading, presentToast } from '../../app-functions';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alertCtrl: AlertController, private app: App, public storage: Storage, public toastCtrl: ToastController, public loading: Loading) {
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
        if (handleError(this.storage, this.navCtrl, error, this.toastCtrl) == "") {
          console.log("No internet connection, retrying...");
        }
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
        if (handleError(this.storage, this.navCtrl, error, this.toastCtrl) == "") {
          console.log("No internet connection, retrying...");
        }
      }
      );
  }

  navPop() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreMasterPage');
  }

  ionViewDidEnter() {
    this.updateRewards();
  }

  updateRewards() {
    this.loading.showLoadingScreen();
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
        if (handleError(this.storage, this.navCtrl, error, this.toastCtrl) == "") {
          console.log("No internet connection, retrying...");
        }
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
        if (handleError(this.storage, this.navCtrl, error, this.toastCtrl) == "") {
          console.log("No internet connection, retrying...");
        }
      }
      );
      this.loading.doneLoading(); 
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

    this.loading.showLoadingScreen();
    this.http.post("/reward/verify/" + id, jsonArr).subscribe
      (
      (data) => //Success
      {
        this.updateRewards();
        presentToast(this.toastCtrl, "Reward verified");
      },
      (error) => {
        if (handleError(this.storage, this.navCtrl, error, this.toastCtrl) == "") {
          console.log("No internet connection, retrying...");
        }
      }
      );
      this.loading.doneLoading();
  }

  unverifyReward(id: any) {
    var jsonArr = {
      "coinValue": 1,
      "verify": false
    };
    this.loading.showLoadingScreen();
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
      this.loading.doneLoading();
  }

  onSearchInput(data) {
    this.newRewards = [];
    var searched1 = data.target.value;
    if (searched1 && searched1.trim() != '') {
      this.reward = this.allNewRewards.filter((item) => {
        var lowAreaName = item.areaName.toLowerCase();
        var lowName = item.name.toLowerCase();
        var lowSearch = searched1.toLowerCase();
        if (lowName.indexOf(lowSearch) >= 0 || lowAreaName.indexOf(lowSearch) >= 0) {
          this.newRewards.push(item);
        }
      })
    }
    else {
      this.newRewards = this.allNewRewards;
    }

    this.verifiedRewards = [];
    var searched2 = data.target.value;
    if (searched2 && searched2.trim() != '') {
      this.reward = this.allVeriRewards.filter((item) => {
        var lowAreaName = item.areaName.toLowerCase();
        var lowName = item.name.toLowerCase();
        var lowSearch = searched2.toLowerCase();
        if (lowName.indexOf(lowSearch) >= 0 || lowAreaName.indexOf(lowSearch) >= 0) {
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
    this.loading.showLoadingScreen();
    this.http.get("/superadmin/logout").subscribe
      (
      (data) => //Success
      {
        this.app.getRootNav().setRoot("LoginPage");
        this.storage.set('loggedIn', false).then(() => {
          this.navCtrl.setRoot('LoginPage');
        });
      }
      );
      this.loading.doneLoading();
  }
}
