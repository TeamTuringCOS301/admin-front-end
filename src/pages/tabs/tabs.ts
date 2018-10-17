import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

@IonicPage({})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = "ConservationAreaMasterPage";
  tab2Root = "ConservationAdminMasterPage";
  tab3Root = "StoreMasterPage";

  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter() {

  }
}
