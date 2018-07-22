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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _select_cart_select_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-cart/select-cart.component */ "./src/app/select-cart/select-cart.component.ts");
/* harmony import */ var _view_cart_view_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-cart/view-cart.component */ "./src/app/view-cart/view-cart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'select-cart',
        component: _select_cart_select_cart_component__WEBPACK_IMPORTED_MODULE_2__["SelectCartComponent"]
    },
    {
        path: 'view-cart',
        component: _view_cart_view_cart_component__WEBPACK_IMPORTED_MODULE_3__["ViewCartComponent"]
    },
    { path: '',
        redirectTo: 'select-cart',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n:host(app-root) {\n  order: 0;\n  padding: 0;\n  flex: 1 1 auto;\n  -ms-grid-row-align: auto;\n      align-self: auto;\n  height: 100vh;\n  display: block;\n  background: #28917A;\n}\n\n.main-container {\n  height: 100vh;\n  width: 100vw;\n  z-index: 1;\n}\n\n.menu-container {\n  height: 100vh;\n  z-index: 2000;\n}\n\n.routes-container {\n  z-index: 1000;\n}\n\n.glass {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  z-index: 1000;\n}\n\n.glass:before {\n  content: '';\n  width: 100%;\n  height: 30%;\n  background: inherit;\n  box-shadow: 0 0 0 200px;\n  -webkit-filter: blur(10px);\n          filter: blur(10px);\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"glass .container-fluid\">\n  <div class=\"main-container row\">\n    <div class=\"menu-container col-3\">\n      <app-menu></app-menu>\n    </div>\n    <div class=\"routes-container col-9\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

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
        this.title = 'Registore';
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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _scanner_scanner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scanner/scanner.component */ "./src/app/scanner/scanner.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _select_cart_select_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select-cart/select-cart.component */ "./src/app/select-cart/select-cart.component.ts");
/* harmony import */ var _view_cart_view_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-cart/view-cart.component */ "./src/app/view-cart/view-cart.component.ts");
/* harmony import */ var _checkout_cart_checkout_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkout-cart/checkout-cart.component */ "./src/app/checkout-cart/checkout-cart.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart-item/cart-item.component */ "./src/app/cart-item/cart-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                _scanner_scanner_component__WEBPACK_IMPORTED_MODULE_4__["ScannerComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"],
                _select_cart_select_cart_component__WEBPACK_IMPORTED_MODULE_7__["SelectCartComponent"],
                _view_cart_view_cart_component__WEBPACK_IMPORTED_MODULE_8__["ViewCartComponent"],
                _checkout_cart_checkout_cart_component__WEBPACK_IMPORTED_MODULE_9__["CheckoutCartComponent"],
                _cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_11__["CartItemComponent"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart-item.ts":
/*!******************************!*\
  !*** ./src/app/cart-item.ts ***!
  \******************************/
/*! exports provided: CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
var CartItem = /** @class */ (function () {
    function CartItem(upc) {
        this.upc = upc;
    }
    return CartItem;
}());



/***/ }),

/***/ "./src/app/cart-item/cart-item.component.css":
/*!***************************************************!*\
  !*** ./src/app/cart-item/cart-item.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cart-item/cart-item.component.html":
/*!****************************************************!*\
  !*** ./src/app/cart-item/cart-item.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{cartItem.upc}}</p>\n"

/***/ }),

/***/ "./src/app/cart-item/cart-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/cart-item/cart-item.component.ts ***!
  \**************************************************/
/*! exports provided: CartItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemComponent", function() { return CartItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart-item */ "./src/app/cart-item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartItemComponent = /** @class */ (function () {
    function CartItemComponent() {
    }
    CartItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _cart_item__WEBPACK_IMPORTED_MODULE_1__["CartItem"])
    ], CartItemComponent.prototype, "cartItem", void 0);
    CartItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart-item',
            template: __webpack_require__(/*! ./cart-item.component.html */ "./src/app/cart-item/cart-item.component.html"),
            styles: [__webpack_require__(/*! ./cart-item.component.css */ "./src/app/cart-item/cart-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartItemComponent);
    return CartItemComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  cart works!\n</p>\n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
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

var CartComponent = /** @class */ (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Native
        }),
        __metadata("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/checkout-cart/checkout-cart.component.css":
/*!***********************************************************!*\
  !*** ./src/app/checkout-cart/checkout-cart.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/checkout-cart/checkout-cart.component.html":
/*!************************************************************!*\
  !*** ./src/app/checkout-cart/checkout-cart.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  checkout-cart works!\n</p>\n"

/***/ }),

/***/ "./src/app/checkout-cart/checkout-cart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/checkout-cart/checkout-cart.component.ts ***!
  \**********************************************************/
/*! exports provided: CheckoutCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutCartComponent", function() { return CheckoutCartComponent; });
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

var CheckoutCartComponent = /** @class */ (function () {
    function CheckoutCartComponent() {
    }
    CheckoutCartComponent.prototype.ngOnInit = function () {
    };
    CheckoutCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout-cart',
            template: __webpack_require__(/*! ./checkout-cart.component.html */ "./src/app/checkout-cart/checkout-cart.component.html"),
            styles: [__webpack_require__(/*! ./checkout-cart.component.css */ "./src/app/checkout-cart/checkout-cart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckoutCartComponent);
    return CheckoutCartComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-bar-icon, .menu a:link, .menu a {\n  color: #484538;\n}\n\nbutton:focus {\n  outline: None;\n}\n\nli {\n  padding-top: 1em;\n}\n"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n<nav class=\"menu navbar navbar-expand-lg\">\n  <button class=\"col-sm-12 navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span  class=\"navbar-toggler-icon\">\n      <i class=\"menu-bar-icon fa fa-bars fa-2x\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <div class=\"col-sm-12 collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto text-center\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/\">\n          <span class=\"sr-only\">(current)</span>\n          <span>\n            <i class=\"fa fa-home fa-3x\"></i>\n          </span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/view-cart\">\n          <span>\n            <i class=\"fa fa-shopping-cart fa-3x\"></i>\n          </span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/history\">\n          <span>\n            <i class=\"fa fa-history fa-3x\"></i>\n          </span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n</div>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
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

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/scanner/scanner.component.css":
/*!***********************************************!*\
  !*** ./src/app/scanner/scanner.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/scanner/scanner.component.html":
/*!************************************************!*\
  !*** ./src/app/scanner/scanner.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"scanner\"></div>\n"

/***/ }),

/***/ "./src/app/scanner/scanner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/scanner/scanner.component.ts ***!
  \**********************************************/
/*! exports provided: ScannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerComponent", function() { return ScannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var quagga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quagga */ "./node_modules/quagga/dist/quagga.min.js");
/* harmony import */ var quagga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quagga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScannerComponent = /** @class */ (function () {
    function ScannerComponent() {
        var _this = this;
        this.failureThreshhold = .1;
        this.scan = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.debouncer = new rxjs_index__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.audio = new Audio();
        this.configObject = {
            inputStream: {
                type: "LiveStream",
                constraints: {
                    facingMode: "environment",
                },
                target: '#scanner'
            },
            locator: {
                patchSize: "large",
                halfSample: false,
            },
            frequency: 30,
            decoder: {
                readers: [
                    'upc_reader'
                ],
                debug: {
                    drawBoundingBox: true,
                    showFrequency: true,
                    drawScanline: true,
                    showPattern: true
                },
                multiple: false
            },
            locate: true
        };
        this.debouncer.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000)).subscribe(function (value) { _this.scan.emit(value); });
    }
    ScannerComponent.prototype.ngAfterViewInit = function () {
        this.initializeQuagga();
        this.audio.src = "./assets/beep.mp3";
        this.audio.load();
    };
    ScannerComponent.prototype.initializeQuagga = function () {
        var self = this;
        quagga__WEBPACK_IMPORTED_MODULE_1__["init"](this.configObject, function (err) {
            if (err) {
                console.log(err);
                return;
            }
            quagga__WEBPACK_IMPORTED_MODULE_1__["onDetected"](function (result) {
                if (!result.codeResult) {
                    return;
                }
                var code = result.codeResult.code;
                if (self.lastResult !== code) {
                    var countDecodedCodes_1 = 0;
                    var err_1 = 0;
                    result.codeResult.decodedCodes.forEach(function (decodedCode) {
                        if (decodedCode.error != undefined) {
                            countDecodedCodes_1++;
                            err_1 += parseFloat(decodedCode.error);
                        }
                    });
                    if (err_1 / countDecodedCodes_1 < self.failureThreshhold) {
                        self.beep();
                        self.debouncer.next(result.codeResult.code);
                    }
                    else {
                        console.log(err_1 / countDecodedCodes_1);
                        console.log("Code: " + code.toString());
                    }
                }
            });
            quagga__WEBPACK_IMPORTED_MODULE_1__["start"]();
        });
    };
    ScannerComponent.prototype.beep = function () {
        this.audio.play();
    };
    ScannerComponent.prototype.ngOnDestroy = function () {
        quagga__WEBPACK_IMPORTED_MODULE_1__["stop"]();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ScannerComponent.prototype, "scan", void 0);
    ScannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scanner',
            template: __webpack_require__(/*! ./scanner.component.html */ "./src/app/scanner/scanner.component.html"),
            styles: [__webpack_require__(/*! ./scanner.component.css */ "./src/app/scanner/scanner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ScannerComponent);
    return ScannerComponent;
}());



/***/ }),

/***/ "./src/app/select-cart/select-cart.component.css":
/*!*******************************************************!*\
  !*** ./src/app/select-cart/select-cart.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner {\n  height: 10%;\n\n}\n\n.banner-text {\n  font-family: 'Roboto Slab', serif;\n  font-size: 8vw;\n}\n\n.new-cart-action-box {\n  height: 90%;\n}\n\n.new-cart-btn {\n    height: 15vw;\n    width: 50vw;\n}\n\n.new-cart-btn-text {\n  font-size: 5vw;\n  font-family: sans-serif;\n}\n"

/***/ }),

/***/ "./src/app/select-cart/select-cart.component.html":
/*!********************************************************!*\
  !*** ./src/app/select-cart/select-cart.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banner row p-5 justify-content-center align-items-center\">\n  <div class=\" col-md-6 col-sm-10 text-center\">\n    <p class=\"banner-text\">Registore</p>\n  </div>\n</div>\n<div class=\"new-cart-action-box row justify-content-center align-items-center\">\n  <div class=\"col-md-4 col-sm-10 text-center\">\n    <a href=\"/view-cart\">\n      <button class=\"new-cart-btn btn text-center\" >\n        <span class=\"new-cart-btn-text\">New Cart</span>\n      </button>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/select-cart/select-cart.component.ts":
/*!******************************************************!*\
  !*** ./src/app/select-cart/select-cart.component.ts ***!
  \******************************************************/
/*! exports provided: SelectCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCartComponent", function() { return SelectCartComponent; });
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

var SelectCartComponent = /** @class */ (function () {
    function SelectCartComponent() {
    }
    SelectCartComponent.prototype.ngOnInit = function () {
    };
    SelectCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select-cart',
            template: __webpack_require__(/*! ./select-cart.component.html */ "./src/app/select-cart/select-cart.component.html"),
            styles: [__webpack_require__(/*! ./select-cart.component.css */ "./src/app/select-cart/select-cart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectCartComponent);
    return SelectCartComponent;
}());



/***/ }),

/***/ "./src/app/view-cart/view-cart.component.css":
/*!***************************************************!*\
  !*** ./src/app/view-cart/view-cart.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-cart/view-cart.component.html":
/*!****************************************************!*\
  !*** ./src/app/view-cart/view-cart.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-scanner (scan)=\"registerBarcodeScan($event)\"></app-scanner>\n<app-cart-item *ngFor=\"let item of items\" [cartItem]=\"item\"></app-cart-item>\n"

/***/ }),

/***/ "./src/app/view-cart/view-cart.component.ts":
/*!**************************************************!*\
  !*** ./src/app/view-cart/view-cart.component.ts ***!
  \**************************************************/
/*! exports provided: ViewCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCartComponent", function() { return ViewCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart-item */ "./src/app/cart-item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewCartComponent = /** @class */ (function () {
    function ViewCartComponent() {
        this.items = [];
    }
    ViewCartComponent.prototype.ngOnInit = function () {
    };
    ViewCartComponent.prototype.registerBarcodeScan = function (upc) {
        var cartItem = new _cart_item__WEBPACK_IMPORTED_MODULE_1__["CartItem"](upc);
        this.items.push(cartItem);
    };
    ViewCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-cart',
            template: __webpack_require__(/*! ./view-cart.component.html */ "./src/app/view-cart/view-cart.component.html"),
            styles: [__webpack_require__(/*! ./view-cart.component.css */ "./src/app/view-cart/view-cart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewCartComponent);
    return ViewCartComponent;
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

module.exports = __webpack_require__(/*! /home/zach/Projects/smartcart/smart_cart/javascript/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map