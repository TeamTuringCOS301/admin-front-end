import { Component, NgZone, Renderer} from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  map: any;
  GoogleAutocomplete: any;
  autocomplete: any;
  autocompleteItems: any;
  geocoder: any;
  markers: any;
  GooglePlaces: any;
  loading: any;

  constructor(public renderer: Renderer, public http: Http, public navCtrl: NavController, public geolocation: Geolocation, public zone: NgZone, public loadingCtrl: LoadingController) {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];

    this.markers = [];

    this.geocoder = new google.maps.Geocoder;
    let elem = document.createElement("div")
    this.GooglePlaces = new google.maps.places.PlacesService(elem);
    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad(){
    this.initMap();
  }

  initMap(){
    this.map = new google.maps.Map(document.getElementById('map'), {
		    center: { lat: 0.0, lng: 0.0 },
		      zoom: 12
    });
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
        this.renderer.invokeElementMethod(event.target, 'blur');
      }
    })
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

  getBorder(input: string){

    let url = "https://nominatim.openstreetmap.org/search/"+ this.autocomplete.input.substr(0,this.autocomplete.input.indexOf(',') + 1) +"?format=jsonv2&polygon_geojson=1";
    console.log(url);
    this.http.get(url).subscribe(response => {
      var json = JSON.parse(response._body);
      console.log(json[0]);
      let pos = { lat: parseFloat(json[0].lat), lng: parseFloat(json[0].lon) };
      this.map.setCenter(pos);


      var geojson = {
                      "type": "FeatureCollection",
                      "features": [
                        {
                          "type": "Feature",
                          "geometry" : {
                            "type": json[0].geojson.type,
                            "coordinates": json[0].geojson.coordinates
                          }
                        }
                      ]
                    };

      /*var coords = new Array();
      var x;
      for (x in json[0].geojson.coordinates) {
           var array = json[0].geojson.coordinates[x][0];
           var y;
           var array2 = new Array();
           for (y in array) {
             array2.push({
               lat: array[y][1],
               lng: array[y][0]
             });
           }
        coords.push(array2);
      }
      console.log(coords);

      var polygon = new google.maps.Polygon({
          paths: coords,
          strokeColor: '#FFC107',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FFC107',
          fillOpacity: 0.35,
          editable: true
        });
      polygon.setMap(this.map);*/
      this.map.data.addGeoJson(geojson);
    });
  }

}
