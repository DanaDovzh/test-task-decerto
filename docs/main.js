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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const n_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", n_r2);
} }
class PanelComponent {
    constructor(fb) {
        this.fb = fb;
        this.panelOpenState = true;
        this.products = this.fb.group([{
                id: 1,
                name: 'Books',
                description: 'List of books'
            }, {
                id: 2,
                name: 'Tea and coffee',
                description: 'Black or green tea; coffee with milk'
            }, {
                id: 3,
                name: 'Flowers',
                description: 'Wonderful flowers'
            }, {
                id: 4,
                name: 'Tickets for movies',
                description: 'New films for you'
            }, {
                id: 5,
                name: 'Clothes',
                description: 'Comfortable clothes'
            }, {
                id: 6,
                name: 'Sweat',
                description: 'The biggest cake'
            }]);
        this.objectKeys = Object.keys;
    }
    ngOnInit() {
    }
}
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
PanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelComponent, selectors: [["app-panel"]], decls: 7, vars: 2, consts: [[1, "panel", 3, "opened", "closed"], [1, "panel__header"], [1, "panel__title--container"], [1, "panel__title"], [1, "panel__btns", 3, "formGroup"], [4, "ngFor", "ngForOf"], [3, "formControlName"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function PanelComponent_Template_mat_expansion_panel_opened_0_listener() { return ctx.panelOpenState = true; })("closed", function PanelComponent_Template_mat_expansion_panel_closed_0_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "List of goods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PanelComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.objectKeys(ctx.products.value));
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-image: url('bg-cloud.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.panel[_ngcontent-%COMP%] {\n  margin: 50px;\n  background: transparent;\n}\n\n.panel__header[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\n\n.panel__title[_ngcontent-%COMP%] {\n  margin: 40px auto;\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 35px;\n  color: #121212;\n  text-align: center;\n  letter-spacing: 5px;\n  text-shadow: 0 2px 1px #747474, -1px 3px 1px #767676, -2px 5px 1px #787878, -3px 7px 1px #7a7a7a, -4px 9px 1px #7f7f7f, -5px 11px 1px #9a9999;\n}\n\n.panel__title--container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n@media screen and (max-width: 435px) {\n  .panel__title[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n\n@media screen and (max-width: 380px) {\n  .panel__title[_ngcontent-%COMP%] {\n    font-size: 18px;\n    letter-spacing: 0px;\n  }\n}\n\n.panel__btns[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 740px;\n  justify-content: center;\n  flex-flow: wrap;\n}\n\n .mat-expansion-panel-body {\n  display: flex;\n  justify-content: center;\n}\n\n@keyframes neon {\n  from {\n    text-shadow: 0 0 3px rgba(202, 228, 225, 0.92), 0 0 15px rgba(202, 228, 225, 0.34), 0 0 6px rgba(30, 132, 242, 0.52), 0 0 10.5px rgba(30, 132, 242, 0.92), 0 0 17px rgba(30, 132, 242, 0.78), 0 0 27px rgba(30, 132, 242, 0.92);\n  }\n  to {\n    text-shadow: 0 0 3px rgba(202, 228, 225, 0.98), 0 0 15px rgba(202, 228, 225, 0.42), 0 0 6px rgba(30, 132, 242, 0.58), 0 0 11px rgba(30, 132, 242, 0.84), 0 0 19px rgba(30, 132, 242, 0.88), 0 0 30px #1e84f2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzIiwiLi4vLi4vLi4vcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBYSxZQUFBO0FDRGI7O0FERUE7RUFDRSxTQUFBO0VBQ0EsaURBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0NGOztBQVRBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0FBWUY7O0FBWEU7RUFDRSxrQ0FBQTtBQWFKOztBQVhFO0VBQ0UsaUJBQUE7RUFDRixpQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZJQUFBO0FBYUY7O0FBUEk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBU047O0FBUEk7RUFwQkY7SUFxQkksZUFBQTtFQVVKO0FBQ0Y7O0FBVEk7RUF2QkY7SUF3QkksZUFBQTtJQUNBLG1CQUFBO0VBWUo7QUFDRjs7QUFWRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQVlKOztBQVJBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBV0Y7O0FBUkE7RUFDRTtJQUNFLCtOQUNBO0VBVUY7RUFIQTtJQUNFLDRNQUNBO0VBSUY7QUFDRiIsImZpbGUiOiJwYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR3aWR0aC1idG46IDE2MHB4O1xuJHdpZHRoLWJ0bi1zbTogMTUwcHg7XG5cbmh0bWwsIGJvZHkgeyBoZWlnaHQ6IDEwMCU7IH1cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy9pbWcvYmctY2xvdWQuanBnJyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy5zY3NzJztcblxuLnBhbmVsIHtcbiAgbWFyZ2luOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgJl9faGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB9XG4gICZfX3RpdGxlIHtcbiAgICBtYXJnaW46IDQwcHggYXV0bztcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiAjMTIxMjEyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIHRleHQtc2hhZG93OiAwIDJweCAxcHggIzc0NzQ3NCxcbiAgICAgIC0xcHggM3B4IDFweCAjNzY3Njc2LFxuICAgICAgLTJweCA1cHggMXB4ICM3ODc4NzgsXG4gICAgICAtM3B4IDdweCAxcHggIzdhN2E3YSxcbiAgICAgIC00cHggOXB4IDFweCAjN2Y3ZjdmLFxuICAgICAgLTVweCAxMXB4IDFweCAjOWE5OTk5O1xuICAgICYtLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMTAwdnc7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiAgYW5kIChtYXgtd2lkdGg6IDQzNXB4KSB7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gIGFuZCAobWF4LXdpZHRoOiAzODBweCkge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICB9XG4gICAgfVxuICAmX19idG5zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogNCokd2lkdGgtYnRuICsgMTAwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1mbG93OiB3cmFwO1xuICB9XG59XG5cbjo6bmctZGVlcC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQGtleWZyYW1lcyBuZW9uIHtcbiAgZnJvbSB7XG4gICAgdGV4dC1zaGFkb3c6XG4gICAgMCAwIDNweCByZ2JhKDIwMiwyMjgsMjI1LDAuOTIpLFxuICAgIDAgMCAxNXB4IHJnYmEoMjAyLDIyOCwyMjUsMC4zNCksXG4gICAgMCAwIDZweCByZ2JhKDMwLDEzMiwyNDIsMC41MiksXG4gICAgMCAwIDEwLjVweCByZ2JhKDMwLDEzMiwyNDIsMC45MiksXG4gICAgMCAwIDE3cHggcmdiYSgzMCwxMzIsMjQyLDAuNzgpLFxuICAgIDAgMCAyN3B4IHJnYmEoMzAsMTMyLDI0MiwwLjkyKTtcbiAgfVxuICB0byB7XG4gICAgdGV4dC1zaGFkb3c6XG4gICAgMCAwIDNweCByZ2JhKDIwMiwyMjgsMjI1LDAuOTgpLFxuICAgIDAgMCAxNXB4IHJnYmEoMjAyLDIyOCwyMjUsMC40MiksXG4gICAgMCAwIDZweCByZ2JhKDMwLDEzMiwyNDIsMC41OCksXG4gICAgMCAwIDExcHggcmdiYSgzMCwxMzIsMjQyLDAuODQpLFxuICAgIDAgMCAxOXB4IHJnYmEoMzAsMTMyLDI0MiwwLjg4KSxcbiAgICAwIDAgMzBweCByZ2JhKDMwLDEzMiwyNDIsMSk7XG4gIH1cbn1cbiJdfQ== */"] });


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
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel/panel.component */ "4u/y");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");



class AppComponent {
    constructor() {
        this.panelOpenState = false;
        this.title = 'test-task-decerto';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [[1, "footer"], [1, "footer__btn"], ["href", "https://github.com/DanaDovzh/test-task-decerto", "target", "_blank", 1, "footer__btn__link"], [1, "footer__btn__icon"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " GitHub ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_panel_panel_component__WEBPACK_IMPORTED_MODULE_1__["PanelComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: [".footer[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 30px;\n  background-color: #bf6da5;\n  display: flex;\n  justify-content: center;\n}\n.footer__btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n}\n.footer__btn__icon[_ngcontent-%COMP%] {\n  height: 30px;\n}\n.footer__btn__link[_ngcontent-%COMP%] {\n  color: #111;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  font-size: 18px;\n}\n.footer__btn__link[_ngcontent-%COMP%]:hover {\n  color: #565555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUFFO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FBRUo7QUFESTtFQUNFLFlBQUE7QUFHTjtBQURJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUdOO0FBRk07RUFDRSxjQUFBO0FBSVIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmY2ZGE1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgJl9fYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgJl9faWNvbiB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICAgICZfX2xpbmsge1xuICAgICAgY29sb3I6ICMxMTE7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogcmdiKDg2LCA4NSwgODUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });


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
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./button/button.component */ "be9G");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./panel/panel.component */ "4u/y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"],
        _panel_panel_component__WEBPACK_IMPORTED_MODULE_10__["PanelComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");







class ButtonComponent {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    writeValue(infoBtn) {
        this.infoBtn = infoBtn;
    }
    openSnackBar(message) {
        console.log(this.infoBtn);
        this._snackBar.open(message, 'Close');
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ButtonComponent),
                multi: true
            }
        ])], decls: 4, vars: 3, consts: [["mat-raised-button", "", 1, "btn__main", 3, "click"], ["matTooltipClass", "btn__icon--tooltip", "aria-hidden", "false", "aria-label", "Example home icon", "mat-raised-above", "", 1, "btn__icon", 3, "matTooltip", "matTooltipPosition"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_0_listener() { return ctx.openSnackBar(ctx.infoBtn.description); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.infoBtn.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", "Info about " + ctx.infoBtn.name.toLowerCase())("matTooltipPosition", "above");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"]], styles: ["html, body {\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-image: url('bg-cloud.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.btn__main {\n  width: 160px;\n  height: 48px;\n  margin: 10px !important;\n  position: relative !important;\n  background-color: #6a6769b5;\n}\n\n@media screen and (max-width: 350px) {\n  .btn__main {\n    width: 150px;\n    font-size: 12px;\n  }\n}\n\n.btn__icon {\n  position: absolute;\n  bottom: 3px;\n  right: 3px;\n}\n\n.btn__icon--tooltip {\n  background: #eea0cacf;\n  font-size: 12px;\n  margin-top: -50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzIiwiLi4vLi4vLi4vYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQWEsWUFBQTtBQ0RiOztBREVBO0VBQ0UsU0FBQTtFQUNBLGlEQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QUFSRTtFQUNFLFlESlE7RUNLUixZQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FBV0o7O0FBVkk7RUFORjtJQU9JLFlEVFM7SUNVVCxlQUFBO0VBYUo7QUFDRjs7QUFYRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFhSjs7QUFaSTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBY04iLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdpZHRoLWJ0bjogMTYwcHg7XG4kd2lkdGgtYnRuLXNtOiAxNTBweDtcblxuaHRtbCwgYm9keSB7IGhlaWdodDogMTAwJTsgfVxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXRzL2ltZy9iZy1jbG91ZC5qcGcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuIiwiQGltcG9ydCAnLi4vLi4vc3R5bGVzLnNjc3MnO1xuXG4uYnRuIHtcbiAgJl9fbWFpbiB7XG4gICAgd2lkdGg6ICR3aWR0aC1idG47XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YTY3NjliNTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xuICAgICAgd2lkdGg6ICR3aWR0aC1idG4tc207XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG4gICZfX2ljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDNweDtcbiAgICByaWdodDogM3B4O1xuICAgICYtLXRvb2x0aXAge1xuICAgICAgYmFja2dyb3VuZDogI2VlYTBjYWNmO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */"], encapsulation: 2 });


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