(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barra-superior></app-barra-superior>\n<router-outlet></router-outlet>\n<app-barra-inferior></app-barra-inferior>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/principal/principal.component */ "./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_componentes_index_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/componentes/index.routes */ "./src/app/componentes/index.routes.ts");
/* harmony import */ var _componentes_compartidos_barra_superior_barra_superior_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/compartidos/barra-superior/barra-superior.component */ "./src/app/componentes/compartidos/barra-superior/barra-superior.component.ts");
/* harmony import */ var _componentes_compartidos_barra_inferior_barra_inferior_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componentes/compartidos/barra-inferior/barra-inferior.component */ "./src/app/componentes/compartidos/barra-inferior/barra-inferior.component.ts");
/* harmony import */ var _componentes_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentes/noticias/noticias.component */ "./src/app/componentes/noticias/noticias.component.ts");
/* harmony import */ var _componentes_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentes/servicios/servicios.component */ "./src/app/componentes/servicios/servicios.component.ts");
/* harmony import */ var _componentes_contactenos_contactenos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentes/contactenos/contactenos.component */ "./src/app/componentes/contactenos/contactenos.component.ts");
/* harmony import */ var _services_noticias_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/noticias.service */ "./src/app/services/noticias.service.ts");
/* harmony import */ var _pipes_video_youtube_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/video-youtube.pipe */ "./src/app/pipes/video-youtube.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Componentes






// Servicios


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_5__["PrincipalComponent"],
                _componentes_compartidos_barra_superior_barra_superior_component__WEBPACK_IMPORTED_MODULE_8__["BarraSuperiorComponent"],
                _componentes_compartidos_barra_inferior_barra_inferior_component__WEBPACK_IMPORTED_MODULE_9__["BarraInferiorComponent"],
                _componentes_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_10__["NoticiasComponent"],
                _componentes_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_11__["ServiciosComponent"],
                _componentes_contactenos_contactenos_component__WEBPACK_IMPORTED_MODULE_12__["ContactenosComponent"],
                _pipes_video_youtube_pipe__WEBPACK_IMPORTED_MODULE_14__["VideoYoutubePipe"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_componentes_index_routes__WEBPACK_IMPORTED_MODULE_7__["RUTAS"], { useHash: true }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCFY-VoWCam4TxWxwHOfr68lT-GGz6Uobk'
                }), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_services_noticias_service__WEBPACK_IMPORTED_MODULE_13__["NoticiasService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/componentes/compartidos/barra-inferior/barra-inferior.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/componentes/compartidos/barra-inferior/barra-inferior.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".barra {\r\n    position: absolute !important;\r\n    /* bottom: 0 !important; */\r\n    width: 100% !important;\r\n    color: rgba(67, 119, 169, 1);\r\n    font-weight: bold;\r\n    text-align: center;\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n    border-top-style: solid;\r\n    border-top-color: rgba(67, 119, 169, 0.3);\r\n}"

/***/ }),

/***/ "./src/app/componentes/compartidos/barra-inferior/barra-inferior.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/compartidos/barra-inferior/barra-inferior.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"barra\">\n    <span>Dra. Claudia E. Morales M. | Reg. médico 1234</span>\n    <div>\n        Copyright &copy; 2019\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/compartidos/barra-inferior/barra-inferior.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/compartidos/barra-inferior/barra-inferior.component.ts ***!
  \************************************************************************************/
/*! exports provided: BarraInferiorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarraInferiorComponent", function() { return BarraInferiorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BarraInferiorComponent = /** @class */ (function () {
    function BarraInferiorComponent() {
    }
    BarraInferiorComponent.prototype.ngOnInit = function () {
    };
    BarraInferiorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-barra-inferior',
            template: __webpack_require__(/*! ./barra-inferior.component.html */ "./src/app/componentes/compartidos/barra-inferior/barra-inferior.component.html"),
            styles: [__webpack_require__(/*! ./barra-inferior.component.css */ "./src/app/componentes/compartidos/barra-inferior/barra-inferior.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BarraInferiorComponent);
    return BarraInferiorComponent;
}());



/***/ }),

/***/ "./src/app/componentes/compartidos/barra-superior/barra-superior.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/componentes/compartidos/barra-superior/barra-superior.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-light {\r\n    opacity: 0.8;\r\n    border-bottom-style: solid;\r\n    border-bottom-color: rgba(67, 119, 169, 0.3);\r\n}\r\n\r\nimg {\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.mr-auto,\r\n.mx-auto {\r\n    margin-left: auto!important;\r\n    margin-right: 0 !important;\r\n}"

/***/ }),

/***/ "./src/app/componentes/compartidos/barra-superior/barra-superior.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/compartidos/barra-superior/barra-superior.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"assets/img/foto.jpg\" width=\"70\" height=\"70\">\n        <span style=\"font-family: Brush Script MT, Brush Script Std, cursive; font-size: 1.5rem\">Dra. Claudia Morales</span>\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\" [routerLink]=\"['principal']\" routerLinkActive=\"active\">\n                <a class=\"nav-link\">Inicio <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\" [routerLink]=\"['noticias']\" routerLinkActive=\"active\">\n                <a class=\"nav-link\">Noticias</a>\n            </li>\n            <li class=\"nav-item\" [routerLink]=\"['servicios']\" routerLinkActive=\"active\">\n                <a class=\"nav-link\">Servicios</a>\n            </li>\n            <li class=\"nav-item\" [routerLink]=\"['contactenos']\" routerLinkActive=\"active\">\n                <a class=\"nav-link\">Contáctenos</a>\n            </li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/componentes/compartidos/barra-superior/barra-superior.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/compartidos/barra-superior/barra-superior.component.ts ***!
  \************************************************************************************/
/*! exports provided: BarraSuperiorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarraSuperiorComponent", function() { return BarraSuperiorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BarraSuperiorComponent = /** @class */ (function () {
    function BarraSuperiorComponent() {
    }
    BarraSuperiorComponent.prototype.ngOnInit = function () {
    };
    BarraSuperiorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-barra-superior',
            template: __webpack_require__(/*! ./barra-superior.component.html */ "./src/app/componentes/compartidos/barra-superior/barra-superior.component.html"),
            styles: [__webpack_require__(/*! ./barra-superior.component.css */ "./src/app/componentes/compartidos/barra-superior/barra-superior.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BarraSuperiorComponent);
    return BarraSuperiorComponent;
}());



/***/ }),

/***/ "./src/app/componentes/contactenos/contactenos.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/componentes/contactenos/contactenos.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    color: rgba(67, 119, 169, 1);\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\nh3 {\r\n    color: rgba(67, 119, 169, 1);\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\n.col-sm {\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    height: 30%;\r\n    width: 30%;\r\n}\r\n\r\nagm-map {\r\n    height: 300px;\r\n}"

/***/ }),

/***/ "./src/app/componentes/contactenos/contactenos.component.html":
/*!********************************************************************!*\
  !*** ./src/app/componentes/contactenos/contactenos.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2>Contáctenos</h2><br>\n    <div class=\"row\">\n        <div class=\"col-sm\">\n            <img src=\"assets/img/telefono.svg\">\n            <h3>Citas</h3>\n            <p>\n                (+57) 312 8368314\n            </p>\n        </div>\n        <div class=\"col-sm\">\n            <img src=\"assets/img/ubicacion.svg\">\n            <h3>Ubicación</h3>\n            <p>\n                Carrera 46 # 54 - 14 <br>Consultorio 1303<br>\n                <a target=\"_blank\" href=\"https://www.google.com/maps/place/Edificio+Comedal/@6.2512965,-75.5635344,19z/data=!4m12!1m6!3m5!1s0x8e4429a99808874f:0xba09b80c76bc38df!2sEdificio+Comedal!8m2!3d6.2512232!4d-75.5630516!3m4!1s0x8e4429a99808874f:0xba09b80c76bc38df!8m2!3d6.2512232!4d-75.5630516\">Edificio Comedal</a>\n            </p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/contactenos/contactenos.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/componentes/contactenos/contactenos.component.ts ***!
  \******************************************************************/
/*! exports provided: ContactenosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactenosComponent", function() { return ContactenosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactenosComponent = /** @class */ (function () {
    function ContactenosComponent() {
        this.lat = 6.251306;
        this.lng = -75.563049;
    }
    ContactenosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactenos',
            template: __webpack_require__(/*! ./contactenos.component.html */ "./src/app/componentes/contactenos/contactenos.component.html"),
            styles: [__webpack_require__(/*! ./contactenos.component.css */ "./src/app/componentes/contactenos/contactenos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactenosComponent);
    return ContactenosComponent;
}());



/***/ }),

/***/ "./src/app/componentes/index.routes.ts":
/*!*********************************************!*\
  !*** ./src/app/componentes/index.routes.ts ***!
  \*********************************************/
/*! exports provided: RUTAS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RUTAS", function() { return RUTAS; });
/* harmony import */ var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../componentes/principal/principal.component */ "./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var _componentes_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../componentes/noticias/noticias.component */ "./src/app/componentes/noticias/noticias.component.ts");
/* harmony import */ var _servicios_servicios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicios/servicios.component */ "./src/app/componentes/servicios/servicios.component.ts");
/* harmony import */ var _contactenos_contactenos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactenos/contactenos.component */ "./src/app/componentes/contactenos/contactenos.component.ts");




var RUTAS = [
    { path: 'principal', component: _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_0__["PrincipalComponent"] },
    { path: 'noticias', component: _componentes_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_1__["NoticiasComponent"] },
    { path: 'servicios', component: _servicios_servicios_component__WEBPACK_IMPORTED_MODULE_2__["ServiciosComponent"] },
    { path: 'contactenos', component: _contactenos_contactenos_component__WEBPACK_IMPORTED_MODULE_3__["ContactenosComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'principal' },
    { path: '**', pathMatch: 'full', redirectTo: 'principal' }
];


/***/ }),

/***/ "./src/app/componentes/noticias/noticias.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/noticias/noticias.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    color: rgba(67, 119, 169, 1);\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\n.titulo {\r\n    color: rgba(67, 119, 169, 1);\r\n    font-weight: bold;\r\n    text-align: justify;\r\n}\r\n\r\n.row {\r\n    margin-bottom: 35px;\r\n}\r\n\r\niframe {\r\n    position: relative;\r\n    margin-left: 25%;\r\n    margin-right: 25%;\r\n    width: 55%;\r\n    height: 350px;\r\n}\r\n\r\n/* nuevo */\r\n\r\n.container ul {\r\n    margin: 0;\r\n    list-style: none;\r\n    position: relative;\r\n    padding: 1px 100px;\r\n    color: black;\r\n    font-size: 13px;\r\n}\r\n\r\n.container ul:before {\r\n    content: \"\";\r\n    width: 1px;\r\n    height: 100%;\r\n    position: absolute;\r\n    border-left: 2px dashed rgba(67, 119, 169, 1);\r\n    ;\r\n}\r\n\r\n.container ul li {\r\n    position: relative;\r\n    margin-left: 30px;\r\n    padding: 14px;\r\n    border-radius: 6px;\r\n    box-shadow: 0 0 4px rgba(67, 119, 169, 0.3), 0 2px 2px rgba(67, 119, 169, 0.3);\r\n}\r\n\r\n.container ul li:not(:first-child) {\r\n    margin-top: 60px;\r\n}\r\n\r\n.container ul li>span {\r\n    width: 2px;\r\n    height: 100%;\r\n    background: rgba(67, 119, 169, 1);\r\n    ;\r\n    left: -30px;\r\n    top: 0;\r\n    position: absolute;\r\n}\r\n\r\n.container ul li>span:before,\r\n.container ul li>span:after {\r\n    content: \"\";\r\n    width: 8px;\r\n    height: 8px;\r\n    border-radius: 50%;\r\n    border: 2px solid rgba(67, 119, 169, 1);\r\n    ;\r\n    position: absolute;\r\n    background: #86b7e7;\r\n    left: -5px;\r\n    top: 0;\r\n}\r\n\r\n.container ul li span:after {\r\n    top: 100%;\r\n}\r\n\r\n.container ul li>div {\r\n    margin-left: 10px;\r\n}\r\n\r\n.container div .title,\r\n.container div .type {\r\n    font-weight: 600;\r\n    font-size: 12px;\r\n}\r\n\r\n.container div .info {\r\n    font-weight: 300;\r\n}\r\n\r\n.container div>div {\r\n    margin-top: 5px;\r\n}\r\n\r\n.container span.number {\r\n    height: 100%;\r\n}\r\n\r\n.container span.number span {\r\n    position: absolute;\r\n    font-size: 10px;\r\n    left: -58px;\r\n    font-weight: bold;\r\n}\r\n\r\n.container span.number span:first-child {\r\n    top: 0;\r\n}\r\n\r\n.container span.number span:last-child {\r\n    top: 100%;\r\n}"

/***/ }),

/***/ "./src/app/componentes/noticias/noticias.component.html":
/*!**************************************************************!*\
  !*** ./src/app/componentes/noticias/noticias.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2>Noticias</h2><br>\n    <div *ngIf=\"!mostarDetalle\">\n        <ul>\n            <li *ngFor=\"let noticia of noticias; let i = index\">\n                <span></span>\n                <div>\n                    <div class=\"title\">{{noticia.Tema}}</div>\n                    <div class=\"info\">{{noticia.Descripcion | slice: 0:500}}...</div>\n                    <div class=\"type\"><button type=\"button\" class=\"btn btn-primary\" (click)=\"mostrarDetalle(i)\">Ver mas</button></div>\n                </div> <span class=\"number\"><span>{{noticia.Fecha}}</span> <span></span></span>\n            </li>\n        </ul>\n    </div>\n\n    <div *ngIf=\"mostarDetalle\">\n        <h2>{{noticia.Tema}}</h2><br>\n        <p>\n            {{noticia.Descripcion}}\n        </p>\n        <iframe [src]=\"noticia.Video | videoYoutube\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n        <button class=\"btn btn-primary\" (click)=\"mostrarDetalle()\">Regresar a las noticias</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/noticias/noticias.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/noticias/noticias.component.ts ***!
  \************************************************************/
/*! exports provided: NoticiasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasComponent", function() { return NoticiasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_noticias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/noticias.service */ "./src/app/services/noticias.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoticiasComponent = /** @class */ (function () {
    function NoticiasComponent(ns) {
        this.ns = ns;
        this.mostarDetalle = false;
        this.noticias = [];
        this.cargarNoticias();
    }
    NoticiasComponent.prototype.mostrarDetalle = function (index) {
        this.mostarDetalle = !this.mostarDetalle;
        this.noticia = this.noticias[index];
    };
    NoticiasComponent.prototype.cargarNoticias = function () {
        var _this = this;
        this.ns.consultarNoticias().subscribe(function (noticias) {
            _this.noticias = Object.keys(noticias).map(function (_noticias) {
                var noticia = noticias[_noticias];
                return noticia;
            });
        });
    };
    NoticiasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-noticias',
            template: __webpack_require__(/*! ./noticias.component.html */ "./src/app/componentes/noticias/noticias.component.html"),
            styles: [__webpack_require__(/*! ./noticias.component.css */ "./src/app/componentes/noticias/noticias.component.css")]
        }),
        __metadata("design:paramtypes", [_services_noticias_service__WEBPACK_IMPORTED_MODULE_1__["NoticiasService"]])
    ], NoticiasComponent);
    return NoticiasComponent;
}());



/***/ }),

/***/ "./src/app/componentes/principal/principal.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    height: 30%;\r\n    width: 30%;\r\n}\r\n\r\n.banner {\r\n    width: 100%;\r\n    height: 50%;\r\n    text-align: center;\r\n    margin-bottom: 5%;\r\n}\r\n\r\n.banner>img {\r\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);\r\n    border-bottom-style: solid;\r\n    border-bottom-color: rgba(67, 119, 169, 0.3);\r\n    width: 73%;\r\n    border-radius: 5%;\r\n}\r\n\r\nh3 {\r\n    color: rgba(67, 119, 169, 1);\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\n.col-sm {\r\n    text-align: center;\r\n}\r\n\r\n.carousel-inner {\r\n    position: relative;\r\n    width: 900px;\r\n    overflow: hidden;\r\n    height: 471px;\r\n}\r\n\r\n.carousel {\r\n    margin-left: auto;\r\n    position: relative;\r\n    width: 900px;\r\n    margin-right: auto;\r\n}"

/***/ }),

/***/ "./src/app/componentes/principal/principal.component.html":
/*!****************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"banner\">\n        <img src=\"assets/img/banner4.jpg\">\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm\">\n            <img src=\"assets/img/telefono.svg\">\n            <h3>Contacto</h3>\n            <p>\n                (+57) 312 8368314<br>muelitasmorales@gmail.com\n            </p>\n        </div>\n        <div class=\"col-sm\">\n            <img src=\"assets/img/tiempo.svg\">\n            <h3>Horario</h3>\n            <p>\n                <strong>Lunes a Viernes</strong> <br> 7:00 am - 1:00 pm <br> 2:00 pm - 6:00pm <br> <strong>Sábado</strong><br> 7:00 am - 1:00 pm <br>\n            </p>\n        </div>\n        <div class=\"col-sm\">\n            <img src=\"assets/img/ubicacion.svg\">\n            <h3>Ubicación</h3>\n            <p>\n                Carrera 46 # 54 - 14 <br>Consultorio 1303<br>\n                <a target=\"_blank\" href=\"https://www.google.com/maps/place/Edificio+Comedal/@6.2512965,-75.5635344,19z/data=!4m12!1m6!3m5!1s0x8e4429a99808874f:0xba09b80c76bc38df!2sEdificio+Comedal!8m2!3d6.2512232!4d-75.5630516!3m4!1s0x8e4429a99808874f:0xba09b80c76bc38df!8m2!3d6.2512232!4d-75.5630516\">Edificio Comedal</a>\n            </p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/principal/principal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.ts ***!
  \**************************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrincipalComponent = /** @class */ (function () {
    function PrincipalComponent() {
    }
    PrincipalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-principal',
            template: __webpack_require__(/*! ./principal.component.html */ "./src/app/componentes/principal/principal.component.html"),
            styles: [__webpack_require__(/*! ./principal.component.css */ "./src/app/componentes/principal/principal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrincipalComponent);
    return PrincipalComponent;
}());



/***/ }),

/***/ "./src/app/componentes/servicios/servicios.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/servicios/servicios.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    color: rgba(67, 119, 169, 1);\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\n.titulo {\r\n    color: rgba(67, 119, 169, 1);\r\n    font-weight: bold;\r\n    text-align: justify;\r\n}\r\n\r\n.row {\r\n    margin-bottom: 35px;\r\n}\r\n\r\nimg {\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n\r\n.col-sm {\r\n    text-align: center;\r\n}\r\n\r\np {\r\n    text-align: justify !important;\r\n}"

/***/ }),

/***/ "./src/app/componentes/servicios/servicios.component.html":
/*!****************************************************************!*\
  !*** ./src/app/componentes/servicios/servicios.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2>Servicios</h2><br>\n    <div class=\"row\">\n        <div class=\"col-sm\">\n            <img src=\"assets/img/cirugia.svg\"><br>\n            <h3 class=\"titulo\">Cirugia dental</h3>\n            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione ipsa distinctio consequuntur sapiente, beatae officia placeat, itaque accusamus dolore minus quisquam quibusdam expedita consequatur harum tenetur voluptates totam laboriosam\n                omnis?\n            </p>\n            <ul>\n                <li>\n                    Sed ut perspiciatis unde omnis iste natus\n                </li>\n                <li>\n                    Accusantium doloremque laudantium totam rem\n                </li>\n            </ul>\n        </div>\n        <div class=\"col-sm\">\n            <img src=\"assets/img/consulta.svg\"><br>\n            <h3 class=\"titulo\">Revisiones periodicas</h3>\n            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione ipsa distinctio consequuntur sapiente, beatae officia placeat, itaque accusamus dolore minus quisquam quibusdam expedita consequatur harum tenetur voluptates totam laboriosam\n                omnis?\n            </p>\n            <ul>\n                <li>\n                    Sed ut perspiciatis unde omnis iste natus\n                </li>\n                <li>\n                    Accusantium doloremque laudantium totam rem\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm\">\n            <img src=\"assets/img/higiene.svg\"><br>\n            <h3 class=\"titulo\">Higiene dental</h3>\n            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione ipsa distinctio consequuntur sapiente, beatae officia placeat, itaque accusamus dolore minus quisquam quibusdam expedita consequatur harum tenetur voluptates totam laboriosam\n                omnis?\n            </p>\n            <ul>\n                <li>\n                    Sed ut perspiciatis unde omnis iste natus\n                </li>\n                <li>\n                    Accusantium doloremque laudantium totam rem\n                </li>\n            </ul>\n        </div>\n        <div class=\"col-sm\">\n            <img src=\"assets/img/implantes.svg\"><br>\n            <h3 class=\"titulo\">Implantes</h3>\n            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione ipsa distinctio consequuntur sapiente, beatae officia placeat, itaque accusamus dolore minus quisquam quibusdam expedita consequatur harum tenetur voluptates totam laboriosam\n                omnis?\n            </p>\n            <ul>\n                <li>\n                    Sed ut perspiciatis unde omnis iste natus\n                </li>\n                <li>\n                    Accusantium doloremque laudantium totam rem\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/servicios/servicios.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/servicios/servicios.component.ts ***!
  \**************************************************************/
/*! exports provided: ServiciosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosComponent", function() { return ServiciosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiciosComponent = /** @class */ (function () {
    function ServiciosComponent() {
    }
    ServiciosComponent.prototype.ngOnInit = function () {
    };
    ServiciosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-servicios',
            template: __webpack_require__(/*! ./servicios.component.html */ "./src/app/componentes/servicios/servicios.component.html"),
            styles: [__webpack_require__(/*! ./servicios.component.css */ "./src/app/componentes/servicios/servicios.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServiciosComponent);
    return ServiciosComponent;
}());



/***/ }),

/***/ "./src/app/pipes/video-youtube.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/video-youtube.pipe.ts ***!
  \*********************************************/
/*! exports provided: VideoYoutubePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoYoutubePipe", function() { return VideoYoutubePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoYoutubePipe = /** @class */ (function () {
    function VideoYoutubePipe(domSannitizer) {
        this.domSannitizer = domSannitizer;
    }
    VideoYoutubePipe.prototype.transform = function (value) {
        var url = 'https://www.youtube.com/embed/';
        return this.domSannitizer.bypassSecurityTrustResourceUrl(url + value);
    };
    VideoYoutubePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'videoYoutube'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], VideoYoutubePipe);
    return VideoYoutubePipe;
}());



/***/ }),

/***/ "./src/app/services/noticias.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/noticias.service.ts ***!
  \**********************************************/
/*! exports provided: NoticiasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasService", function() { return NoticiasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoticiasService = /** @class */ (function () {
    function NoticiasService(_http) {
        this._http = _http;
    }
    NoticiasService.prototype.consultarNoticias = function () {
        return this._http.get('assets/data/noticias.json');
    };
    NoticiasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NoticiasService);
    return NoticiasService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\johanna.montoya\Documents\GitHub\muelitasmorales\muelitasMorales\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map