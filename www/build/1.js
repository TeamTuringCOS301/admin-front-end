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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
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
    function ConservationAdminCreatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.conservationAdmin = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({ username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]() });
    }
    ConservationAdminCreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConservationAdminCreatePage');
    };
    ConservationAdminCreatePage.prototype.addConservationAdmin = function (value) {
    };
    ConservationAdminCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-conservation-admin-create',template:/*ion-inline-start:"/Users/tristan/devops/admin-front-end/src/pages/conservation-admin-create/conservation-admin-create.html"*/'<!--\n  Generated template for the ConservationAdminCreatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Create Conservation Admin</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (submit)=\'addConservationAdmin(conservationAdmin.value)\' [formGroup]="conservationAdmin">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="email"></ion-input>\n      </ion-item>\n\n      <button ion-button type="submit" outline round >Add</button>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/tristan/devops/admin-front-end/src/pages/conservation-admin-create/conservation-admin-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ConservationAdminCreatePage);
    return ConservationAdminCreatePage;
}());

//# sourceMappingURL=conservation-admin-create.js.map

/***/ })

});
//# sourceMappingURL=1.js.map