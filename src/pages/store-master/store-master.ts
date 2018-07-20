import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  rewards : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get("/reward/list").subscribe
    (
      (data) => //Success
      {
        var jsonResp = JSON.parse(data.text());
        console.log(jsonResp);
        this.rewards = jsonResp.rewards;
      },
      (error) =>
      {
        alert(error);
      }
    );
  }

  /*picked(id)
  {
    var reward = {};
    this.rewards.forEach((reward) =>
    {
      if(reward.id == id)
      {
        var modalPage = this.modalCtrl.create(ViewReward, {reward:reward}); modalPage.present();
      }
    });
  }*/

  navPop()
  {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreMasterPage');
  }

}
