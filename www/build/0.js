webpackJsonp([0],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConservationAreaCreatePageModule", function() { return ConservationAreaCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conservation_area_create__ = __webpack_require__(280);
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

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConservationAreaCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
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
    function ConservationAreaCreatePage(renderer, http, view, navParams, geolocation, zone, loadingCtrl) {
        this.renderer = renderer;
        this.http = http;
        this.view = view;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.zone = zone;
        this.loadingCtrl = loadingCtrl;
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = { input: '' };
        this.autocompleteItems = [];
        this.markers = [];
        this.border = [];
        this.geocoder = new google.maps.Geocoder;
        var elem = document.createElement("div");
        this.GooglePlaces = new google.maps.places.PlacesService(elem);
        this.loading = this.loadingCtrl.create();
        this.conservationArea = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({ province: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](), city: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](), admin: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]() });
        this.undef = false;
        this.drawingManager = null;
        this.selectedShape = null;
    }
    ConservationAreaCreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConservationAreaCreatePage');
        this.initMap();
    };
    ConservationAreaCreatePage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    ConservationAreaCreatePage.prototype.clearSelection = function () {
        if (this.selectedShape) {
            this.selectedShape.setEditable(false);
            this.selectedShape = null;
        }
    };
    ConservationAreaCreatePage.prototype.setSelection = function (shape) {
        this.clearSelection();
        this.selectedShape = shape;
        shape.setEditable(true);
        //selectColor(shape.get('fillColor') || shape.get('strokeColor'));
    };
    ConservationAreaCreatePage.prototype.deleteSelectedShape = function () {
        if (this.selectedShape) {
            this.selectedShape.setMap(null);
            this.drawingManager.setOptions({
                drawingControl: true
            });
        }
        else {
            //document.getElementById('results').innerHTML = 'select a drawn shape';
        }
    };
    ConservationAreaCreatePage.prototype.initMap = function () {
        var _this = this;
        if (this.undef) {
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
            google.maps.event.addListener(this.drawingManager, 'overlaycomplete', function (e) {
                if (e.type != google.maps.drawing.OverlayType.MARKER) {
                    _this.drawingManager.setDrawingMode(null);
                    _this.drawingManager.setOptions({
                        drawingControl: false
                    });
                    var newShape = e.overlay;
                    newShape.type = e.type;
                    google.maps.event.addListener(newShape, 'click', function () {
                        this.setSelection(newShape);
                    });
                    _this.setSelection(newShape);
                }
            });
            google.maps.event.addListener(this.drawingManager, 'drawingmode_changed', this.clearSelection);
            google.maps.event.addListener(this.map, 'click', this.clearSelection);
            //google.maps.event.addDomListener(document.getElementById('delete-button'), 'click', this.deleteSelectedShape);
            //google.maps.event.addDomListener(document.getElementById('confirm-selection'), 'click', this.confirm);
            this.drawingManager.setMap(this.map);
        }
        else {
            this.map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 0.0, lng: 0.0 },
                zoom: 12
            });
            this.tryGeolocation();
        }
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
                _this.location = results[0].geometry.location;
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
        var url = "https://nominatim.openstreetmap.org/search/" + this.autocomplete.input.substr(0, this.autocomplete.input.indexOf(',')) + "?format=jsonv2&polygon_geojson=1";
        console.log(url);
        this.http.get(url).subscribe(function (response) {
            var json = JSON.parse(response._body);
            console.log("Ouput: " + json[0]);
            var pos = { lat: parseFloat(json[0].lat), lng: parseFloat(json[0].lon) };
            _this.map.setCenter(pos);
            if (typeof json[0].geojson.coordinates[0].length == "undefined") {
                _this.undef = true;
                _this.initMap();
            }
            else {
                console.log("Displaying coords: " + json[0].geojson.coordinates[0].length);
                if (json[0].geojson.coordinates[0].length != 1) {
                    var coords = new Array();
                    var singleCoord = { lat: 0.0, lng: 0.0 };
                    //var singleCoord=new Array();
                    var x;
                    for (x in json[0].geojson.coordinates[0]) {
                        singleCoord.lat = json[0].geojson.coordinates[0][x][1];
                        singleCoord.lng = json[0].geojson.coordinates[0][x][0];
                        coords.push(singleCoord);
                        singleCoord = null;
                        singleCoord = { lat: 0.0, lng: 0.0 };
                    }
                }
                else {
                    coords = new Array();
                    singleCoord = { lat: 0.0, lng: 0.0 };
                    for (x in json[0].geojson.coordinates[0][0]) {
                        singleCoord.lat = json[0].geojson.coordinates[0][0][x][1];
                        singleCoord.lng = json[0].geojson.coordinates[0][0][x][0];
                        coords.push(singleCoord);
                        singleCoord = null;
                        singleCoord = { lat: 0.0, lng: 0.0 };
                    }
                }
                _this.border = coords;
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
                polygon.setMap(_this.map);
            }
        });
    };
    ConservationAreaCreatePage.prototype.getConservationAreas = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ withCredentials: true });
        var addr = "http://localhost:8080/area/list";
        this.http.get(addr, options).subscribe(function (data) {
            alert("Success: " + data.text());
        }, function (error) {
            alert("Error: " + error);
        });
    };
    ConservationAreaCreatePage.prototype.addConservationArea = function (value) {
        var addr = "http://localhost:8080/area/add";
        var jsonArr = {
            "border": [],
            "name": "",
            "province": "",
            "city": "",
            "admin": ""
        };
        if (this.undef) {
            var final = [];
            var singleCoord = { lat: 0.0, lng: 0.0 };
            var vertices = this.selectedShape.getPath();
            for (var i = 0; i < vertices.getLength(); i++) {
                var xy = vertices.getAt(i);
                singleCoord.lat = xy.lat();
                singleCoord.lng = xy.lng();
                final.push(singleCoord);
                singleCoord = null;
                singleCoord = { lat: 0.0, lng: 0.0 };
            }
            alert(final);
            jsonArr.border = final;
        }
        else {
            jsonArr.border = this.border;
        }
        jsonArr.name = this.autocomplete.input.substr(0, this.autocomplete.input.indexOf(','));
        jsonArr.province = value.province;
        jsonArr.city = value.city;
        jsonArr.admin = value.admin;
        var param = jsonArr;
        //console.log(jsonArr);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        this.http.post(addr, param, options).subscribe(function (data) {
            alert("Success: " + data.text());
        }, function (error) {
            alert("Error: " + error);
        });
    };
    ConservationAreaCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-conservation-area-create',template:/*ion-inline-start:"/Users/tristan/devops/admin-front-end/src/pages/conservation-area-create/conservation-area-create.html"*/'<!--\n  Generated template for the ConservationAreaCreatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Create Conservation Area</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="closeModal()"><ion-icon name="close-circle"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar color="primary">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-10>\n          <ion-searchbar #pacinput id="pacinput" [(ngModel)]="autocomplete.input" (ionInput)="updateSearchResults()" placeholder="Search for a place"></ion-searchbar>\n        </ion-col>\n        <ion-col col-2>\n          <button class="getborder-btn" ion-button round outline (click)="getBorder()" color="light" [hidden]="undef == true"> Get Border </button>\n          <button class="clear-btn" ion-button round outline (click)="deleteSelectedShape()" color="light" [hidden]="undef == false"> Clear </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list [hidden]="autocompleteItems.length == 0">\n    <ion-item *ngFor="let item of autocompleteItems" tappable (click)="selectSearchResult(item, $event)">\n      {{ item.description }}\n    </ion-item>\n\n  </ion-list>\n\n  <div #map id="map"></div>\n\n</ion-content>\n\n<ion-footer>\n  <form (submit)="addConservationArea(conservationArea.value)" [formGroup]="conservationArea">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <ion-item>\n            <ion-label floating>Province/State</ion-label>\n            <ion-input formControlName="province" type="text"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6>\n          <ion-item>\n            <ion-label floating>City</ion-label>\n            <ion-input formControlName="city" type="text"></ion-input>\n          </ion-item>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col col-3></ion-col>\n        <ion-col col-6>\n          <ion-item>\n            <ion-label>Conservation Admin</ion-label>\n            <ion-select formControlName="admin" [(ngModel)]="admin">\n              <ion-option value="admin">Admin</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3></ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n    <button ion-button round outline type="submit">Add</button>\n  </form>\n  <!--<button class="geolocation-btn" ion-button round outline (click)="tryGeolocation()"> Try Geolocation </button>-->\n</ion-footer>\n'/*ion-inline-end:"/Users/tristan/devops/admin-front-end/src/pages/conservation-area-create/conservation-area-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], ConservationAreaCreatePage);
    return ConservationAreaCreatePage;
}());

//# sourceMappingURL=conservation-area-create.js.map

/***/ })

});
//# sourceMappingURL=0.js.map