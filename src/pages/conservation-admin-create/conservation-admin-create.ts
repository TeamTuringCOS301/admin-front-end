import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Http, Headers, RequestOptions} from '@angular/http';
import { FormGroup, FormControl } from '@angular/forms';
import { CONFIG } from '../../app-config';

/**
 * Generated class for the ConservationAdminCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conservation-admin-create',
  templateUrl: 'conservation-admin-create.html',
})
export class ConservationAdminCreatePage {

  conservationAdmin: any;
  constructor(public navParams: NavParams, public http: Http, public view: ViewController) {
    this.conservationAdmin = new FormGroup({username: new FormControl(), email: new FormControl(), fname: new FormControl(), sname: new FormControl()});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConservationAdminCreatePage');
  }

  closeModal(){
    this.view.dismiss();
  }

  addConservationAdmin(value : any){
    let addr: any = CONFIG.url + "/admin/add";
    var jsonArr = {
      "username":"",
      "email":"",
      "name":"",
      "surname":""
    };

    jsonArr.username = value.username;
    jsonArr.email = value.email;
    jsonArr.name = value.fname;
    jsonArr.surname = value.sname;
    var param = jsonArr;

    //console.log(jsonArr);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers, withCredentials: true});

    this.http.post(addr, param, options).subscribe
    (
      function(data)
      {
        alert("Success: " + data.text());
      },
      function(error)
      {
        alert("Error: " + error);
      }
    );
  }

}
