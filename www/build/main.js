webpackJsonp([4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreMasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StoreMasterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StoreMasterPage = /** @class */ (function () {
    function StoreMasterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StoreMasterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StoreMasterPage');
    };
    StoreMasterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-store-master',template:/*ion-inline-start:"/Users/tristan/devops/admin-front-end/src/pages/store-master/store-master.html"*/'<!--\n  Generated template for the StoreMasterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Store</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/tristan/devops/admin-front-end/src/pages/store-master/store-master.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], StoreMasterPage);
    return StoreMasterPage;
}());

//# sourceMappingURL=store-master.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConservationAreaMasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ConservationAreaMasterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConservationAreaMasterPage = /** @class */ (function () {
    function ConservationAreaMasterPage(modCtrl, navParams, http) {
        var _this = this;
        this.modCtrl = modCtrl;
        this.navParams = navParams;
        this.http = http;
        this.areas = [];
        this.area = {};
        var jsonArr = {};
        jsonArr.location = "";
        var param = JSON.stringify(jsonArr);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        var addr = "http://localhost:8080/area/list";
        this.http.get(addr).subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            //alert(data.text());
            _this.areas = jsonResp.areas;
        });
    }
    ConservationAreaMasterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConservationAreaMasterPage');
    };
    ConservationAreaMasterPage.prototype.openModal = function () {
        var myModal = this.modCtrl.create('ConservationAreaCreatePage');
        myModal.present();
    };
    ConservationAreaMasterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-conservation-area-master',template:/*ion-inline-start:"/Users/tristan/devops/admin-front-end/src/pages/conservation-area-master/conservation-area-master.html"*/'<!--\n  Generated template for the ConservationAreaMasterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Conservation Areas</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)=\'openModal()\'>\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-1></ion-col>\n        <ion-col col-10>\n          <ion-card *ngFor="let area of areas" color="primary">\n            <ion-card-header>\n              {{area.name}}\n            </ion-card-header>\n            <ion-card-content>\n              <p>Province: {{area.province}}, City: {{area.city}}</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col col-1></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/tristan/devops/admin-front-end/src/pages/conservation-area-master/conservation-area-master.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ConservationAreaMasterPage);
    return ConservationAreaMasterPage;
}());

//# sourceMappingURL=conservation-area-master.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/conservation-admin-create/conservation-admin-create.module": [
		275,
		1
	],
	"../pages/conservation-area-create/conservation-area-create.module": [
		276,
		0
	],
	"../pages/conservation-area-master/conservation-area-master.module": [
		278,
		3
	],
	"../pages/store-master/store-master.module": [
		277,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(http, navCtrl, toastCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.adminUser = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({ user: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](), pass: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]() });
    }
    LoginPage.prototype.loginAdmin = function (value) {
        var _this = this;
        var addr = "http://localhost:8080/admin/login";
        var jsonArr = {
            "username": "",
            "password": ""
        };
        jsonArr.username = value.user;
        jsonArr.password = value.pass;
        var param = jsonArr;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers /*, withCredentials: true*/ });
        this.http.post(addr, param, options).subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            if (jsonResp.success) {
                _this.presentToast("Logged in!");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }
        }, function (error) {
            alert("Error: " + error);
        });
    };
    LoginPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 1500,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/tristan/devops/admin-front-end/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3></ion-col>\n      <ion-col col-6>\n        <h2 text-center>Welcome to ERP Coin Portal!</h2>\n      </ion-col>\n      <ion-col col-3></ion-col>\n    </ion-row>\n  </ion-grid>\n  <img src="assets/imgs/erp_logo.png">\n\n\n  <form (submit)="loginAdmin(adminUser.value)" [formGroup]="adminUser">\n    <ion-list>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-3></ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label floating>Username</ion-label>\n              <ion-input formControlName="user" type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-3></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-3></ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label floating>Password</ion-label>\n              <ion-input formControlName="pass" type="password"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-3></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-3></ion-col>\n          <ion-col col-6>\n            <button ion-button round outline color="primary" block type="submit">Login</button>\n          </ion-col>\n          <ion-col col-3></ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-list>\n  </form>\n\n\n<div padding>\n\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tristan/devops/admin-front-end/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_master_store_master__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conservation_area_master_conservation_area_master__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conservation_admin_master_conservation_admin_master__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__conservation_area_master_conservation_area_master__["a" /* ConservationAreaMasterPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__conservation_admin_master_conservation_admin_master__["a" /* ConservationAdminMasterPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__store_master_store_master__["a" /* StoreMasterPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/tristan/devops/admin-front-end/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Areas" tabIcon="pin"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Admins" tabIcon="person"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Store" tabIcon="cart"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/tristan/devops/admin-front-end/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConservationAdminMasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConservationAdminMasterPage = /** @class */ (function () {
    function ConservationAdminMasterPage(modCtrl, http) {
        var _this = this;
        this.modCtrl = modCtrl;
        this.http = http;
        this.admins = [];
        this.admin = {};
        var jsonArr = {};
        jsonArr.location = "";
        //var param = JSON.stringify(jsonArr);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ withCredentials: true });
        var addr = "http://localhost:8080/admin/list";
        this.http.get(addr, options).subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            console.log(data.text());
            _this.admins = jsonResp.admins;
        });
    }
    ConservationAdminMasterPage.prototype.openModal = function () {
        var myModal = this.modCtrl.create('ConservationAdminCreatePage');
        myModal.present();
    };
    ConservationAdminMasterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-conservation-admin-master',template:/*ion-inline-start:"/Users/tristan/devops/admin-front-end/src/pages/conservation-admin-master/conservation-admin-master.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Conservation Admins</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)=\'openModal()\'>\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-1></ion-col>\n        <ion-col col-10>\n          <ion-card *ngFor="let admin of admins" color="primary">\n            <ion-card-header>\n              {{admin.username}}\n            </ion-card-header>\n            <ion-card-content>\n              <p>{{admin.name}} {{admin.surname}}</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col col-1></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/tristan/devops/admin-front-end/src/pages/conservation-admin-master/conservation-admin-master.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ConservationAdminMasterPage);
    return ConservationAdminMasterPage;
}());

//# sourceMappingURL=conservation-admin-master.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_conservation_area_master_conservation_area_master__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_conservation_admin_master_conservation_admin_master__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_store_master_store_master__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_conservation_area_master_conservation_area_master__["a" /* ConservationAreaMasterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_conservation_admin_master_conservation_admin_master__["a" /* ConservationAdminMasterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_store_master_store_master__["a" /* StoreMasterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/conservation-admin-create/conservation-admin-create.module#ConservationAdminCreatePageModule', name: 'ConservationAdminCreatePage', segment: 'conservation-admin-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conservation-area-create/conservation-area-create.module#ConservationAreaCreatePageModule', name: 'ConservationAreaCreatePage', segment: 'conservation-area-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/store-master/store-master.module#StoreMasterPageModule', name: 'StoreMasterPage', segment: 'store-master', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conservation-area-master/conservation-area-master.module#ConservationAreaMasterPageModule', name: 'ConservationAreaMasterPage', segment: 'conservation-area-master', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_conservation_area_master_conservation_area_master__["a" /* ConservationAreaMasterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_conservation_admin_master_conservation_admin_master__["a" /* ConservationAdminMasterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_store_master_store_master__["a" /* StoreMasterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/tristan/devops/admin-front-end/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/tristan/devops/admin-front-end/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map