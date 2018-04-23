import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public http: Http,  public navCtrl: NavController) {

  }

  public login()
  {
    //this.http.post("https://localhost:8080/admin/login").subscribe(response => {console.log(response)});
    this.navCtrl.push(TabsPage);
  }

}
