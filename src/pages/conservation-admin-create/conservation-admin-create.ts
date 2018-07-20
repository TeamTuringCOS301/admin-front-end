import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { Http } from '../../http-api';

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
  area: any;
  areas: any;
  conservationAdmin: any;
  constructor(public navParams: NavParams, public http: Http, public view: ViewController) {
    this.conservationAdmin = new FormGroup({username: new FormControl(), email: new FormControl(), fname: new FormControl(), sname: new FormControl(), carea: new FormControl()});
    this.areas = [];
    this.area = {};
    this.http.get("/area/list").subscribe
    (
      (data) => //Success
      {
        console.log(data);
        var jsonResp = JSON.parse(data.text());
        //alert(data.text());
        this.areas = jsonResp.areas;
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConservationAdminCreatePage');
  }

  closeModal(){
    this.view.dismiss();
  }

  addConservationAdmin(value : any){
    var jsonArr = {
      "username":"",
      "email":"",
      "name":"",
      "surname":"",
      "area":""
    };

    jsonArr.username = value.username;
    jsonArr.email = value.email;
    jsonArr.name = value.fname;
    jsonArr.surname = value.sname;
    jsonArr.area = value.carea;

    this.http.post("/admin/add", jsonArr).subscribe
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

    this.closeModal();
  }

}
