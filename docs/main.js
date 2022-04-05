(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dana/Git/test-task-decerto/src/main.ts */"zUnb");


/***/ }),

/***/ "4u/y":
/*!******************************************!*\
  !*** ./src/app/panel/panel.component.ts ***!
  \******************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button/button.component */ "be9G");







function PanelComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectProduct", function PanelComponent_div_6_Template_app_button_selectProduct_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectProduct($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exp_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", exp_r1);
} }
class PanelComponent {
    constructor() {
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.panelTitle = 'List of goods';
        this.selectedProduct = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.panelOpenState = false;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    writeValue(infoBtn) {
        if (infoBtn) {
            console.log(`Chosen element: `, infoBtn);
        }
    }
    ngOnInit() { }
    selectProduct(event) {
        this.selected.emit(event);
    }
}
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(); };
PanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelComponent, selectors: [["app-panel"]], inputs: { products: "products" }, outputs: { selected: "selected" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => PanelComponent),
                multi: true,
            },
        ])], decls: 7, vars: 2, consts: [[1, "panel", 3, "opened", "closed"], [1, "panel__header"], [1, "panel__title--container"], [1, "panel__title"], [1, "panel__btns"], [4, "ngFor", "ngForOf"], [3, "product", "selectProduct"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function PanelComponent_Template_mat_expansion_panel_opened_0_listener() { return ctx.panelOpenState != true; })("closed", function PanelComponent_Template_mat_expansion_panel_closed_0_listener() { return ctx.panelOpenState != false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PanelComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.panelTitle, "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-image: url('bg-cloud.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.panel[_ngcontent-%COMP%] {\n  margin: 50px;\n  background: transparent;\n}\n\n.panel__header[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\n\n.panel__title[_ngcontent-%COMP%] {\n  font-family: \"Ubuntu\", sans-serif;\n  color: #121212;\n  letter-spacing: 5px;\n  text-shadow: 0 2px 1px #747474, -1px 3px 1px #767676, -2px 5px 1px #787878, -3px 7px 1px #7a7a7a, -4px 9px 1px #7f7f7f, -5px 11px 1px #9a9999;\n}\n\n@media screen and (max-width: 435px) {\n  .panel__title[_ngcontent-%COMP%] {\n    letter-spacing: 2px;\n  }\n}\n\n@media screen and (max-width: 380px) {\n  .panel__title[_ngcontent-%COMP%] {\n    letter-spacing: 0px;\n  }\n}\n\n.panel__btns[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 740px;\n  justify-content: center;\n  flex-flow: wrap;\n}\n\n .mat-expansion-panel-body {\n  display: flex;\n  justify-content: center;\n}\n\n@keyframes neon {\n  from {\n    text-shadow: 0 0 3px rgba(202, 228, 225, 0.92), 0 0 15px rgba(202, 228, 225, 0.34), 0 0 6px rgba(30, 132, 242, 0.52), 0 0 10.5px rgba(30, 132, 242, 0.92), 0 0 17px rgba(30, 132, 242, 0.78), 0 0 27px rgba(30, 132, 242, 0.92);\n  }\n  to {\n    text-shadow: 0 0 3px rgba(202, 228, 225, 0.98), 0 0 15px rgba(202, 228, 225, 0.42), 0 0 6px rgba(30, 132, 242, 0.58), 0 0 11px rgba(30, 132, 242, 0.84), 0 0 19px rgba(30, 132, 242, 0.88), 0 0 30px #1e84f2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzIiwiLi4vLi4vLi4vcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBYSxZQUFBO0FDRGI7O0FERUE7RUFDRSxTQUFBO0VBQ0EsaURBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0NGOztBQVRBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0FBWUY7O0FBWEU7RUFDRSxrQ0FBQTtBQWFKOztBQVhFO0VBQ0UsaUNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw2SUFBQTtBQWFKOztBQVhJO0VBTkY7SUFPSSxtQkFBQTtFQWNKO0FBQ0Y7O0FBYkk7RUFURjtJQVVJLG1CQUFBO0VBZ0JKO0FBQ0Y7O0FBZEU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFnQko7O0FBWkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFlRjs7QUFaQTtFQUNFO0lBQ0UsK05BQUE7RUFlRjtFQVZBO0lBQ0UsNE1BQUE7RUFZRjtBQUNGIiwiZmlsZSI6InBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdpZHRoLWJ0bjogMTYwcHg7XG4kd2lkdGgtYnRuLXNtOiAxNTBweDtcblxuaHRtbCwgYm9keSB7IGhlaWdodDogMTAwJTsgfVxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXRzL2ltZy9iZy1jbG91ZC5qcGcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XG5cbi5wYW5lbCB7XG4gIG1hcmdpbjogNTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICZfX2hlYWRlciB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgfVxuICAmX190aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICMxMjEyMTI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICB0ZXh0LXNoYWRvdzogMCAycHggMXB4ICM3NDc0NzQsIC0xcHggM3B4IDFweCAjNzY3Njc2LCAtMnB4IDVweCAxcHggIzc4Nzg3OCxcbiAgICAgIC0zcHggN3B4IDFweCAjN2E3YTdhLCAtNHB4IDlweCAxcHggIzdmN2Y3ZiwgLTVweCAxMXB4IDFweCAjOWE5OTk5O1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzNXB4KSB7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODBweCkge1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICB9XG4gIH1cbiAgJl9fYnRucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDQgKiAkd2lkdGgtYnRuICsgMTAwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1mbG93OiB3cmFwO1xuICB9XG59XG5cbjo6bmctZGVlcC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQGtleWZyYW1lcyBuZW9uIHtcbiAgZnJvbSB7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzcHggcmdiYSgyMDIsIDIyOCwgMjI1LCAwLjkyKSxcbiAgICAgIDAgMCAxNXB4IHJnYmEoMjAyLCAyMjgsIDIyNSwgMC4zNCksIDAgMCA2cHggcmdiYSgzMCwgMTMyLCAyNDIsIDAuNTIpLFxuICAgICAgMCAwIDEwLjVweCByZ2JhKDMwLCAxMzIsIDI0MiwgMC45MiksIDAgMCAxN3B4IHJnYmEoMzAsIDEzMiwgMjQyLCAwLjc4KSxcbiAgICAgIDAgMCAyN3B4IHJnYmEoMzAsIDEzMiwgMjQyLCAwLjkyKTtcbiAgfVxuICB0byB7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzcHggcmdiYSgyMDIsIDIyOCwgMjI1LCAwLjk4KSxcbiAgICAgIDAgMCAxNXB4IHJnYmEoMjAyLCAyMjgsIDIyNSwgMC40MiksIDAgMCA2cHggcmdiYSgzMCwgMTMyLCAyNDIsIDAuNTgpLFxuICAgICAgMCAwIDExcHggcmdiYSgzMCwgMTMyLCAyNDIsIDAuODQpLCAwIDAgMTlweCByZ2JhKDMwLCAxMzIsIDI0MiwgMC44OCksXG4gICAgICAwIDAgMzBweCByZ2JhKDMwLCAxMzIsIDI0MiwgMSk7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel/panel.component */ "4u/y");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");




class AppComponent {
    constructor(fb) {
        this.fb = fb;
        this.selectedProduct = this.fb.group({
            itemSelected: null,
        });
        this.products = [
            {
                id: 1,
                name: 'Books',
                description: 'List of books',
            },
            {
                id: 2,
                name: 'Tea and coffee',
                description: 'Black or green tea; coffee with milk',
            },
            {
                id: 3,
                name: 'Flowers',
                description: 'Wonderful flowers',
            },
            {
                id: 4,
                name: 'Tickets for movies',
                description: 'New films for you',
            },
            {
                id: 5,
                name: 'Clothes',
                description: 'Comfortable clothes',
            },
            {
                id: 6,
                name: 'Sweets',
                description: 'The biggest cake',
            },
        ];
        this.panelOpenState = false;
    }
    ngOnInit() { }
    selected(event) {
        this.selectedProduct.patchValue({
            itemSelected: event,
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 2, consts: [[3, "formGroup"], ["formControlName", "itemSelected", 3, "products", "selected"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function AppComponent_Template_app_panel_selected_1_listener($event) { return ctx.selected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.selectedProduct);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("products", ctx.products);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _panel_panel_component__WEBPACK_IMPORTED_MODULE_2__["PanelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./button/button.component */ "be9G");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./panel/panel.component */ "4u/y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _button_button_component__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"],
        _panel_panel_component__WEBPACK_IMPORTED_MODULE_11__["PanelComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "be9G":
/*!********************************************!*\
  !*** ./src/app/button/button.component.ts ***!
  \********************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");






class ButtonComponent {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.selectProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    openSnackBar(message, product) {
        this.selectProduct.emit(product);
        this._snackBar.open(message, 'Close', {
            duration: 1000,
        });
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { product: "product" }, outputs: { selectProduct: "selectProduct" }, decls: 4, vars: 3, consts: [["mat-raised-button", "", 1, "btn__main", 3, "click"], ["matTooltipClass", "btn__icon--tooltip", "aria-hidden", "false", "aria-label", "Example home icon", "mat-raised-above", "", 1, "btn__icon", 3, "matTooltip", "matTooltipPosition"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_0_listener() { return ctx.openSnackBar(ctx.product == null ? null : ctx.product.description, ctx.product); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "help ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product == null ? null : ctx.product.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", "Info about " + (ctx.product == null ? null : ctx.product.name.toLowerCase()))("matTooltipPosition", "above");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-image: url('bg-cloud.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.btn__main[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 48px;\n  margin: 10px !important;\n  position: relative !important;\n  background-color: #6a6769b5;\n}\n\n@media screen and (max-width: 350px) {\n  .btn__main[_ngcontent-%COMP%] {\n    width: 150px;\n    font-size: 12px;\n  }\n}\n\n.btn__main[_ngcontent-%COMP%]:focus {\n  background-color: #340123b5;\n}\n\n.btn__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 3px;\n  right: 3px;\n}\n\n.btn__icon--tooltip[_ngcontent-%COMP%] {\n  background: #eea0cacf;\n  font-size: 12px;\n  margin-top: -50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzIiwiLi4vLi4vLi4vYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQWEsWUFBQTtBQ0RiOztBREVBO0VBQ0UsU0FBQTtFQUNBLGlEQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QUFSRTtFQUNFLFlESlE7RUNLUixZQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FBV0o7O0FBVkk7RUFORjtJQU9JLFlEVFM7SUNVVCxlQUFBO0VBYUo7QUFDRjs7QUFaSTtFQUNFLDJCQUFBO0FBY047O0FBWEU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBYUo7O0FBWkk7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWNOIiwiZmlsZSI6ImJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR3aWR0aC1idG46IDE2MHB4O1xuJHdpZHRoLWJ0bi1zbTogMTUwcHg7XG5cbmh0bWwsIGJvZHkgeyBoZWlnaHQ6IDEwMCU7IH1cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy9pbWcvYmctY2xvdWQuanBnJyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMuc2Nzc1wiO1xuXG4uYnRuIHtcbiAgJl9fbWFpbiB7XG4gICAgd2lkdGg6ICR3aWR0aC1idG47XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YTY3NjliNTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xuICAgICAgd2lkdGg6ICR3aWR0aC1idG4tc207XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgICY6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MDEyM2I1O1xuICAgIH1cbiAgfVxuICAmX19pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAzcHg7XG4gICAgcmlnaHQ6IDNweDtcbiAgICAmLS10b29sdGlwIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlZWEwY2FjZjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");


class FooterComponent {
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 6, vars: 0, consts: [[1, "footer"], [1, "footer__btn"], ["href", "https://github.com/DanaDovzh/test-task-decerto", "target", "_blank", 1, "footer__btn__link"], [1, "footer__btn__icon"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " GitHub ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: [".footer[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 30px;\n  background-color: #bf6da5;\n  display: flex;\n  justify-content: center;\n}\n.footer__btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n}\n.footer__btn__icon[_ngcontent-%COMP%] {\n  height: 30px;\n}\n.footer__btn__link[_ngcontent-%COMP%] {\n  color: #111;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  font-size: 18px;\n}\n.footer__btn__link[_ngcontent-%COMP%]:hover {\n  color: #565555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUFFO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FBRUo7QUFESTtFQUNFLFlBQUE7QUFHTjtBQURJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUdOO0FBRk07RUFDRSxjQUFBO0FBSVIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmY2ZGE1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgJl9fYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgJl9faWNvbiB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICAgICZfX2xpbmsge1xuICAgICAgY29sb3I6ICMxMTE7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogcmdiKDg2LCA4NSwgODUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map