import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Tabs } from 'ionic-angular';
import { Globals } from "../../app-config";

@IonicPage({})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild("tabs") tabs: Tabs;

  tab1Root = "ConservationAreaMasterPage";
  tab2Root = "ConservationAdminMasterPage";
  tab3Root = "StoreMasterPage";

  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    Globals.tabs = this.tabs;
  }
}
