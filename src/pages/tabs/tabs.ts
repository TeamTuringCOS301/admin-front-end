import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ConservationAdminsPage } from '../conservation-admins/conservation-admins'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ConservationAdminsPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
