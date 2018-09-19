import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';

/**
 * Generated class for the ConservationAreaEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-conservation-area-edit',
  templateUrl: 'conservation-area-edit.html',
})
export class ConservationAreaEditPage {
  requestArea: FormGroup;
  area: any;
  border: any;
  map: any;
  polygon: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
    this.requestArea = new FormGroup({
      areaName: new FormControl(),
      province: new FormControl(),
      city: new FormControl()
    });

    this.area = this.navParams.get('area');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConservationAreaEditPage');
    this.initMap();
  }
  initMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: this.area.middle.lat, lng: this.area.middle.lng },
      zoom: 12,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: true

    });

    console.log(this.area.border)
    this.polygon = new google.maps.Polygon({
      paths: this.area.border,
      strokeColor: '#0000FF',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#0000FF',
      fillOpacity: 0.35,
      editable: true
    });
    this.polygon.setMap(this.map);
  }

  closeModal() {
    this.view.dismiss();
  }

  editConservationArea(value: any) {
    var coords = new Array();
    let singleCoord = { lat: 0.0, lng: 0.0 };
    for (var x in this.polygon.getPath().b) {
      singleCoord.lat = parseFloat(this.polygon.getPath().b[x].lat());
      singleCoord.lng = parseFloat(this.polygon.getPath().b[x].lng());
      coords.push(singleCoord);
      singleCoord = null;
      singleCoord = { lat: 0.0, lng: 0.0 }
    }

    var jsonArr = {
      "border": [],
      "name": "",
      "province": "",
      "city": "",
    };

    jsonArr.border = coords;
    jsonArr.name = value.areaName;
    jsonArr.province = value.province;
    jsonArr.city = value.city;

    this.view.dismiss(jsonArr); 
  }

}
