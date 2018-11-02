webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-narnav></app-narnav>\r\n\r\n<app-narfoot></app-narfoot>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: "my-app",
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_wow__ = __webpack_require__("../../../../ngx-wow/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__team_team_module__ = __webpack_require__("../../../../../src/app/team/team.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__competition_comp_module__ = __webpack_require__("../../../../../src/app/competition/comp.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_module__ = __webpack_require__("../../../../../src/app/contact/contact.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__articles_art_module__ = __webpack_require__("../../../../../src/app/articles/art.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navfoot__ = __webpack_require__("../../../../../src/app/navfoot/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__navfoot_narfoot_narfoot_component__ = __webpack_require__("../../../../../src/app/navfoot/narfoot/narfoot.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap__["c" /* CollapseModule */],
                __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_5__team_team_module__["a" /* TeamModule */],
                __WEBPACK_IMPORTED_MODULE_6__competition_comp_module__["a" /* CompModule */],
                __WEBPACK_IMPORTED_MODULE_7__contact_contact_module__["a" /* ContactModule */],
                __WEBPACK_IMPORTED_MODULE_8__articles_art_module__["a" /* ArtModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_3_ngx_wow__["a" /* NgwWowModule */].forRoot(),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_12__navfoot__["a" /* NarnavComponent */], __WEBPACK_IMPORTED_MODULE_13__navfoot_narfoot_narfoot_component__["a" /* NarfootComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home__ = __webpack_require__("../../../../../src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team__ = __webpack_require__("../../../../../src/app/team/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__competition__ = __webpack_require__("../../../../../src/app/competition/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact__ = __webpack_require__("../../../../../src/app/contact/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__articles__ = __webpack_require__("../../../../../src/app/articles/index.ts");





var routes = [
    { path: "", redirectTo: "sample1", pathMatch: "full" },
    { path: "sample1", component: __WEBPACK_IMPORTED_MODULE_0__home__["c" /* HomeHostComponent */] },
    { path: "sample2", component: __WEBPACK_IMPORTED_MODULE_1__team__["b" /* TeamHostComponent */] },
    { path: "sample3", component: __WEBPACK_IMPORTED_MODULE_2__competition__["c" /* CompHostComponent */] },
    { path: "sample4", component: __WEBPACK_IMPORTED_MODULE_3__contact__["a" /* ContactUsComponent */] },
    { path: "sample5", component: __WEBPACK_IMPORTED_MODULE_4__articles__["e" /* Uefa2015Component */] },
    { path: "sample6", component: __WEBPACK_IMPORTED_MODULE_4__articles__["f" /* Uefa2016Component */] },
    { path: "sample7", component: __WEBPACK_IMPORTED_MODULE_4__articles__["c" /* Eug15Component */] },
    { path: "sample8", component: __WEBPACK_IMPORTED_MODULE_4__articles__["d" /* Eug16Component */] },
    { path: "sample9", component: __WEBPACK_IMPORTED_MODULE_4__articles__["a" /* Arm15Component */] },
    { path: "sample10", component: __WEBPACK_IMPORTED_MODULE_4__articles__["b" /* Arm16Component */] },
];


/***/ }),

/***/ "../../../../../src/app/articles/arm15/arm15.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/articles/arm15/arm15.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\">\r\n  <img class=\"card-img-top\" src=\"../../../assets/foto%20asue%20sayt/uefa/images.jpg\" alt=\"Card image cap\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">UEFA FUTSAL CUP 2016</h5>\r\n    <p class=\"card-text\"> Armenia was host the pre-round of the UEFA Futsal Cup 2016-17 for the first time. Double champion of Armenian Futsal, Armenian State University of Economics team was represent our country during the A group matches was held on August 16-21 at the Armenian Football Academy.\r\n      In this round, the opponents of the Armenian team were APOEL (Cyprus), Futsal Maniacs (Switzerland) and Gentofte (Denmark). All the participants was the current champions of their countries and was among the leaders of the world futsal rating list.</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/articles/arm15/arm15.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Arm15Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Arm15Component = (function () {
    function Arm15Component() {
    }
    Arm15Component.prototype.ngOnInit = function () {
    };
    Arm15Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-arm15',
            template: __webpack_require__("../../../../../src/app/articles/arm15/arm15.component.html"),
            styles: [__webpack_require__("../../../../../src/app/articles/arm15/arm15.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Arm15Component);
    return Arm15Component;
}());



/***/ }),

/***/ "../../../../../src/app/articles/arm16/arm16.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/articles/arm16/arm16.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\">\r\n  <img class=\"card-img-top\" src=\"../../../assets/foto%20asue%20sayt/uefa/images.jpg\" alt=\"Card image cap\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">UEFA FUTSAL CUP 2016</h5>\r\n    <p class=\"card-text\"> Armenia was host the pre-round of the UEFA Futsal Cup 2016-17 for the first time. Double champion of Armenian Futsal, Armenian State University of Economics team was represent our country during the A group matches was held on August 16-21 at the Armenian Football Academy.\r\n      In this round, the opponents of the Armenian team were APOEL (Cyprus), Futsal Maniacs (Switzerland) and Gentofte (Denmark). All the participants was the current champions of their countries and was among the leaders of the world futsal rating list.</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/articles/arm16/arm16.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Arm16Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Arm16Component = (function () {
    function Arm16Component() {
    }
    Arm16Component.prototype.ngOnInit = function () {
    };
    Arm16Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-arm16',
            template: __webpack_require__("../../../../../src/app/articles/arm16/arm16.component.html"),
            styles: [__webpack_require__("../../../../../src/app/articles/arm16/arm16.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Arm16Component);
    return Arm16Component;
}());



/***/ }),

/***/ "../../../../../src/app/articles/art.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__("../../../../../src/app/articles/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ArtModule = (function () {
    function ArtModule() {
    }
    ArtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["b" /* CarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* routes */]),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__index__["e" /* Uefa2015Component */],
                __WEBPACK_IMPORTED_MODULE_3__index__["f" /* Uefa2016Component */],
                __WEBPACK_IMPORTED_MODULE_3__index__["c" /* Eug15Component */],
                __WEBPACK_IMPORTED_MODULE_3__index__["d" /* Eug16Component */],
                __WEBPACK_IMPORTED_MODULE_3__index__["a" /* Arm15Component */],
                __WEBPACK_IMPORTED_MODULE_3__index__["b" /* Arm16Component */]
            ]
        })
    ], ArtModule);
    return ArtModule;
}());



/***/ }),

/***/ "../../../../../src/app/articles/eug15/eug15.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/articles/eug15/eug15.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\">\r\n  <img class=\"card-img-top\" src=\"../../../assets/foto%20asue%20sayt/uefa/images.jpg\" alt=\"Card image cap\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">10TH EUROPEAN UNIVERSITIES FUTSAL CHAMPIONSHIP</h5>\r\n    <p class=\"card-text\"> On 1st August 2015 in the Aula Lubrańskiego of the Adam Mickiewicz University, the Opening Ceremony of the 10th European Universities Futsal Championship was held.About 500 athletes in 22 men’s and 7 women’s teams, representing 29 universities from 14 countries completed from August the 2 to the 9 in 3 sportcenters in Poznan, Poland.The Ceremony opened with the colourful procession of all the teams taking part in the Championship.\r\n      ASUE futsal team successfully participated in 10th European Universities Futsal Championship, which took place in the city of Poznan, Poland on August 2-9. Our team took the 9th place among 22 university teams.\r\n      The head of the chair of Physical training, emergency situations Hovhaness Gabrielyan informed that ASUE futsal team had recorded 4 victories and 2 draws. They lost to Croatia, who won the league title.\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/articles/eug15/eug15.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Eug15Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Eug15Component = (function () {
    function Eug15Component() {
    }
    Eug15Component.prototype.ngOnInit = function () {
    };
    Eug15Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-eug15',
            template: __webpack_require__("../../../../../src/app/articles/eug15/eug15.component.html"),
            styles: [__webpack_require__("../../../../../src/app/articles/eug15/eug15.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Eug15Component);
    return Eug15Component;
}());



/***/ }),

/***/ "../../../../../src/app/articles/eug16/eug16.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/articles/eug16/eug16.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\">\r\n  <img class=\"card-img-top\" src=\"../../../assets/foto%20asue%20sayt/uefa/images.jpg\" alt=\"Card image cap\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">THE 3RD EDITION OF THE EUROPEAN UNIVERSITIES GAMES 2016</h5>\r\n    <p class=\"card-text\">Sports featured were Badminton, Basketball, Basketball 3×3, Beach Volleyball, Bridge, Chess, Football, Futsal, Golf, Handball, Judo, Karate, Rowing, Rugby 7’s, Sport Climbing, Swimming, Table Tennis, Taekwondo, Tennis, Volleyball and Water Polo. This edition of the European Universities Games, which took place from July 12 to July 25, was the greatest and biggest so far.More than 5,000 participants representing over 400 universities from 40 European countries competed in Croatian cities Zagreb and Rijeka.</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/articles/eug16/eug16.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Eug16Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Eug16Component = (function () {
    function Eug16Component() {
    }
    Eug16Component.prototype.ngOnInit = function () {
    };
    Eug16Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-eug16',
            template: __webpack_require__("../../../../../src/app/articles/eug16/eug16.component.html"),
            styles: [__webpack_require__("../../../../../src/app/articles/eug16/eug16.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Eug16Component);
    return Eug16Component;
}());



/***/ }),

/***/ "../../../../../src/app/articles/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uefa2015_uefa2015_component__ = __webpack_require__("../../../../../src/app/articles/uefa2015/uefa2015.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__uefa2015_uefa2015_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uefa2016_uefa2016_component__ = __webpack_require__("../../../../../src/app/articles/uefa2016/uefa2016.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__uefa2016_uefa2016_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eug15_eug15_component__ = __webpack_require__("../../../../../src/app/articles/eug15/eug15.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__eug15_eug15_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eug16_eug16_component__ = __webpack_require__("../../../../../src/app/articles/eug16/eug16.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__eug16_eug16_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__arm16_arm16_component__ = __webpack_require__("../../../../../src/app/articles/arm16/arm16.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__arm16_arm16_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__arm15_arm15_component__ = __webpack_require__("../../../../../src/app/articles/arm15/arm15.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__arm15_arm15_component__["a"]; });








/***/ }),

/***/ "../../../../../src/app/articles/uefa2015/uefa2015.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/articles/uefa2015/uefa2015.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\">\r\n  <img class=\"card-img-top\" src=\"../../../assets/foto%20asue%20sayt/uefa/images.jpg\" alt=\"Card image cap\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">UEFA FUTSAL CUP 2015</h5>\r\n    <p class=\"card-text\">ASUE futsal team, who was the champion of Armenia in the Futsal Premier League of 2014/2015 years,was leaving for Chisinau (Moldova), to participate in the qualifying round of the UEFA Futsal Cup, which took place on August 26-29.ASEU team included in the G group, along with “Progress” team (Moldova) and “Hale-Guyk” (Belgium). The members of our delegation was: 13 athletes, head Coach Karen Mikaelyan, head of the delegation- Vice-Rector Sevak Khachatryan and the acting head of the chair of Physical training, emergency situations Hovhaness Gabrielyan.</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/articles/uefa2015/uefa2015.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Uefa2015Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Uefa2015Component = (function () {
    function Uefa2015Component() {
    }
    Uefa2015Component.prototype.ngOnInit = function () {
    };
    Uefa2015Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-uefa2015',
            template: __webpack_require__("../../../../../src/app/articles/uefa2015/uefa2015.component.html"),
            styles: [__webpack_require__("../../../../../src/app/articles/uefa2015/uefa2015.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Uefa2015Component);
    return Uefa2015Component;
}());



/***/ }),

/***/ "../../../../../src/app/articles/uefa2016/uefa2016.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/articles/uefa2016/uefa2016.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\">\r\n  <img class=\"card-img-top\" src=\"../../../assets/foto%20asue%20sayt/uefa/images.jpg\" alt=\"Card image cap\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">UEFA FUTSAL CUP 2016</h5>\r\n    <p class=\"card-text\"> Armenia was host the pre-round of the UEFA Futsal Cup 2016-17 for the first time. Double champion of Armenian Futsal, Armenian State University of Economics team was represent our country during the A group matches was held on August 16-21 at the Armenian Football Academy.\r\n      In this round, the opponents of the Armenian team were APOEL (Cyprus), Futsal Maniacs (Switzerland) and Gentofte (Denmark). All the participants was the current champions of their countries and was among the leaders of the world futsal rating list.</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/articles/uefa2016/uefa2016.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Uefa2016Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Uefa2016Component = (function () {
    function Uefa2016Component() {
    }
    Uefa2016Component.prototype.ngOnInit = function () {
    };
    Uefa2016Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-uefa2016',
            template: __webpack_require__("../../../../../src/app/articles/uefa2016/uefa2016.component.html"),
            styles: [__webpack_require__("../../../../../src/app/articles/uefa2016/uefa2016.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Uefa2016Component);
    return Uefa2016Component;
}());



/***/ }),

/***/ "../../../../../src/app/carusel1.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Carusel1Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Carusel1Service = (function () {
    function Carusel1Service() {
        this.carSlide = [
            {
                slideNumber: 0,
                imageUrl: "https://storage.googleapis.com/cdn.ucraft.me/userFiles/futsal/images/r100-BcXIge33B0c.jpg",
                slideLab: "../assets/foto%20asue%20sayt/logo%20(2).png",
                slidePar: "Student Team Armenian State University of Economic"
            },
        ];
    }
    Carusel1Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Carusel1Service);
    return Carusel1Service;
}());



/***/ }),

/***/ "../../../../../src/app/competition/comp-foot/comp-foot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/competition/comp-foot/comp-foot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-columns\">\r\n\r\n  <a class=\"nav-link\" routerLink=\"/sample5\" routerLinkActive=\"active\">\r\n  <div class=\"card p-5 border-secondary\">\r\n    <img class=\"card-img-top\" src=\"../../../assets/foto%20asue%20sayt/uefa/uef.png\" alt=\"Card image cap\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">UEFA FUTSAL CUP 2015</h5>\r\n      <p class=\"card-text\">ASUE team took part in the matches of the first qualifying round of the UEFA Futsal Cup 2015...</p>\r\n    </div>\r\n  </div>\r\n  </a>\r\n\r\n\r\n  <a class=\"nav-link\" routerLink=\"/sample8\" routerLinkActive=\"active\">\r\n\r\n  <div class=\"card p-5 border-secondary\">\r\n    <img class=\"card-img-top\" src=\"../../../assets/foto%20asue%20sayt/zagreb/zgb.png\" alt=\"Card image cap\">\r\n    <div class=\"  card-body\">\r\n      <h5 class=\"card-title\">THE 3RD EDITION OF THE EUROPEAN UNIVERSITIES GAMES 2016</h5>\r\n      <div class=\"card-body\">\r\n        <p>This edition of the European Universities Games, which took place from July 12 to July 25, was the greatest and biggest so far...</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </a>\r\n\r\n  <a class=\"nav-link\" routerLink=\"/sample6\" routerLinkActive=\"active\">\r\n  <div class=\"card p-5 border-secondary\">\r\n    <img class=\"card-img-top\" src=\"../../../assets/foto%20asue%20sayt/uefa/uefa16.jpg\" alt=\"Card image cap\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">UEFA FUTSAL CUP 2016</h5>\r\n      <p class=\"card-text\">Armenia was host the pre-round of the UEFA Futsal Cup 2016-17 for the first time...</p>\r\n\r\n    </div>\r\n  </div>\r\n  </a>\r\n\r\n\r\n  <div class=\"card p-5 border-secondary\">\r\n    <img class=\"card-img-top\" src=\"../../../assets/foto%20asue%20sayt/logo3.jpg\" alt=\"mi ban\">\r\n  </div>\r\n\r\n  <a class=\"nav-link\" routerLink=\"/sample9\" routerLinkActive=\"active\">\r\n\r\n  <div class=\"card p-5 border-secondary\">\r\n    <img class=\"card-img-top\" src=\"../../../assets/foto%20asue%20sayt/champ1.jpg\" alt=\"Card image cap\">\r\n\r\n     <div class=\"card-body\">\r\n      <h5 class=\"card-title\">Armenian futsal Premier League 2014-2015</h5>\r\n      <p class=\"card-text\">ASUE futsal team defeated Vanadzor \"Talgrig\" team with the score 8:3, becoming the champion of RA futsal Premier League ...</p>\r\n    </div>\r\n  </div>\r\n  </a>\r\n\r\n  <a class=\"nav-link\" routerLink=\"/sample7\" routerLinkActive=\"active\">\r\n  <div class=\"card p-5 border-secondary\">\r\n    <img class=\"card-img-top\" src=\"../../../assets/foto%20asue%20sayt/poznan/lav.jpg\" alt=\"Card image\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">10TH EUROPEAN UNIVERSITIES FUTSAL CHAMPIONSHIP</h5>\r\n      <p class=\"card-text\">On 1st August 2015 in the Aula Lubrańskiego of the Adam Mickiewicz University, the Opening Ceremony of the 10th European Universities Futsal Championship ...</p>\r\n    </div>\r\n  </div>\r\n  </a>\r\n\r\n  <a class=\"nav-link\" routerLink=\"/sample10\" routerLinkActive=\"active\">\r\n  <div class=\"card p-5 border-secondary\">\r\n    <img class=\"card-img-top \" src=\"../../../assets/foto%20asue%20sayt/2016champ.jpg\" alt=\"Card image\">\r\n\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">Armenian futsal Premier League 2015-2016</h5>\r\n      <p class=\"card-text\">Futsal team of ASUE won the title in RA higher Futsal Championship League for the season of 2015-2016...</p>\r\n\r\n    </div>\r\n  </div>\r\n  </a>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/competition/comp-foot/comp-foot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompFootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompFootComponent = (function () {
    function CompFootComponent(router) {
        this.router = router;
        this.isCollapsed = true;
    }
    CompFootComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    CompFootComponent.prototype.toggleCollapse = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    CompFootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comp-foot',
            template: __webpack_require__("../../../../../src/app/competition/comp-foot/comp-foot.component.html"),
            styles: [__webpack_require__("../../../../../src/app/competition/comp-foot/comp-foot.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], CompFootComponent);
    return CompFootComponent;
}());



/***/ }),

/***/ "../../../../../src/app/competition/comp-head/comp-head.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/competition/comp-head/comp-head.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row \">\r\n\r\n  <div class=\"col-4 text-center p-3\" >\r\n    <img  src=\"../../../assets/foto%20asue%20sayt/uefa/uefapn.png\" alt=\"Card image cap\" style=\"width: 200px;\">\r\n  </div>\r\n\r\n  <div class=\"col-4 text-center p-5\">\r\n    <img  src=\"../../../assets/foto%20asue%20sayt/eusalog.png\" alt=\"Card image cap\" style=\"width: 200px;\">\r\n\r\n  </div>\r\n  <div class=\"col-4 text-center p-3\">\r\n    <img  src=\"../../../assets/foto%20asue%20sayt/ffaLogo.png\" alt=\"Card image cap\" style=\"width: 200px;\">\r\n\r\n  </div>\r\n</div>\r\n<br>\r\n"

/***/ }),

/***/ "../../../../../src/app/competition/comp-head/comp-head.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompHeadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompHeadComponent = (function () {
    function CompHeadComponent() {
    }
    CompHeadComponent.prototype.ngOnInit = function () {
    };
    CompHeadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comp-head',
            template: __webpack_require__("../../../../../src/app/competition/comp-head/comp-head.component.html"),
            styles: [__webpack_require__("../../../../../src/app/competition/comp-head/comp-head.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompHeadComponent);
    return CompHeadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/competition/comp-host/comp-host.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/competition/comp-host/comp-host.component.html":
/***/ (function(module, exports) {

module.exports = "<app-comp-head></app-comp-head>\r\n<app-comp-foot></app-comp-foot>\r\n"

/***/ }),

/***/ "../../../../../src/app/competition/comp-host/comp-host.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompHostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompHostComponent = (function () {
    function CompHostComponent() {
    }
    CompHostComponent.prototype.ngOnInit = function () {
    };
    CompHostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comp-host',
            template: __webpack_require__("../../../../../src/app/competition/comp-host/comp-host.component.html"),
            styles: [__webpack_require__("../../../../../src/app/competition/comp-host/comp-host.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompHostComponent);
    return CompHostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/competition/comp.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__("../../../../../src/app/competition/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CompModule = (function () {
    function CompModule() {
    }
    CompModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["b" /* CarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* routes */]),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__index__["a" /* CompFootComponent */],
                __WEBPACK_IMPORTED_MODULE_3__index__["b" /* CompHeadComponent */],
                __WEBPACK_IMPORTED_MODULE_3__index__["c" /* CompHostComponent */]
            ]
        })
    ], CompModule);
    return CompModule;
}());



/***/ }),

/***/ "../../../../../src/app/competition/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__comp_host_comp_host_component__ = __webpack_require__("../../../../../src/app/competition/comp-host/comp-host.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__comp_host_comp_host_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comp_head_comp_head_component__ = __webpack_require__("../../../../../src/app/competition/comp-head/comp-head.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__comp_head_comp_head_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comp_foot_comp_foot_component__ = __webpack_require__("../../../../../src/app/competition/comp-foot/comp-foot.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__comp_foot_comp_foot_component__["a"]; });





/***/ }),

/***/ "../../../../../src/app/contact/contact-us/contact-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n@import url(\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\");\r\n@import url('https://fonts.googleapis.com/css?family=Roboto');\r\n/*Font-awesome integration*/\r\n/*Google font integration*/\r\n#contact{\r\n  background-color:#f1f1f1;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n#contact .well{\r\n  margin-top:30px;\r\n  border-radius:0;\r\n}\r\n#contact .form-control{\r\n  border-radius: 0;\r\n  border:2px solid #1e1e1e;\r\n}\r\n#contact button{\r\n  border-radius:0;\r\n  border:2px solid #1e1e1e;\r\n}\r\n#contact .row{\r\n  margin-bottom:30px;\r\n}\r\n@media (max-width: 768px) {\r\n  #contact iframe {\r\n    margin-bottom: 15px;\r\n  }\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact-us/contact-us.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\">\r\n  <div class=\"container\">\r\n    <div class=\"well well-sm\">\r\n      <h3><strong>Contact Us</strong></h3>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-7\">\r\n        <iframe src=\"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3736489.7218514383!2d90.21589792292741!3d23.857125486636733!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1506502314230\" width=\"100%\" height=\"315\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\r\n      </div>\r\n\r\n      <div class=\"col-md-5\">\r\n        <h4><strong>Get in Touch</strong></h4>\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" name=\"\" value=\"\" placeholder=\"Name\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"email\" class=\"form-control\" name=\"\" value=\"\" placeholder=\"E-mail\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"tel\" class=\"form-control\" name=\"\" value=\"\" placeholder=\"Phone\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <textarea class=\"form-control\" name=\"\" rows=\"3\" placeholder=\"Message\"></textarea>\r\n          </div>\r\n          <button class=\"btn btn-default\" type=\"submit\" name=\"button\">\r\n            <i class=\"fa fa-paper-plane-o\" aria-hidden=\"true\"></i> Submit\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact-us/contact-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-us',
            template: __webpack_require__("../../../../../src/app/contact/contact-us/contact-us.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__("../../../../../src/app/contact/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactModule = (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["b" /* CarouselModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__index__["a" /* ContactUsComponent */]
            ]
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ }),

/***/ "../../../../../src/app/contact/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_us_contact_us_component__ = __webpack_require__("../../../../../src/app/contact/contact-us/contact-us.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__contact_us_contact_us_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/home/card-n/card-n.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*h1 {*/\r\n  /*-vendor-animation-duration: 3s;*/\r\n  /*-vendor-animation-delay: 2s;*/\r\n  /*-vendor-animation-iteration-count: infinite;*/\r\n  /*}*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/card-n/card-n.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngFor=\"let cards of cardArr; let even = even; let odd = odd\">\r\n  <div class=\"row align-items-center bg-warning text-white\"  *ngIf=\" even \">\r\n  <div class=\"col-6\">\r\n    <img src=\"{{ cards.imageUrl }}\" class=\"img-fluid wow slideInLeft\" alt=\"Responsive image\">\r\n  </div>\r\n  <div class=\"col-6 \">\r\n    <h1 class=\"text-center font-weight-bold wow swing \"> {{ cards.cardPar }} </h1>\r\n  </div>\r\n\r\n  </div>\r\n\r\n<div class=\"row align-items-center bg-light text-warning\" *ngIf=\" odd \">\r\n  <div class=\"col-6 \">\r\n    <h1 class=\"text-center font-weight-bold wow swing \"> {{ cards.cardPar }} </h1>\r\n  </div>\r\n  <div class=\"col-6\">\r\n    <img src=\"{{ cards.imageUrl }}\" class=\"img-fluid wow slideInLeft \" alt=\"Responsive image\">\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/home/card-n/card-n.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardNComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_service_service__ = __webpack_require__("../../../../../src/app/home/card-n/card-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardNComponent = (function () {
    function CardNComponent(cardservice) {
        this.cardservice = cardservice;
        this.cardArr = [];
    }
    CardNComponent.prototype.ngOnInit = function () {
        this.cardArr = this.cardservice.cardArr;
    };
    CardNComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-card-n',
            template: __webpack_require__("../../../../../src/app/home/card-n/card-n.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/card-n/card-n.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__card_service_service__["a" /* CardServiceService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__card_service_service__["a" /* CardServiceService */]])
    ], CardNComponent);
    return CardNComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/card-n/card-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardServiceService = (function () {
    function CardServiceService() {
        this.cardArr = [
            {
                cardNumber: 0,
                imageUrl: "../../../assets/foto%20asue%20sayt/poznan/lav.jpg",
                cardPar: " ASUE Futsal Team became the winner of the 16th Republican sport games.\n" +
                    "      Our team had won the championship 4 years in a row."
            },
            {
                cardNumber: 1,
                imageUrl: "../../../assets/foto%20asue%20sayt/champ.jpg",
                cardPar: "ASUE futsal team became the two-time champion of Armenia"
            },
            {
                cardNumber: 2,
                imageUrl: "../../../assets/foto%20asue%20sayt/zagreb/eug16.jpg",
                cardPar: "THE 3RD EDITION OF THE EUROPEAN UNIVERSITIES GAMES 2016"
            },
            {
                cardNumber: 3,
                imageUrl: "../../../assets/foto%20asue%20sayt/zagreb/falsh.jpg",
                cardPar: "10TH EUROPEAN UNIVERSITIES FUTSAL CHAMPIONSHIP"
            }
        ];
    }
    CardServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CardServiceService);
    return CardServiceService;
}());



/***/ }),

/***/ "../../../../../src/app/home/carusel-n/carusel-n.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slidePic{\r\n  opacity: 0.3;\r\n}\r\n\r\n\r\n.carousel-caption  {\r\n  margin-bottom: 25rem;\r\n  color: darkorange;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/carusel-n/carusel-n.component.html":
/***/ (function(module, exports) {

module.exports = "<carousel>\r\n  <slide  *ngFor=\"let el of carSlide;\">\r\n    <img src=\"{{ el.imageUrl }}\" alt=\"First slide\" style=\"display: block; width: 100%;\" class=\"slidePic\">\r\n    <div class=\"carousel-caption d-none d-md-block\">\r\n      <img src={{el.slideLab}} alt=\"logo\" style=\"height: 250px;width: 230px\" class=\"animated zoomInUp\" >\r\n      <h1 class=\"fourth-text animated rubberBand\">{{el.slidePar}}  </h1>\r\n    </div>\r\n  </slide>\r\n</carousel>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/carusel-n/carusel-n.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaruselNComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carusel1_service__ = __webpack_require__("../../../../../src/app/carusel1.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CaruselNComponent = (function () {
    function CaruselNComponent(carusel1service) {
        this.carusel1service = carusel1service;
        this.carSlide = [];
    }
    CaruselNComponent.prototype.ngOnInit = function () {
        this.carSlide = this.carusel1service.carSlide;
        console.log(this.carSlide);
    };
    CaruselNComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-carusel-n',
            template: __webpack_require__("../../../../../src/app/home/carusel-n/carusel-n.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/carusel-n/carusel-n.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__carusel1_service__["a" /* Carusel1Service */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__carusel1_service__["a" /* Carusel1Service */]])
    ], CaruselNComponent);
    return CaruselNComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home-host/home-host.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bgpat {\r\n  background-color: black;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home-host/home-host.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"bgpat\">\r\n\r\n  <app-carusel-n></app-carusel-n>\r\n  <app-paral-n></app-paral-n>\r\n\r\n\r\n    <app-card-n > </app-card-n>\r\n\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home-host/home-host.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeHostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_n_card_service_service__ = __webpack_require__("../../../../../src/app/home/card-n/card-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeHostComponent = (function () {
    function HomeHostComponent(cardservice) {
        this.cardservice = cardservice;
        this.cardArr = [];
    }
    HomeHostComponent.prototype.ngOnInit = function () {
        this.cardArr = this.cardservice.cardArr;
    };
    HomeHostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-host',
            template: __webpack_require__("../../../../../src/app/home/home-host/home-host.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home-host/home-host.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__card_n_card_service_service__["a" /* CardServiceService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__card_n_card_service_service__["a" /* CardServiceService */]])
    ], HomeHostComponent);
    return HomeHostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_wow__ = __webpack_require__("../../../../ngx-wow/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__("../../../../../src/app/home/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ngx_wow__["a" /* NgwWowModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["b" /* CarouselModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__index__["c" /* HomeHostComponent */],
                __WEBPACK_IMPORTED_MODULE_4__index__["a" /* CardNComponent */],
                __WEBPACK_IMPORTED_MODULE_4__index__["b" /* CaruselNComponent */],
                __WEBPACK_IMPORTED_MODULE_4__index__["d" /* ParalNComponent */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_host_home_host_component__ = __webpack_require__("../../../../../src/app/home/home-host/home-host.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__home_host_home_host_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carusel_n_carusel_n_component__ = __webpack_require__("../../../../../src/app/home/carusel-n/carusel-n.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__carusel_n_carusel_n_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__card_n_card_n_component__ = __webpack_require__("../../../../../src/app/home/card-n/card-n.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__card_n_card_n_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paral_n_paral_n_component__ = __webpack_require__("../../../../../src/app/home/paral-n/paral-n.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__paral_n_paral_n_component__["a"]; });






/***/ }),

/***/ "../../../../../src/app/home/paral-n/paral-n.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".paral  {\r\n  border: 1px solid rgba(0,0,0,.9);\r\n  width: 1421px;\r\n  height:748px;\r\n  background-image: url(\"https://storage.googleapis.com/cdn.ucraft.me/userFiles/futsal/images/r147-4LWBUQ4E4_Q.jpg\");\r\n  background-size: 1421px 748px;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  text-align: center;\r\n  opacity: 0.5;\r\n}\r\n\r\n.card-title{\r\n  padding-top: 250px;\r\n  color: darkorange;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/paral-n/paral-n.component.html":
/***/ (function(module, exports) {

module.exports = "<!--paralex start-->\r\n<div class=\"card text-white paral \">\r\n  <!--<img class=\"card-img \" src=\"https://storage.googleapis.com/cdn.ucraft.me/userFiles/futsal/images/r147-4LWBUQ4E4_Q.jpg\" alt=\"Card image\">-->\r\n  <div class=\"card-img-overlay\">\r\n    <h1 class=\"card-title wow slideInLeft\">Young team with a great history</h1>\r\n    <span class=\"oi oi-icon-name\" title=\"icon name\" aria-hidden=\"true\"></span>\r\n\r\n  </div>\r\n</div>\r\n\r\n<!--paralex End-->\r\n"

/***/ }),

/***/ "../../../../../src/app/home/paral-n/paral-n.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParalNComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_wow__ = __webpack_require__("../../../../ngx-wow/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParalNComponent = (function () {
    function ParalNComponent(router, wowService) {
        var _this = this;
        this.router = router;
        this.wowService = wowService;
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]; }).subscribe(function (event) {
            _this.wowService.init();
        });
    }
    ParalNComponent.prototype.ngOnInit = function () {
        this.wowSubscription = this.wowService.itemRevealed$.subscribe(function (item) {
        });
    };
    ParalNComponent.prototype.ngOnDestroy = function () {
        this.wowSubscription.unsubscribe();
    };
    ParalNComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-paral-n',
            template: __webpack_require__("../../../../../src/app/home/paral-n/paral-n.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/paral-n/paral-n.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_ngx_wow__["b" /* NgwWowService */]])
    ], ParalNComponent);
    return ParalNComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navfoot/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__narnav_narnav_component__ = __webpack_require__("../../../../../src/app/navfoot/narnav/narnav.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__narnav_narnav_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/navfoot/narfoot/logon.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogonService = (function () {
    function LogonService() {
        this.logoArr = [
            {
                logoNumber: 0,
                imageUrl: "../../../assets/foto%20asue%20sayt/fisu.png",
            },
            {
                logoNumber: 1,
                imageUrl: "../../../assets/foto%20asue%20sayt/uefa/uefapn.png",
            },
            {
                logoNumber: 2,
                imageUrl: "../../../assets/foto%20asue%20sayt/ffaLogo.png",
            },
            {
                logoNumber: 3,
                imageUrl: "../../../assets/foto%20asue%20sayt/logoux.png",
            },
            {
                logoNumber: 4,
                imageUrl: "../../../assets/foto%20asue%20sayt/eusalog.png",
            },
            {
                logoNumber: 5,
                imageUrl: "../../../assets/foto%20asue%20sayt/zagreb/zaglog.png",
            },
            {
                logoNumber: 6,
                imageUrl: "../../../assets/foto%20asue%20sayt/logolt.png",
            },
            {
                logoNumber: 7,
                imageUrl: "../../../assets/foto%20asue%20sayt/logoasue.png",
            }
        ];
    }
    LogonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LogonService);
    return LogonService;
}());



/***/ }),

/***/ "../../../../../src/app/navfoot/narfoot/narfoot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navfoot/narfoot/narfoot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer bg-warning text-white text-center\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-3\" *ngFor=\"let logs of logoArr \">\r\n      <img src=\"{{ logs.imageUrl }}\" class=\"img-fluid\" style=\"width: 100px;height: 100px;padding: 15px\" >\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/navfoot/narfoot/narfoot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NarfootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logon_service__ = __webpack_require__("../../../../../src/app/navfoot/narfoot/logon.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NarfootComponent = (function () {
    function NarfootComponent(logoservice) {
        this.logoservice = logoservice;
        this.logoArr = [];
    }
    NarfootComponent.prototype.ngOnInit = function () {
        this.logoArr = this.logoservice.logoArr;
    };
    NarfootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-narfoot',
            template: __webpack_require__("../../../../../src/app/navfoot/narfoot/narfoot.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navfoot/narfoot/narfoot.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__logon_service__["a" /* LogonService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__logon_service__["a" /* LogonService */]])
    ], NarfootComponent);
    return NarfootComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navfoot/narnav/narnav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n/*#sample-panel {*/\r\n/*margin-left: 250px;*/\r\n/*}*/\r\n#navbarNav {\r\n  margin-left: 300px;\r\n}\r\n.nav-item {\r\n  margin-left: 25px;\r\n}\r\n.navbar-light .navbar-nav .active>.nav-link{\r\n  color: floralwhite;\r\n}\r\nul li a {\r\n  color: floralwhite;\r\n  font-weight: bold;\r\n}\r\nul li a.active {\r\n  color: floralwhite;\r\n  background-color: #E03237;\r\n  border-radius: 10px;\r\n}\r\nul li a:hover {\r\n  color: floralwhite;\r\n}\r\nnav a {\r\n  color: floralwhite;\r\n  font-weight: bold;\r\n}\r\nnav a.active {\r\n  color: floralwhite;\r\n  background-color: #E03237;\r\n  border-radius: 10px;\r\n}\r\n.navguin {\r\n  background-color: #343a40;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navfoot/narnav/narnav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg   sticky-top navguin\">\r\n  <a class=\"navbar-brand\" routerLink=\"/sample1\" ><img src=\"../../../assets/foto%20asue%20sayt/logo%20(2).png\" alt=\"logo\" style=\"height: 60px;width: 50px\"></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/sample1\" routerLinkActive=\"active\">HOME <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/sample2\" routerLinkActive=\"active\">TEAM</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/sample3\" routerLinkActive=\"active\">COMPETITION</a>\r\n      </li>\r\n\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link \" routerLink=\"/sample4\" routerLinkActive=\"active\">CONTACT US</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/navfoot/narnav/narnav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NarnavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NarnavComponent = (function () {
    function NarnavComponent(router) {
        this.router = router;
        this.isCollapsed = true;
    }
    NarnavComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    NarnavComponent.prototype.toggleCollapse = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    NarnavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-narnav',
            template: __webpack_require__("../../../../../src/app/navfoot/narnav/narnav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navfoot/narnav/narnav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NarnavComponent);
    return NarnavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/team/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__team_host_team_host_component__ = __webpack_require__("../../../../../src/app/team/team-host/team-host.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__team_host_team_host_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_carusel_team_carusel_component__ = __webpack_require__("../../../../../src/app/team/team-carusel/team-carusel.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__team_carusel_team_carusel_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_card_team_card_component__ = __webpack_require__("../../../../../src/app/team/team-card/team-card.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__team_paral_team_paral_component__ = __webpack_require__("../../../../../src/app/team/team-paral/team-paral.component.ts");
/* unused harmony namespace reexport */






/***/ }),

/***/ "../../../../../src/app/team/team-card/team-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-img-top {\r\n  width: 200px;\r\n  height: 200px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/team/team-card/team-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-group text-center\">\r\n  <div class=\"card bg-danger p-5 \">\r\n    <img class=\"card-img-top rounded mx-auto d-block\" src=\"../../../assets/foto%20asue%20sayt/cup1.png\" alt=\"Card image cap\">\r\n    <div class=\"card-body\">\r\n      <h2 class=\"card-title text-warning\">2014-2015</h2>\r\n      <h3 class=\"card-text text-warning\">Champion of RA futsal Premier League</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"card bg-danger p-5\">\r\n    <img class=\"card-img-top  rounded mx-auto d-block\" src=\"../../../assets/foto%20asue%20sayt/cup1.png\" alt=\"Card image cap\">\r\n    <div class=\"card-body \">\r\n      <h2 class=\"card-title text-warning \">2015-2016</h2>\r\n      <h3 class=\"card-text text-warning \">Champion of RA futsal Premier League</h3>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/team/team-card/team-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamCardComponent = (function () {
    function TeamCardComponent() {
    }
    TeamCardComponent.prototype.ngOnInit = function () {
    };
    TeamCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team-card',
            template: __webpack_require__("../../../../../src/app/team/team-card/team-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/team/team-card/team-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamCardComponent);
    return TeamCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/team/team-carusel/team-carusel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/team/team-carusel/team-carusel.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"../../../assets/foto%20asue%20sayt/zagreb/zagreb1.jpg\" class=\"img-fluid\" alt=\"Responsive image\">\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/team/team-carusel/team-carusel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamCaruselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamCaruselComponent = (function () {
    function TeamCaruselComponent() {
    }
    TeamCaruselComponent.prototype.ngOnInit = function () {
    };
    TeamCaruselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team-carusel',
            template: __webpack_require__("../../../../../src/app/team/team-carusel/team-carusel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/team/team-carusel/team-carusel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamCaruselComponent);
    return TeamCaruselComponent;
}());



/***/ }),

/***/ "../../../../../src/app/team/team-host/team-host.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n.bgclr{\r\n  background-color: black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/team/team-host/team-host.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bgclr\">\r\n<app-team-carusel></app-team-carusel>\r\n\r\n\r\n  <app-team-paral></app-team-paral>\r\n\r\n  <app-team-card></app-team-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/team/team-host/team-host.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamHostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamHostComponent = (function () {
    function TeamHostComponent() {
    }
    TeamHostComponent.prototype.ngOnInit = function () {
    };
    TeamHostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team-host',
            template: __webpack_require__("../../../../../src/app/team/team-host/team-host.component.html"),
            styles: [__webpack_require__("../../../../../src/app/team/team-host/team-host.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamHostComponent);
    return TeamHostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/team/team-paral/team-paral.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".paraya1{\r\n  height: 800px;\r\n  width: 800px;\r\n}\r\n\r\n.paraya{\r\n  background-image: url(\"https://storage.googleapis.com/cdn.ucraft.me/userFiles/futsal/images/r159-rdu4jslQo-s.jpg\");\r\n  min-height: 500px;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  opacity: 0.6;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/team/team-paral/team-paral.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"paraya\">\r\n<div class=\" paraya1 d-flex align-items-center\">\r\n  <!--<h1 class=\"align-items-center  text-danger font-weight-bold p-5\">ABOUT AS</h1>-->\r\n  <h2 class=\"text-warning p-5 font-weight-bold\">Student Team Armenian State University of Economic the multiple Champion of student games, which began to perform in the RA futsal Premier League in 2014, and became the double champion of the Armenia.\r\n    Represented her country and the university in European university games 3 times (2014,2015,2016) and in the UEFA Futsal Cup 2 times (2015,2016).</h2>\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/team/team-paral/team-paral.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamParalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamParalComponent = (function () {
    function TeamParalComponent() {
    }
    TeamParalComponent.prototype.ngOnInit = function () {
    };
    TeamParalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team-paral',
            template: __webpack_require__("../../../../../src/app/team/team-paral/team-paral.component.html"),
            styles: [__webpack_require__("../../../../../src/app/team/team-paral/team-paral.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamParalComponent);
    return TeamParalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/team/team.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__("../../../../../src/app/team/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__team_paral_team_paral_component__ = __webpack_require__("../../../../../src/app/team/team-paral/team-paral.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__team_card_team_card_component__ = __webpack_require__("../../../../../src/app/team/team-card/team-card.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TeamModule = (function () {
    function TeamModule() {
    }
    TeamModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["b" /* CarouselModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__index__["b" /* TeamHostComponent */],
                __WEBPACK_IMPORTED_MODULE_3__index__["a" /* TeamCaruselComponent */],
                __WEBPACK_IMPORTED_MODULE_4__team_paral_team_paral_component__["a" /* TeamParalComponent */],
                __WEBPACK_IMPORTED_MODULE_5__team_card_team_card_component__["a" /* TeamCardComponent */]
            ]
        })
    ], TeamModule);
    return TeamModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map