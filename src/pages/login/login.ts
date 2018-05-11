import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions} from '@angular/http';
import { FormGroup, FormControl} from '@angular/forms';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  adminUser: any;
  constructor(public http: Http,  public navCtrl: NavController) {
    this.adminUser = new FormGroup({user: new FormControl(), pass: new FormControl()});
  }

  public loginAdmin(value: any)
  {
    let addr: any = "http://192.168.43.19:8080/admin/login";
    var jsonArr = {};
    jsonArr.username = value.user;
    jsonArr.password = value.pass;
    var param = jsonArr;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});

    this.http.post(addr, param, options).subscribe
    (
      (data) =>
      {
        this.navCtrl.push(TabsPage);
      },
      (error) =>
      {
        alert("Error: " + error);
      }
    );

  }

}
