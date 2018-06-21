import { Component, NgZone, Renderer } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams, ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http as AngularHttp } from '@angular/http';
import { FormGroup, FormControl} from '@angular/forms';
import { Http } from '../../http-api';

/**
 * Generated class for the ConservationAreaCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@IonicPage()
@Component({
  selector: 'page-conservation-area-create',
  templateUrl: 'conservation-area-create.html',
})
export class ConservationAreaCreatePage {

  map: any;
  GoogleAutocomplete: any;
  autocomplete: any;
  autocompleteItems: any;
  geocoder: any;
  markers: any;
  GooglePlaces: any;
  loading: any;
  conservationArea: any;
  border: any;
  undef: any;
  drawingManager: any;
  selectedShape: any;
  location: any;

  constructor(public renderer: Renderer, public http: Http, public angularHttp: AngularHttp, public view: ViewController, public navParams: NavParams, public geolocation: Geolocation, public zone: NgZone, public loadingCtrl: LoadingController) {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];

    this.markers = [];

    this.border = [];

    this.geocoder = new google.maps.Geocoder;
    let elem = document.createElement("div")
    this.GooglePlaces = new google.maps.places.PlacesService(elem);
    this.loading = this.loadingCtrl.create();

    this.conservationArea = new FormGroup({province: new FormControl(), city: new FormControl(), admin: new FormControl()});

    this.undef = false;
    this.drawingManager = null;
    this.selectedShape = null
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConservationAreaCreatePage');
    this.initMap();
  }

  closeModal(){
    this.view.dismiss();
  }

  clearSelection() {
    if (this.selectedShape) {
      this.selectedShape.setEditable(false);
      this.selectedShape = null;
    }
  }

  setSelection(shape) {
    this.clearSelection();
    this.selectedShape = shape;
    shape.setEditable(true);
    //selectColor(shape.get('fillColor') || shape.get('strokeColor'));
  }

  deleteSelectedShape() {
    if (this.selectedShape) {
      this.selectedShape.setMap(null);
      this.drawingManager.setOptions({
        drawingControl: true
      });
    }
    else {
      //document.getElementById('results').innerHTML = 'select a drawn shape';
    }
  }

  initMap(){


    if(this.undef)
    {
      this.map.setCenter(this.location);

      var polyOptions = {
            strokeWeight: 1.5,
            fillOpacity: 0.2,
            editable: true
          };

          this.drawingManager = new google.maps.drawing.DrawingManager({
            drawingControl: true,
            drawingControlOptions: {
              position: google.maps.ControlPosition.TOP_CENTER,
              drawingModes: ['polygon']
  			    },
            markerOptions: {
              draggable: true
            },
            polylineOptions: {
              editable: true
            },
            polygonOptions: polyOptions,
            map: this.map
          });



          google.maps.event.addListener(this.drawingManager, 'overlaycomplete', e => {
              if (e.type != google.maps.drawing.OverlayType.MARKER) {
              this.drawingManager.setDrawingMode(null);
              this.drawingManager.setOptions({
                drawingControl: false
              });

              var newShape = e.overlay;
              newShape.type = e.type;
              google.maps.event.addListener(newShape, 'click', function() {
                this.setSelection(newShape);
              });
              this.setSelection(newShape);
            }
          });

  		google.maps.event.addListener(this.drawingManager, 'drawingmode_changed', this.clearSelection);
          google.maps.event.addListener(this.map, 'click', this.clearSelection);
          //google.maps.event.addDomListener(document.getElementById('delete-button'), 'click', this.deleteSelectedShape);
  		//google.maps.event.addDomListener(document.getElementById('confirm-selection'), 'click', this.confirm);

          this.drawingManager.setMap(this.map);
    }
    else{
      this.map = new google.maps.Map(document.getElementById('map'), {
  		    center: { lat: 0.0, lng: 0.0 },
  		      zoom: 12
      });
      this.tryGeolocation();
    }
  }

  updateSearchResults(){
  if (this.autocomplete.input == '') {
    this.autocompleteItems = [];
    return;
  }
  this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
	(predictions, status) => {
    this.autocompleteItems = [];
      this.zone.run(() => {
        predictions.forEach((prediction) => {
          this.autocompleteItems.push(prediction);
        });
      });
    });
  }

  selectSearchResult(item, event){
    this.clearMarkers();
    this.autocompleteItems = [];

    this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
      if(status === 'OK' && results[0]){

        this.autocomplete.input = item.description;
        let marker = new google.maps.Marker({
          position: results[0].geometry.location,
          map: this.map,
        });
        this.markers.push(marker);
        this.map.setCenter(results[0].geometry.location);
        this.location = results[0].geometry.location;
        this.renderer.invokeElementMethod(event.target, 'blur');
      }
    });
  }

  clearMarkers(){
    for (var i = 0; i < this.markers.length; i++) {
      console.log(this.markers[i])
      this.markers[i].setMap(null);
    }
    this.markers = [];
  }

  tryGeolocation(){
    this.clearMarkers();
    this.geolocation.getCurrentPosition().then((resp) => {
      let pos = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };
      let marker = new google.maps.Marker({
        position: pos,
        map: this.map,
        title: 'I am here!'
      });
      this.markers.push(marker);
      this.map.setCenter(pos);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }



  getBorder(){
    this.clearMarkers();
    let url = "https://nominatim.openstreetmap.org/search/"+ this.autocomplete.input.substr(0,this.autocomplete.input.indexOf(',')) +"?format=jsonv2&polygon_geojson=1";
    console.log(url);
    this.angularHttp.get(url).subscribe(response => {
      var json = JSON.parse((<any>response)._body);
      console.log("Ouput: "+json[0]);
      let pos = { lat: parseFloat(json[0].lat), lng: parseFloat(json[0].lon) };
      this.map.setCenter(pos);

      if(typeof json[0].geojson.coordinates[0].length == "undefined")
      {
        this.undef = true;
        this.initMap();
      }
      else{
          console.log("Displaying coords: "+json[0].geojson.coordinates[0].length);
          if(json[0].geojson.coordinates[0].length!=1){
            var coords=new Array();
            var singleCoord = { lat: 0.0, lng: 0.0};
            //var singleCoord=new Array();
            var x;
            for (x in json[0].geojson.coordinates[0]) {
              singleCoord.lat = json[0].geojson.coordinates[0][x][1];
              singleCoord.lng = json[0].geojson.coordinates[0][x][0];
              coords.push(singleCoord);
              singleCoord = null;
              singleCoord = { lat: 0.0, lng: 0.0}
            }
        }
        else{
          coords=new Array();
          singleCoord = { lat: 0.0, lng: 0.0};
          for (x in json[0].geojson.coordinates[0][0]) {
            singleCoord.lat = json[0].geojson.coordinates[0][0][x][1];
            singleCoord.lng = json[0].geojson.coordinates[0][0][x][0];
            coords.push(singleCoord);
            singleCoord = null;
            singleCoord = { lat: 0.0, lng: 0.0}
          }
        }
          this.border = coords;

          console.log(coords);

          var polygon = new google.maps.Polygon({
              paths: coords,
              strokeColor: '#00FFFF',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#0000FF',
              fillOpacity: 0.35,
              editable: true
            });
          polygon.setMap(this.map);

      }
    });
  }

  getConservationAreas(){
    this.http.get("/area/list").subscribe
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

  addConservationArea(value: any){
    var jsonArr = {
      "border":[],
      "name":"",
      "province":"",
      "city":"",
      "admin":"" 
    };
    if(this.undef)
    {
      var final = [];
      var singleCoord = { lat: 0.0, lng: 0.0};
      var vertices = this.selectedShape.getPath();
      for (var i =0; i < vertices.getLength(); i++) {
          var xy = vertices.getAt(i);
          singleCoord.lat = xy.lat();
          singleCoord.lng = xy.lng();
          final.push(singleCoord);
          singleCoord = null;
          singleCoord = { lat: 0.0, lng: 0.0}
      }
      alert(final);
      jsonArr.border = final;
    }
    else
    {
      jsonArr.border = this.border;
    }
    jsonArr.name = this.autocomplete.input.substr(0,this.autocomplete.input.indexOf(','));
    jsonArr.province = value.province;
    jsonArr.city = value.city;
    jsonArr.admin = value.admin;

    //console.log(jsonArr);

    this.http.post("/area/add", jsonArr).subscribe
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
