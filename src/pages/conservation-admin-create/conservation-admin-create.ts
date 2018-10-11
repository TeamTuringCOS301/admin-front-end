import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, NavController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { Http } from '../../http-api';
import { BackbuttonService } from '../../services/backbutton.service';
import { EN_TAB_PAGES } from "../../app-config";

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
  constructor(public navParams: NavParams, public http: Http, public view: ViewController, private backbuttonService: BackbuttonService, public navCtrl: NavController) {
    this.conservationAdmin = new FormGroup({username: new FormControl(), email: new FormControl(), fname: new FormControl(), sname: new FormControl(), carea: new FormControl()});
    this.areas = [];
    this.area = {};
    this.http.get("/area/list").subscribe
    (
      (data) => //Success
      {
        var jsonResp = JSON.parse(data.text());
        this.areas = jsonResp.areas;
      }
    );
    this.setupBackButtonBehavior();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConservationAdminCreatePage');
  }

  setupBackButtonBehavior() {
    if (window.location.protocol !== "file:") {

      // Register browser back button action(s)
      var old = window.onpopstate;
      window.onpopstate = (evt) => {
        // Navigate back
        window.onpopstate = old;
        this.closeModal();
      }
    };
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
      "area":0
    };

    jsonArr.username = value.username;
    jsonArr.email = value.email;
    jsonArr.name = value.fname;
    jsonArr.surname = value.sname;
    jsonArr.area = parseInt(value.carea);

    this.http.post("/admin/add", jsonArr).subscribe
    (
      function(data)
      {
        //alert("Success: " + data.text());
      },
      function(error)
      {
        //alert("Error: " + error);
      }
    );

    this.closeModal();
  }

}
