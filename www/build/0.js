webpackJsonp([0],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConservationAreaCreatePageModule", function() { return ConservationAreaCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conservation_area_create__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConservationAreaCreatePageModule = /** @class */ (function () {
    function ConservationAreaCreatePageModule() {
    }
    ConservationAreaCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__conservation_area_create__["a" /* ConservationAreaCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__conservation_area_create__["a" /* ConservationAreaCreatePage */]),
            ],
        })
    ], ConservationAreaCreatePageModule);
    return ConservationAreaCreatePageModule;
}());

//# sourceMappingURL=conservation-area-create.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConservationAreaCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConservationAreaCreatePage = /** @class */ (function () {
    function ConservationAreaCreatePage(renderer, http, navCtrl, navParams, geolocation, zone, loadingCtrl) {
        this.renderer = renderer;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.zone = zone;
        this.loadingCtrl = loadingCtrl;
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = { input: '' };
        this.autocompleteItems = [];
        this.markers = [];
        this.geocoder = new google.maps.Geocoder;
        var elem = document.createElement("div");
        this.GooglePlaces = new google.maps.places.PlacesService(elem);
        this.loading = this.loadingCtrl.create();
    }
    ConservationAreaCreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConservationAreaCreatePage');
        this.initMap();
    };
    ConservationAreaCreatePage.prototype.initMap = function () {
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 0.0, lng: 0.0 },
            zoom: 12
        });
        this.tryGeolocation();
    };
    ConservationAreaCreatePage.prototype.updateSearchResults = function () {
        var _this = this;
        if (this.autocomplete.input == '') {
            this.autocompleteItems = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input }, function (predictions, status) {
            _this.autocompleteItems = [];
            _this.zone.run(function () {
                predictions.forEach(function (prediction) {
                    _this.autocompleteItems.push(prediction);
                });
            });
        });
    };
    ConservationAreaCreatePage.prototype.selectSearchResult = function (item, event) {
        var _this = this;
        this.clearMarkers();
        this.autocompleteItems = [];
        this.geocoder.geocode({ 'placeId': item.place_id }, function (results, status) {
            if (status === 'OK' && results[0]) {
                _this.autocomplete.input = item.description;
                var marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: _this.map,
                });
                _this.markers.push(marker);
                _this.map.setCenter(results[0].geometry.location);
                _this.renderer.invokeElementMethod(event.target, 'blur');
            }
        });
    };
    ConservationAreaCreatePage.prototype.clearMarkers = function () {
        for (var i = 0; i < this.markers.length; i++) {
            console.log(this.markers[i]);
            this.markers[i].setMap(null);
        }
        this.markers = [];
    };
    ConservationAreaCreatePage.prototype.tryGeolocation = function () {
        var _this = this;
        this.clearMarkers();
        this.geolocation.getCurrentPosition().then(function (resp) {
            var pos = {
                lat: resp.coords.latitude,
                lng: resp.coords.longitude
            };
            var marker = new google.maps.Marker({
                position: pos,
                map: _this.map,
                title: 'I am here!'
            });
            _this.markers.push(marker);
            _this.map.setCenter(pos);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    ConservationAreaCreatePage.prototype.getBorder = function () {
        var _this = this;
        this.clearMarkers();
        var url = "https://nominatim.openstreetmap.org/search/" + this.autocomplete.input.substr(0, this.autocomplete.input.indexOf(',') + 1) + "?format=jsonv2&polygon_geojson=1";
        console.log(url);
        this.http.get(url).subscribe(function (response) {
            var json = JSON.parse(response._body);
            console.log("Ouput: " + json[0]);
            var pos = { lat: parseFloat(json[0].lat), lng: parseFloat(json[0].lon) };
            _this.map.setCenter(pos);
            var geojson = {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": json[0].geojson.type,
                            "coordinates": json[0].geojson.coordinates
                        }
                    }
                ]
            };
            console.log(json);
            console.log("Displaying coords: " + json[0].geojson.coordinates[0].length);
            if (json[0].geojson.coordinates[0].length != 1) {
                var coords = new Array();
                var singleCoord = new Array;
                var x;
                for (x in json[0].geojson.coordinates[0]) {
                    singleCoord = {
                        lat: json[0].geojson.coordinates[0][x][1],
                        lng: json[0].geojson.coordinates[0][x][0]
                    };
                    coords.push(singleCoord);
                    singleCoord = [];
                }
            }
            else {
                var coords = new Array();
                var singleCoord = new Array;
                var x;
                for (x in json[0].geojson.coordinates[0][0]) {
                    singleCoord = {
                        lat: json[0].geojson.coordinates[0][0][x][1],
                        lng: json[0].geojson.coordinates[0][0][x][0]
                    };
                    coords.push(singleCoord);
                    singleCoord = [];
                }
            }
            console.log(coords);
            /*console.log("Trying editable now");
            var coords = new Array();
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
            console.log("The coords are "+coords[0].lat);*/
            var polygon = new google.maps.Polygon({
                paths: coords,
                strokeColor: '#00FFFF',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#0000FF',
                fillOpacity: 0.35,
                editable: true
            });
            polygon.setMap(_this.map);
            /*var points=new Array();
            for(var i=1;i<10;i++){
            points.push(new google.maps.Circle({
              strokeColor: '#FF0000',
                 strokeOpacity: 0.8,
                 strokeWeight: 2,
                 fillColor: '#FF0000',
                 fillOpacity: 0.00,
                 map: this.map,
                 center: coords[0],
                 radius: 1000*i
            }));
          }*/
            //point.setMap(this.map);
            //this.map.setCenter(coords[0]);
            //this.map.data.addGeoJson(geojson);
        });
    };
    ConservationAreaCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-conservation-area-create',template:/*ion-inline-start:"/Users/tristan/devops/admin-front-end/src/pages/conservation-area-create/conservation-area-create.html"*/'<!--\n  Generated template for the ConservationAreaCreatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Create Conservation Area</ion-title>\n  </ion-navbar>\n  <ion-toolbar color="primary">\n    <ion-searchbar #pacinput id="pacinput" [(ngModel)]="autocomplete.input" (ionInput)="updateSearchResults()" placeholder="Search for a place"></ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list [hidden]="autocompleteItems.length == 0">\n    <ion-item *ngFor="let item of autocompleteItems" tappable (click)="selectSearchResult(item, $event)">\n      {{ item.description }}\n    </ion-item>\n  </ion-list>\n\n  <div #map id="map"></div>\n</ion-content>\n\n<ion-footer>\n  <button class="geolocation-btn" ion-button full (click)="tryGeolocation()"> Try Geolocation </button>\n  <button class="getborder-btn" ion-button full (click)="getBorder()"> Get Border </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/tristan/devops/admin-front-end/src/pages/conservation-area-create/conservation-area-create.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _g || Object])
    ], ConservationAreaCreatePage);
    return ConservationAreaCreatePage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=conservation-area-create.js.map

/***/ })

});
//# sourceMappingURL=0.js.map