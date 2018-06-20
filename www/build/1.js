webpackJsonp([1],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConservationAdminCreatePageModule", function() { return ConservationAdminCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conservation_admin_create__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConservationAdminCreatePageModule = /** @class */ (function () {
    function ConservationAdminCreatePageModule() {
    }
    ConservationAdminCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__conservation_admin_create__["a" /* ConservationAdminCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__conservation_admin_create__["a" /* ConservationAdminCreatePage */]),
            ],
        })
    ], ConservationAdminCreatePageModule);
    return ConservationAdminCreatePageModule;
}());

//# sourceMappingURL=conservation-admin-create.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConservationAdminCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
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
 * Generated class for the ConservationAdminCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConservationAdminCreatePage = /** @class */ (function () {
    function ConservationAdminCreatePage(navParams, http, view) {
        this.navParams = navParams;
        this.http = http;
        this.view = view;
        this.conservationAdmin = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({ username: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](), email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](), fname: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](), sname: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]() });
    }
    ConservationAdminCreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConservationAdminCreatePage');
    };
    ConservationAdminCreatePage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    ConservationAdminCreatePage.prototype.addConservationAdmin = function (value) {
        var addr = "http://localhost:8080/admin/add";
        var jsonArr = {
            "username": "",
            "email": "",
            "name": "",
            "surname": ""
        };
        jsonArr.username = value.username;
        jsonArr.email = value.email;
        jsonArr.name = value.fname;
        jsonArr.surname = value.sname;
        var param = jsonArr;
        //console.log(jsonArr);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        this.http.post(addr, param, options).subscribe(function (data) {
            alert("Success: " + data.text());
        }, function (error) {
            alert("Error: " + error);
        });
    };
    ConservationAdminCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-conservation-admin-create',template:/*ion-inline-start:"/Users/tristan/devops/admin-front-end/src/pages/conservation-admin-create/conservation-admin-create.html"*/'<!--\n  Generated template for the ConservationAdminCreatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Create Conservation Admin</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()"><ion-icon name="close-circle"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (submit)="addConservationAdmin(conservationAdmin.value)" [formGroup]="conservationAdmin">\n    <ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-3></ion-col>\n        <ion-col col-6>\n\n          <ion-item>\n            <ion-label floating>Username</ion-label>\n            <ion-input formControlName="username" type="text"></ion-input>\n          </ion-item>\n\n        </ion-col>\n        <ion-col col-3></ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-3></ion-col>\n        <ion-col col-6>\n          <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input formControlName="email" type="email"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3></ion-col>\n      </ion-row>\n\n      <ion-row>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label floating>Name</ion-label>\n              <ion-input formControlName="fname" type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label floating>Surname</ion-label>\n              <ion-input formControlName="sname" type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n      </ion-row>\n      </ion-grid>\n      </ion-list>\n      <ion-grid>\n          <ion-row>\n              <button ion-button type="submit" outline round >Add</button>\n            </ion-row>\n      </ion-grid>\n      \n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/tristan/devops/admin-front-end/src/pages/conservation-admin-create/conservation-admin-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ConservationAdminCreatePage);
    return ConservationAdminCreatePage;
}());

//# sourceMappingURL=conservation-admin-create.js.map

/***/ })

});
//# sourceMappingURL=1.js.map