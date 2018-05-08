import { Component } from '@angular/core';

import { StoreMasterPage } from '../store-master/store-master';
import { ConservationAreaMasterPage } from '../conservation-area-master/conservation-area-master';
import { ConservationAdminMasterPage } from '../conservation-admin-master/conservation-admin-master'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ConservationAreaMasterPage;
  tab2Root = ConservationAdminMasterPage;
  tab3Root = StoreMasterPage;

  constructor() {

  }
}
