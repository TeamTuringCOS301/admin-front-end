import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = "ConservationAreaMasterPage";
  tab2Root = "ConservationAdminMasterPage";
  tab3Root = "StoreMasterPage";

  constructor() {

  }
}
