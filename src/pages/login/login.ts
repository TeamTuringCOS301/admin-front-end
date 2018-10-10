import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl} from '@angular/forms';
import { Http } from '../../http-api';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  adminUser: any;
  constructor(public http: Http,  public navCtrl: NavController, public toastCtrl: ToastController) {
    this.adminUser = new FormGroup({user: new FormControl(), pass: new FormControl()});
  }

  public loginAdmin(value: any)
  {
    var jsonArr = {
      "username":"",
      "password":""
    };
    jsonArr.username = value.user;
    jsonArr.password = value.pass;

    this.http.post("/superadmin/login", jsonArr).subscribe
    (
      (data) =>
      {
        var jsonResp = JSON.parse(data.text());
        if(jsonResp.success)
        {
          this.presentToast("Logged in!")
          this.navCtrl.push("TabsPage");
        }
      },
      (error) =>
      {
        alert("Error: " + error);
      }
    );

  }

  presentToast(text){
    let toast = this.toastCtrl.create(
      {
        message: text,
        duration: 1500,
        position: 'bottom',
        dismissOnPageChange: false
      }
    );
    toast.present();
  }

}
