(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 397:
/*!***************************************************!*\
  !*** ./src/app/_directives/has-role.directive.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HasRoleDirective": () => (/* binding */ HasRoleDirective)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/account.service */ 7110);



class HasRoleDirective {
    constructor(viewContainerRef, templateRef, accountService) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.accountService = accountService;
        this.accountService.currentUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1)).subscribe((user) => {
            this.user = user;
        });
    }
    ngOnInit() {
        var _a, _b;
        if (!((_a = this.user) === null || _a === void 0 ? void 0 : _a.roles) || ((_b = this.user) === null || _b === void 0 ? void 0 : _b.roles) == null) {
            this.viewContainerRef.clear();
            return;
        }
        if (this.user.roles.some((r) => this.appHasRole.includes(r))) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainerRef.clear();
        }
    }
}
HasRoleDirective.ɵfac = function HasRoleDirective_Factory(t) { return new (t || HasRoleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService)); };
HasRoleDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: HasRoleDirective, selectors: [["", "appHasRole", ""]], inputs: { appHasRole: "appHasRole" } });


/***/ }),

/***/ 1700:
/*!***********************************************************!*\
  !*** ./src/app/_forms/date-input/date-input.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateInputComponent": () => (/* binding */ DateInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 2089);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);




function DateInputComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.label, " is required ");
} }
class DateInputComponent {
    constructor(ngControl) {
        this.ngControl = ngControl;
        this.label = '';
        this.bsConfig = {
            containerClass: 'theme-red',
            dateInputFormat: 'DD MMMM YYYY',
        };
        this.ngControl.valueAccessor = this;
    }
    writeValue(obj) { }
    registerOnChange(fn) { }
    registerOnTouched(fn) { }
}
DateInputComponent.ɵfac = function DateInputComponent_Factory(t) { return new (t || DateInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControl, 2)); };
DateInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DateInputComponent, selectors: [["app-date-input"]], inputs: { label: "label", maxDate: "maxDate" }, decls: 3, vars: 7, consts: [[1, "form-group"], ["type", "text", "bsDatepicker", "", 1, "form-control", 3, "formControl", "placeholder", "bsConfig", "maxDate"], ["class", "invalid-feedback", 4, "ngIf"], [1, "invalid-feedback"]], template: function DateInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DateInputComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-valid", ctx.ngControl.touched && ctx.ngControl.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.ngControl.control)("bsConfig", ctx.bsConfig)("maxDate", ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ngControl.control == null ? null : ctx.ngControl.control.errors == null ? null : ctx.ngControl.control.errors.required);
    } }, directives: [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_0__.BsDatepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_0__.BsDatepickerDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRlLWlucHV0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1201:
/*!***********************************************************!*\
  !*** ./src/app/_forms/text-input/text-input.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextInputComponent": () => (/* binding */ TextInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



function TextInputComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Please enter a ", ctx_r0.label, " ");
} }
function TextInputComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.label, " must be at least ", ctx_r1.ngControl.control == null ? null : ctx_r1.ngControl.control.errors == null ? null : ctx_r1.ngControl.control.errors.minlength["requiredLength"], " ");
} }
function TextInputComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r2.label, " must be at most ", ctx_r2.ngControl.control == null ? null : ctx_r2.ngControl.control.errors == null ? null : ctx_r2.ngControl.control.errors.maxlength["requiredLength"], " ");
} }
function TextInputComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password do not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TextInputComponent {
    constructor(ngControl) {
        this.ngControl = ngControl;
        this.type = 'text';
        ngControl.valueAccessor = this;
    }
    writeValue(obj) { }
    registerOnChange(fn) { }
    registerOnTouched(fn) { }
}
TextInputComponent.ɵfac = function TextInputComponent_Factory(t) { return new (t || TextInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl, 2)); };
TextInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextInputComponent, selectors: [["app-text-input"]], inputs: { label: "label", type: "type" }, decls: 6, vars: 9, consts: [[1, "form-group"], [1, "form-control", 3, "type", "formControl", "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], [1, "invalid-feedback"]], template: function TextInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TextInputComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TextInputComponent_div_3_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TextInputComponent_div_4_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TextInputComponent_div_5_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.ngControl.touched && ctx.ngControl.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.ngControl.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngControl.control == null ? null : ctx.ngControl.control.errors == null ? null : ctx.ngControl.control.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngControl.control == null ? null : ctx.ngControl.control.errors == null ? null : ctx.ngControl.control.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngControl.control == null ? null : ctx.ngControl.control.errors == null ? null : ctx.ngControl.control.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngControl.control == null ? null : ctx.ngControl.control.errors == null ? null : ctx.ngControl.control.errors.isMatching);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXh0LWlucHV0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6299:
/*!****************************************!*\
  !*** ./src/app/_guards/admin.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminGuard": () => (/* binding */ AdminGuard)
/* harmony export */ });
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators/map */ 1156);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/account.service */ 7110);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 9344);




class AdminGuard {
    constructor(accountService, toastr) {
        this.accountService = accountService;
        this.toastr = toastr;
    }
    canActivate() {
        return this.accountService.currentUser$.pipe((0,rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__.map)((user) => {
            if ((user === null || user === void 0 ? void 0 : user.roles.includes('Admin')) || (user === null || user === void 0 ? void 0 : user.roles.includes('Moderator')))
                return true;
            this.toastr.error('You cannot enter this area');
            return false;
        }));
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService)); };
AdminGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1094:
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/account.service */ 7110);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 9344);




class AuthGuard {
    constructor(accountService, toastr) {
        this.accountService = accountService;
        this.toastr = toastr;
    }
    canActivate() {
        return this.accountService.currentUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(user => {
            if (user)
                return true;
            this.toastr.error('You shall not pass!');
            return false;
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8225:
/*!**********************************************************!*\
  !*** ./src/app/_guards/prevent-unsaved-changes.guard.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreventUnsavedChangesGuard": () => (/* binding */ PreventUnsavedChangesGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_confirm_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/confirm.service */ 8458);


class PreventUnsavedChangesGuard {
    constructor(confirmService) {
        this.confirmService = confirmService;
    }
    canDeactivate(component) {
        if (component.editForm.dirty) {
            return this.confirmService.confirm();
        }
        return true;
    }
}
PreventUnsavedChangesGuard.ɵfac = function PreventUnsavedChangesGuard_Factory(t) { return new (t || PreventUnsavedChangesGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_confirm_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmService)); };
PreventUnsavedChangesGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PreventUnsavedChangesGuard, factory: PreventUnsavedChangesGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8971:
/*!****************************************************!*\
  !*** ./src/app/_interceptors/error.interceptor.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 9344);





class ErrorInterceptor {
    constructor(router, toastr) {
        this.router = router;
        this.toastr = toastr;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)((error) => {
            if (error) {
                debugger;
                switch (error.status) {
                    case 400:
                        if (error.error.errors) {
                            const modalStateErrors = [];
                            for (const key in error.error.errors) {
                                if (error.error.errors[key]) {
                                    modalStateErrors.push(error.error.errors[key]);
                                }
                            }
                            throw modalStateErrors.flat();
                        }
                        else if (typeof error.error === 'object') {
                            this.toastr.error(error.statusText, error.status);
                        }
                        else {
                            this.toastr.error(error.error, error.status);
                        }
                        break;
                    case 401:
                        this.toastr.error(error.statusText, error.status);
                        break;
                    case 401:
                        this.router.navigateByUrl('/not-found');
                        break;
                    case 500:
                        const navigationExtras = {
                            state: { error: error.error },
                        };
                        this.router.navigateByUrl('/server-error', navigationExtras);
                        break;
                    default:
                        this.toastr.error('Something unexpected went wrong');
                        console.log(error);
                        break;
                }
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService)); };
ErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });


/***/ }),

/***/ 9707:
/*!**************************************************!*\
  !*** ./src/app/_interceptors/jwt.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/account.service */ 7110);



class JwtInterceptor {
    constructor(accountService) {
        this.accountService = accountService;
    }
    intercept(request, next) {
        let currentUser;
        this.accountService.currentUser$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1))
            .subscribe((user) => (currentUser = user));
        if (currentUser) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`,
                },
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService)); };
JwtInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });


/***/ }),

/***/ 2046:
/*!******************************************************!*\
  !*** ./src/app/_interceptors/loading.interceptor.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingInterceptor": () => (/* binding */ LoadingInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _busy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../busy.service */ 5534);



class LoadingInterceptor {
    constructor(busyService) {
        this.busyService = busyService;
    }
    intercept(request, next) {
        this.busyService.busy();
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => {
            this.busyService.idle();
        }));
    }
}
LoadingInterceptor.ɵfac = function LoadingInterceptor_Factory(t) { return new (t || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_busy_service__WEBPACK_IMPORTED_MODULE_0__.BusyService)); };
LoadingInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoadingInterceptor, factory: LoadingInterceptor.ɵfac });


/***/ }),

/***/ 2077:
/*!************************************************************!*\
  !*** ./src/app/_modals/call-modal/call-modal.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallModalComponent": () => (/* binding */ CallModalComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/modal */ 3301);
/* harmony import */ var src_app_services_call_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/call.service */ 2413);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);





const _c0 = ["localVideo"];
const _c1 = ["remoteVideo"];
class CallModalComponent {
    constructor(bsModalRef, callService) {
        this.bsModalRef = bsModalRef;
        this.callService = callService;
    }
    ngOnDestroy() {
        this.callService.closeMediaCall();
        this.callService.destroyPeer();
    }
    ngOnInit() {
        this.callService.localStream$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)((res) => !!res))
            .subscribe((stream) => (this.localVideo.nativeElement.srcObject = stream));
        this.callService.remoteStream$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)((res) => !!res))
            .subscribe((stream) => (this.remoteVideo.nativeElement.srcObject = stream));
    }
    endCall() {
        this.callService.closeMediaCall();
    }
}
CallModalComponent.ɵfac = function CallModalComponent_Factory(t) { return new (t || CallModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__.BsModalRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_call_service__WEBPACK_IMPORTED_MODULE_1__.CallService)); };
CallModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CallModalComponent, selectors: [["app-call-modal"]], viewQuery: function CallModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.localVideo = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.remoteVideo = _t.first);
    } }, decls: 12, vars: 4, consts: [[1, "container-fluid"], [1, "row", "p-2"], ["mat-raised-button", "", "color", "warn", 1, "m-2", 3, "disabled", "click"], [1, "row"], [1, "col", "text-center"], ["id", "video-wrapper"], ["id", "remote-video", "poster", "./assets/video-placeholder.gif", "autoplay", "", "playsinline", ""], ["remoteVideo", ""], ["id", "local-video", "autoplay", "", "playsinline", "", 3, "muted"], ["localVideo", ""]], template: function CallModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CallModalComponent_Template_button_click_2_listener() { return ctx.endCall(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " End Call ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "video", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "video", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, ctx.callService.isCallStarted$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("muted", true);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxsLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6491:
/*!******************************************************************!*\
  !*** ./src/app/_modals/confirm-modal/confirm-modal.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmModalComponent": () => (/* binding */ ConfirmModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/modal */ 3301);


class ConfirmModalComponent {
    constructor(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    ngOnInit() { }
    confirm() {
        this.result = true;
        this.bsModalRef.hide();
    }
    decline() {
        this.result = false;
        this.bsModalRef.hide();
    }
}
ConfirmModalComponent.ɵfac = function ConfirmModalComponent_Factory(t) { return new (t || ConfirmModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__.BsModalRef)); };
ConfirmModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConfirmModalComponent, selectors: [["app-confirm-modal"]], decls: 10, vars: 4, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function ConfirmModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmModalComponent_Template_button_click_6_listener() { return ctx.confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmModalComponent_Template_button_click_8_listener() { return ctx.decline(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.message, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.btnOkText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.btnCancelText, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8645:
/*!**************************************************************!*\
  !*** ./src/app/_modals/roles-modal/roles-modal.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesModalComponent": () => (/* binding */ RolesModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/modal */ 3301);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);





function RolesModalComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RolesModalComponent_div_9_Template_input_change_1_listener() { const role_r2 = ctx.$implicit; return role_r2.checked = !role_r2.checked; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", role_r2.checked)("disabled", role_r2.name === "Admin" && ctx_r1.user.username === "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](role_r2.name);
} }
class RolesModalComponent {
    constructor(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.updateSelectedRoles = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() { }
    updateRoles() {
        this.updateSelectedRoles.emit(this.roles);
        this.bsModalRef.hide();
    }
}
RolesModalComponent.ɵfac = function RolesModalComponent_Factory(t) { return new (t || RolesModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__.BsModalRef)); };
RolesModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RolesModalComponent, selectors: [["app-roles-modal"]], inputs: { updateSelectedRoles: "updateSelectedRoles" }, decls: 15, vars: 2, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["id", "rolesForm"], ["rolesForm", "ngForm"], ["class", "form-check", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-default", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "form-check"], ["type", "checkbox", "value", "role.name", 1, "form-check-input", 3, "checked", "disabled", "change"]], template: function RolesModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RolesModalComponent_Template_button_click_3_listener() { return ctx.bsModalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, RolesModalComponent_div_9_Template, 4, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RolesModalComponent_Template_button_click_11_listener() { return ctx.bsModalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RolesModalComponent_Template_button_click_13_listener() { return ctx.updateRoles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Edit roles for ", ctx.user.username, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.roles);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlcy1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4671:
/*!**************************************!*\
  !*** ./src/app/_model/pagination.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginatedResult": () => (/* binding */ PaginatedResult)
/* harmony export */ });
class PaginatedResult {
}


/***/ }),

/***/ 5440:
/*!********************************!*\
  !*** ./src/app/_model/user.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
}


/***/ }),

/***/ 9483:
/*!**************************************!*\
  !*** ./src/app/_model/userParams.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserParams": () => (/* binding */ UserParams)
/* harmony export */ });
class UserParams {
    constructor(user) {
        this.minAge = 18;
        this.maxAge = 99;
        this.pageNumber = 1;
        this.pageSize = 6;
        this.orderBy = 'lastActive';
        this.gender = (user === null || user === void 0 ? void 0 : user.gender) === 'female' ? 'male' : 'female';
    }
}


/***/ }),

/***/ 9821:
/*!*******************************************!*\
  !*** ./src/app/_modules/shared.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 743);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 5690);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @kolkov/ngx-gallery */ 7191);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 5593);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-file-upload */ 6321);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 2089);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 2214);
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/buttons */ 9756);
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-timeago */ 3060);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ 3301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);





















class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_8__.NgxGalleryModule,
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__.BsDropdownModule.forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrModule.forRoot({
                timeOut: 4000,
                positionClass: 'toast-bottom-right',
            }),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsModule.forRoot(),
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerModule,
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__.FileUploadModule,
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_2__.BsDatepickerModule.forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationModule.forRoot(),
            ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__.ButtonsModule.forRoot(),
            ngx_timeago__WEBPACK_IMPORTED_MODULE_12__.TimeagoModule.forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__.ModalModule.forRoot(),
        ], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__.BsDropdownModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrModule,
        ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsModule,
        _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_8__.NgxGalleryModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerModule,
        ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__.FileUploadModule,
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_2__.BsDatepickerModule,
        ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationModule,
        ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__.ButtonsModule,
        ngx_timeago__WEBPACK_IMPORTED_MODULE_12__.TimeagoModule,
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__.ModalModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_8__.NgxGalleryModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__.BsDropdownModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerModule,
        ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__.FileUploadModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_2__.BsDatepickerModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationModule, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__.ButtonsModule, ngx_timeago__WEBPACK_IMPORTED_MODULE_12__.TimeagoModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__.ModalModule], exports: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__.BsDropdownModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrModule,
        ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsModule,
        _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_8__.NgxGalleryModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerModule,
        ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__.FileUploadModule,
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_2__.BsDatepickerModule,
        ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationModule,
        ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__.ButtonsModule,
        ngx_timeago__WEBPACK_IMPORTED_MODULE_12__.TimeagoModule,
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__.ModalModule] }); })();


/***/ }),

/***/ 9559:
/*!************************************!*\
  !*** ./src/app/_pipe/cast.pipe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CastPipe": () => (/* binding */ CastPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class CastPipe {
    transform(value, args) {
        return value;
    }
}
CastPipe.ɵfac = function CastPipe_Factory(t) { return new (t || CastPipe)(); };
CastPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "cast", type: CastPipe, pure: true });


/***/ }),

/***/ 4152:
/*!********************************************************!*\
  !*** ./src/app/_resolvers/member-detailed.resolver.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberDetailResolver": () => (/* binding */ MemberDetailResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_members_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/members.service */ 9516);


class MemberDetailResolver {
    constructor(memberService) {
        this.memberService = memberService;
    }
    resolve(route) {
        return this.memberService.getMember(route.paramMap.get('username'));
    }
}
MemberDetailResolver.ɵfac = function MemberDetailResolver_Factory(t) { return new (t || MemberDetailResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_members_service__WEBPACK_IMPORTED_MODULE_0__.MembersService)); };
MemberDetailResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MemberDetailResolver, factory: MemberDetailResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7110:
/*!**********************************************!*\
  !*** ./src/app/_services/account.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8229);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _presence_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presence.service */ 3238);






class AccountService {
    constructor(http, presenceService) {
        this.http = http;
        this.presenceService = presenceService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.currentUserSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
        this.currentUser$ = this.currentUserSource.asObservable();
    }
    login(model) {
        return this.http.post(this.baseUrl + 'account/login', model).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
            const user = response;
            if (user) {
                this.setCurrentUser(user);
                this.presenceService.createHubConnection(user);
            }
        }));
    }
    register(model) {
        return this.http.post(this.baseUrl + 'account/register', model).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((user) => {
            if (user) {
                this.setCurrentUser(user);
                this.presenceService.createHubConnection(user);
            }
            return user;
        }));
    }
    setCurrentUser(user) {
        user.roles = [];
        const roles = this.getDecodedToken(user.token).role;
        Array.isArray(roles) ? (user.roles = roles) : user.roles.push(roles);
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSource.next(user);
    }
    logout() {
        localStorage.removeItem('user');
        this.currentUserSource.next(null);
        this.presenceService.stopHubConnection();
    }
    getDecodedToken(token) {
        return JSON.parse(atob(token.split('.')[1]));
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_presence_service__WEBPACK_IMPORTED_MODULE_1__.PresenceService)); };
AccountService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2517:
/*!********************************************!*\
  !*** ./src/app/_services/admin.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminService": () => (/* binding */ AdminService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);



class AdminService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    getUsersWithRoles() {
        return this.http.get(this.baseUrl + 'admin/users-with-role');
    }
    updateUserRoles(username, roles) {
        return this.http.post(this.baseUrl + 'admin/edit-roles/' + username + '?roles=' + roles, {});
    }
}
AdminService.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
AdminService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2413:
/*!*******************************************!*\
  !*** ./src/app/_services/call.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallService": () => (/* binding */ CallService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var peerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! peerjs */ 805);
/* harmony import */ var peerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(peerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 9344);





class CallService {
    constructor(toastrService) {
        this.toastrService = toastrService;
        this.localStreamBs = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.localStream$ = this.localStreamBs.asObservable();
        this.remoteStreamBs = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.remoteStream$ = this.remoteStreamBs.asObservable();
        this.isCallStartedBs = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.isCallStarted$ = this.isCallStartedBs.asObservable();
    }
    initPeer() {
        let id = this.generateUniqueId();
        if (!this.peer || this.peer.disconnected) {
            const peerJsOptions = {
                debug: 3,
                config: {
                    iceServers: [
                        {
                            urls: [
                                'stun:stun1.l.google.com:19302',
                                'stun:stun2.l.google.com:19302',
                            ],
                        },
                    ],
                },
            };
            try {
                this.peer = new peerjs__WEBPACK_IMPORTED_MODULE_0__(id, peerJsOptions);
                return id;
            }
            catch (error) {
                console.error(error);
                return '';
            }
        }
        return id;
    }
    establishMediaCall(remotePeerId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const stream = yield navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: true,
                });
                const connection = this.peer.connect(remotePeerId);
                connection.on('error', (error) => {
                    console.error(error);
                    this.toastrService.error(error);
                });
                this.mediaCall = this.peer.call(remotePeerId, stream);
                if (!this.mediaCall) {
                    let errorMessage = 'Unable to connect to remote peer';
                    this.toastrService.error(errorMessage);
                    throw new Error(errorMessage);
                }
                this.localStreamBs.next(stream);
                this.isCallStartedBs.next(true);
                this.mediaCall.on('stream', (remoteStream) => this.remoteStreamBs.next(remoteStream));
                this.mediaCall.on('error', (err) => {
                    console.error(err);
                    this.toastrService.error(err);
                    this.isCallStartedBs.next(false);
                });
                this.mediaCall.on('close', () => this.onCallClose());
            }
            catch (error) {
                console.error(error);
                this.isCallStartedBs.next(false);
            }
        });
    }
    enableCallAnswer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const stream = yield navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: true,
                });
                this.localStreamBs.next(stream);
                this.peer.on('call', (call) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                    this.mediaCall = call;
                    this.isCallStartedBs.next(true);
                    this.mediaCall.answer(stream);
                    this.mediaCall.on('stream', (remoteStream) => {
                        this.remoteStreamBs.next(remoteStream);
                    });
                    this.mediaCall.on('error', (err) => {
                        this.toastrService.error(err);
                        this.isCallStartedBs.next(false);
                        console.error(err);
                    });
                    this.mediaCall.on('close', () => this.onCallClose());
                }));
            }
            catch (ex) {
                console.error(ex);
                this.toastrService.error(ex);
                this.isCallStartedBs.next(false);
            }
        });
    }
    onCallClose() {
        this.remoteStreamBs.value
            .getTracks()
            .forEach((track) => {
            track.stop();
        });
        this.remoteStreamBs.value
            .getTracks()
            .forEach((track) => {
            track.stop();
        });
        this.toastrService.info('Call Ended');
    }
    closeMediaCall() {
        var _a;
        (_a = this.mediaCall) === null || _a === void 0 ? void 0 : _a.close();
        if (!this.mediaCall) {
            this.onCallClose();
        }
        this.isCallStartedBs.next(false);
    }
    destroyPeer() {
        var _a, _b, _c;
        (_a = this.mediaCall) === null || _a === void 0 ? void 0 : _a.close();
        (_b = this.peer) === null || _b === void 0 ? void 0 : _b.disconnect();
        (_c = this.peer) === null || _c === void 0 ? void 0 : _c.destroy();
    }
    generateUniqueId() {
        return (Math.random().toString(36) + '0000000000000000000').substr(2, 16);
    }
}
CallService.ɵfac = function CallService_Factory(t) { return new (t || CallService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService)); };
CallService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CallService, factory: CallService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8458:
/*!**********************************************!*\
  !*** ./src/app/_services/confirm.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmService": () => (/* binding */ ConfirmService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_modals/confirm-modal/confirm-modal.component */ 6491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ 3301);




class ConfirmService {
    constructor(modalService) {
        this.modalService = modalService;
    }
    confirm(title = 'Confirmation', message = 'Are you sure you want to do this?', btnOkText = 'Ok', btnCancelText = 'Cancel') {
        const config = {
            initialState: {
                title,
                message,
                btnOkText,
                btnCancelText,
            },
        };
        this.bsModalRef = this.modalService.show(_modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmModalComponent, config);
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(this.getResult());
    }
    getResult() {
        return (observer) => {
            const subscription = this.bsModalRef.onHidden.subscribe(() => {
                observer.next(this.bsModalRef.content.result);
                observer.complete();
            });
            return {
                unsubscribe() {
                    subscription.unsubscribe();
                },
            };
        };
    }
}
ConfirmService.ɵfac = function ConfirmService_Factory(t) { return new (t || ConfirmService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__.BsModalService)); };
ConfirmService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ConfirmService, factory: ConfirmService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9516:
/*!**********************************************!*\
  !*** ./src/app/_services/members.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembersService": () => (/* binding */ MembersService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _model_userParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_model/userParams */ 9483);
/* harmony import */ var _paginationHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paginationHelper */ 4253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.service */ 7110);








class MembersService {
    constructor(httpClient, accountService) {
        this.httpClient = httpClient;
        this.accountService = accountService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.members = [];
        this.memberCache = new Map();
        this.accountService.currentUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe((user) => {
            this.user = user;
            this.userParams = new _model_userParams__WEBPACK_IMPORTED_MODULE_1__.UserParams(user);
        });
    }
    getUserParams() {
        return this.userParams;
    }
    setUserParams(userParam) {
        this.userParams = userParam;
    }
    resetFilters() {
        this.userParams = new _model_userParams__WEBPACK_IMPORTED_MODULE_1__.UserParams(this.user);
        return this.userParams;
    }
    getMembers(userParams) {
        var response = this.memberCache.get(Object.values(userParams).join('-'));
        if (response)
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(response);
        let params = (0,_paginationHelper__WEBPACK_IMPORTED_MODULE_2__.getPaginationHeaders)(userParams.pageNumber, userParams.pageSize);
        params = params.append('minAge', userParams.minAge.toString());
        params = params.append('maxAge', userParams.maxAge.toString());
        params = params.append('gender', userParams.gender);
        params = params.append('orderBy', userParams.orderBy);
        return (0,_paginationHelper__WEBPACK_IMPORTED_MODULE_2__.getPaginatedResult)(this.baseUrl + 'users', params, this.httpClient).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            this.memberCache.set(Object.values(userParams).join('-'), response);
            return response;
        }));
    }
    getMember(username) {
        //"find" returns undefined if no value matches predicate
        const member = [...this.memberCache.values()]
            .reduce((arr, elem) => arr.concat(elem.result), [])
            .find((member) => member.username === username);
        if (member)
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(member);
        return this.httpClient.get(this.baseUrl + 'users/' + username);
    }
    updateMember(member) {
        return this.httpClient.put(this.baseUrl + 'users', member).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => {
            const index = this.members.indexOf(member);
            this.members[index] = member;
        }));
    }
    setMainPhoto(photoId) {
        return this.httpClient.put(this.baseUrl + 'users/set-main-photo/' + photoId, {});
    }
    deletePhoto(photoId) {
        return this.httpClient.delete(this.baseUrl + 'users/delete-photo/' + photoId);
    }
    addLikes(username) {
        return this.httpClient.post(this.baseUrl + 'likes/' + username, {});
    }
    getLikes(predicate, pageNumber, pageSize) {
        let params = (0,_paginationHelper__WEBPACK_IMPORTED_MODULE_2__.getPaginationHeaders)(pageNumber, pageSize);
        params = params.append('predicate', predicate);
        return (0,_paginationHelper__WEBPACK_IMPORTED_MODULE_2__.getPaginatedResult)(this.baseUrl + 'likes', params, this.httpClient);
    }
}
MembersService.ɵfac = function MembersService_Factory(t) { return new (t || MembersService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService)); };
MembersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: MembersService, factory: MembersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6252:
/*!**********************************************!*\
  !*** ./src/app/_services/message.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageService": () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/signalr */ 3882);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _paginationHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paginationHelper */ 4253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _busy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../busy.service */ 5534);









class MessageService {
    constructor(http, busyService) {
        this.http = http;
        this.busyService = busyService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
        this.hubUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.hubUrl;
        this.messageThreadSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.messageThread$ = this.messageThreadSource.asObservable();
    }
    createHubConnection(user, otherUsername) {
        this.busyService.busy();
        this.hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.HubConnectionBuilder()
            .withUrl(this.hubUrl + 'message?user=' + otherUsername, {
            accessTokenFactory: () => user.token,
        })
            .withAutomaticReconnect()
            .build();
        this.hubConnection
            .start()
            .catch((error) => console.log(error))
            .finally(() => this.busyService.idle());
        this.hubConnection.on('ReceiveMessageThread', (messages) => {
            this.messageThreadSource.next(messages);
        });
        this.hubConnection.on('NewMessage', (message) => {
            this.messageThread$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe((messages) => {
                this.messageThreadSource.next([...messages, message]);
            });
        });
        this.hubConnection.on('UpdatedGroup', (group) => {
            if (group.connections.some((x) => x.username === otherUsername)) {
                this.messageThread$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe((messages) => {
                    messages.forEach((message) => {
                        if (!message.dateRead) {
                            message.dateRead = new Date(Date.now());
                        }
                    });
                    this.messageThreadSource.next([...messages]);
                });
            }
        });
    }
    stopHubConnection() {
        if (this.hubConnection) {
            this.messageThreadSource.next([]);
            this.hubConnection.stop().catch((error) => console.log(error));
        }
    }
    getMessages(pageNumber, pageSize, container) {
        let params = (0,_paginationHelper__WEBPACK_IMPORTED_MODULE_2__.getPaginationHeaders)(pageNumber, pageSize);
        params = params.append('Container', container);
        return (0,_paginationHelper__WEBPACK_IMPORTED_MODULE_2__.getPaginatedResult)(this.baseUrl + 'messages', params, this.http);
    }
    getMessageThread(username) {
        return this.http.get(this.baseUrl + 'Messages/thread/' + username);
    }
    sendMessage(username, content) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            return this.hubConnection
                .invoke('SendMessage', {
                recipientUsername: username,
                content,
            })
                .catch((error) => console.log(error));
        });
    }
    deleteMessage(id) {
        return this.http.delete(this.baseUrl + 'messages/' + id);
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_busy_service__WEBPACK_IMPORTED_MODULE_3__.BusyService)); };
MessageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4253:
/*!***********************************************!*\
  !*** ./src/app/_services/paginationHelper.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPaginatedResult": () => (/* binding */ getPaginatedResult),
/* harmony export */   "getPaginationHeaders": () => (/* binding */ getPaginationHeaders)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _model_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_model/pagination */ 4671);



function getPaginatedResult(url, params, http) {
    const paginatedResults = new _model_pagination__WEBPACK_IMPORTED_MODULE_0__.PaginatedResult();
    return http.get(url, { observe: 'response', params }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
        paginatedResults.result = response.body;
        if (response.headers.get('Pagination') !== null) {
            paginatedResults.pagination = JSON.parse(response.headers.get('Pagination') || '');
        }
        return paginatedResults;
    }));
}
function getPaginationHeaders(pageNumber, pageSize) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    return params;
}


/***/ }),

/***/ 3238:
/*!***********************************************!*\
  !*** ./src/app/_services/presence.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresenceService": () => (/* binding */ PresenceService)
/* harmony export */ });
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/signalr */ 3882);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);







class PresenceService {
    constructor(toastr, router) {
        this.toastr = toastr;
        this.router = router;
        this.hubUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.hubUrl;
        this.onlineUsersSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.onlineUsers$ = this.onlineUsersSource.asObservable();
    }
    createHubConnection(user) {
        this.hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_0__.HubConnectionBuilder()
            .withUrl(this.hubUrl + 'presence', {
            accessTokenFactory: () => user.token,
        })
            .withAutomaticReconnect()
            .build();
        this.hubConnection.start().catch((error) => console.log(error));
        this.hubConnection.on('UserIsOnline', (username) => {
            this.onlineUsers$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe((usernames) => {
                this.onlineUsersSource.next([...usernames, username]);
            });
        });
        this.hubConnection.on('UserIsOffline', (username) => {
            this.onlineUsers$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe((usernames) => {
                this.onlineUsersSource.next([
                    ...usernames.filter((x) => x !== username),
                ]);
            });
        });
        this.hubConnection.on('GetOnlineUsers', (usernames) => {
            this.onlineUsersSource.next(usernames);
        });
        this.hubConnection.on('NewMessageReceived', ({ username, knownAs }) => {
            this.toastr
                .info(knownAs + ' has sent you a new message')
                .onTap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))
                .subscribe(() => this.router.navigateByUrl('/members/' + username + '?tab=3'));
        });
    }
    stopHubConnection() {
        this.hubConnection.stop().catch((error) => console.log(error));
    }
}
PresenceService.ɵfac = function PresenceService_Factory(t) { return new (t || PresenceService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
PresenceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PresenceService, factory: PresenceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4752:
/*!************************************************************!*\
  !*** ./src/app/admin/admin-panel/admin-panel.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPanelComponent": () => (/* binding */ AdminPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 5690);
/* harmony import */ var _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_directives/has-role.directive */ 397);
/* harmony import */ var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-management/user-management.component */ 8975);
/* harmony import */ var _photo_management_photo_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../photo-management/photo-management.component */ 5036);





function AdminPanelComponent_tab_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tab", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-user-management");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminPanelComponent_tab_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tab", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-photo-management");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["Admin"]; };
const _c1 = function () { return ["Admin", "Moderator"]; };
class AdminPanelComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminPanelComponent.ɵfac = function AdminPanelComponent_Factory(t) { return new (t || AdminPanelComponent)(); };
AdminPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AdminPanelComponent, selectors: [["app-admin-panel"]], decls: 6, vars: 4, consts: [[1, "tab-panel"], [1, "member-tabset"], ["heading", "User management", 4, "appHasRole"], ["heading", "Photo management", 4, "appHasRole"], ["heading", "User management"], [1, "container"], ["heading", "Photo management"]], template: function AdminPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Admin Panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "tabset", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AdminPanelComponent_tab_4_Template, 3, 0, "tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, AdminPanelComponent_tab_5_Template, 3, 0, "tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("appHasRole", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("appHasRole", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__.TabsetComponent, _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_1__.HasRoleDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_0__.TabDirective, _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_2__.UserManagementComponent, _photo_management_photo_management_component__WEBPACK_IMPORTED_MODULE_3__.PhotoManagementComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1wYW5lbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5036:
/*!**********************************************************************!*\
  !*** ./src/app/admin/photo-management/photo-management.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoManagementComponent": () => (/* binding */ PhotoManagementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class PhotoManagementComponent {
    constructor() { }
    ngOnInit() {
    }
}
PhotoManagementComponent.ɵfac = function PhotoManagementComponent_Factory(t) { return new (t || PhotoManagementComponent)(); };
PhotoManagementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotoManagementComponent, selectors: [["app-photo-management"]], decls: 2, vars: 0, template: function PhotoManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "photo-management works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaG90by1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8975:
/*!********************************************************************!*\
  !*** ./src/app/admin/user-management/user-management.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementComponent": () => (/* binding */ UserManagementComponent)
/* harmony export */ });
/* harmony import */ var src_app_modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_modals/roles-modal/roles-modal.component */ 8645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/admin.service */ 2517);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ 3301);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);





function UserManagementComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserManagementComponent_tr_8_Template_button_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const user_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.openRolesModal(user_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Edit role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r1 == null ? null : user_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r1 == null ? null : user_r1.roles);
} }
class UserManagementComponent {
    constructor(adminService, modalService) {
        this.adminService = adminService;
        this.modalService = modalService;
    }
    ngOnInit() {
        this.getUsersWithRoles();
    }
    getUsersWithRoles() {
        this.adminService.getUsersWithRoles().subscribe((users) => {
            this.users = users;
        });
    }
    openRolesModal(user) {
        const config = {
            class: 'modal-dialog-centered',
            initialState: {
                user,
                roles: this.getRolesArray(user),
            },
        };
        this.bsModalRef = this.modalService.show(src_app_modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_0__.RolesModalComponent, config);
        this.bsModalRef.content.updateSelectedRoles.subscribe((values) => {
            const rolesToUpdate = {
                roles: [
                    ...values
                        .filter((el) => el.checked === true)
                        .map((el) => el.name),
                ],
            };
            if (rolesToUpdate) {
                this.adminService
                    .updateUserRoles(user.username, rolesToUpdate.roles)
                    .subscribe(() => {
                    user.roles = [...rolesToUpdate.roles];
                });
            }
        });
    }
    getRolesArray(user) {
        const roles = [];
        const userRoles = user.roles;
        const availableRoles = [
            { name: 'Admin', value: 'Admin' },
            { name: 'Moderator', value: 'Moderator' },
            { name: 'Member', value: 'Member' },
        ];
        availableRoles.forEach((role) => {
            let isMatch = false;
            for (const userRole of userRoles) {
                if (role.name === userRole) {
                    isMatch = true;
                    role.checked = true;
                    roles.push(role);
                    break;
                }
            }
            if (!isMatch) {
                role.checked = false;
                roles.push(role);
            }
        });
        return roles;
    }
}
UserManagementComponent.ɵfac = function UserManagementComponent_Factory(t) { return new (t || UserManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__.BsModalService)); };
UserManagementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UserManagementComponent, selectors: [["app-user-management"]], decls: 9, vars: 1, consts: [[1, "row"], [1, "table"], [2, "width", "30%"], [2, "width", "40%"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-info", 3, "click"]], template: function UserManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Active roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, UserManagementComponent_tr_8_Template, 8, 2, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/admin-panel/admin-panel.component */ 4752);
/* harmony import */ var _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors/not-found/not-found.component */ 9953);
/* harmony import */ var _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors/server-error/server-error.component */ 2);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lists/lists.component */ 6558);
/* harmony import */ var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./members/member-detail/member-detail.component */ 6874);
/* harmony import */ var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./members/member-edit/member-edit.component */ 7259);
/* harmony import */ var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./members/member-list/member-list.component */ 1147);
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages/messages.component */ 5298);
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_guards/admin.guard */ 6299);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_guards/auth.guard */ 1094);
/* harmony import */ var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_guards/prevent-unsaved-changes.guard */ 8225);
/* harmony import */ var _resolvers_member_detailed_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_resolvers/member-detailed.resolver */ 4152);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7716);
















const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__.AuthGuard],
        children: [
            {
                path: 'members',
                component: _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_7__.MemberListComponent,
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__.AuthGuard],
            },
            {
                path: 'members/:username',
                component: _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_5__.MemberDetailComponent,
                resolve: { member: _resolvers_member_detailed_resolver__WEBPACK_IMPORTED_MODULE_12__.MemberDetailResolver },
            },
            {
                path: 'member/edit',
                component: _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_6__.MemberEditComponent,
                canDeactivate: [_guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_11__.PreventUnsavedChangesGuard],
            },
            { path: 'lists', component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_4__.ListsComponent },
            { path: 'messages', component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__.MessagesComponent },
            {
                path: 'admin',
                component: _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_0__.AdminPanelComponent,
                canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_9__.AdminGuard],
            },
        ],
    },
    { path: 'not-found', component: _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent },
    { path: 'server-error', component: _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_2__.ServerErrorComponent },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_services/account.service */ 7110);
/* harmony import */ var _services_presence_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services/presence.service */ 3238);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 5593);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/nav.component */ 5375);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);






class AppComponent {
    constructor(accountService, presenceService) {
        this.accountService = accountService;
        this.presenceService = presenceService;
        this.title = 'Dating App';
    }
    ngOnInit() {
        this.setCurrentUsers();
    }
    setCurrentUsers() {
        const u = localStorage.getItem('user');
        const user = u != null ? JSON.parse(u) : null;
        if (user) {
            this.accountService.setCurrentUser(user);
            this.presenceService.createHubConnection(user);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_presence_service__WEBPACK_IMPORTED_MODULE_1__.PresenceService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "container", 2, "margin-top", "100px"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerComponent, _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/nav.component */ 5375);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ 9087);
/* harmony import */ var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./members/member-list/member-list.component */ 1147);
/* harmony import */ var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./members/member-detail/member-detail.component */ 6874);
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lists/lists.component */ 6558);
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages/messages.component */ 5298);
/* harmony import */ var _modules_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_modules/shared.module */ 9821);
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_interceptors/error.interceptor */ 8971);
/* harmony import */ var _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./members/member-card/member-card.component */ 6967);
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_interceptors/jwt.interceptor */ 9707);
/* harmony import */ var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./members/member-edit/member-edit.component */ 7259);
/* harmony import */ var _interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_interceptors/loading.interceptor */ 2046);
/* harmony import */ var _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./members/photo-editor/photo-editor.component */ 247);
/* harmony import */ var _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./errors/server-error/server-error.component */ 2);
/* harmony import */ var _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./errors/not-found/not-found.component */ 9953);
/* harmony import */ var _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_forms/text-input/text-input.component */ 1201);
/* harmony import */ var _pipe_cast_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_pipe/cast.pipe */ 9559);
/* harmony import */ var _forms_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_forms/date-input/date-input.component */ 1700);
/* harmony import */ var _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./members/member-messages/member-messages.component */ 7197);
/* harmony import */ var _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/admin-panel/admin-panel.component */ 4752);
/* harmony import */ var _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_directives/has-role.directive */ 397);
/* harmony import */ var _admin_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/user-management/user-management.component */ 8975);
/* harmony import */ var _admin_photo_management_photo_management_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/photo-management/photo-management.component */ 5036);
/* harmony import */ var _modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_modals/roles-modal/roles-modal.component */ 8645);
/* harmony import */ var _modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_modals/confirm-modal/confirm-modal.component */ 6491);
/* harmony import */ var _modals_call_modal_call_modal_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_modals/call-modal/call-modal.component */ 2077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 7716);


































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HTTP_INTERCEPTORS, useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_10__.ErrorInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HTTP_INTERCEPTORS, useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__.JwtInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HTTP_INTERCEPTORS, useClass: _interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_14__.LoadingInterceptor, multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule,
            _modules_shared_module__WEBPACK_IMPORTED_MODULE_9__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        _register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent,
        _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_5__.MemberListComponent,
        _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_6__.MemberDetailComponent,
        _lists_lists_component__WEBPACK_IMPORTED_MODULE_7__.ListsComponent,
        _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__.MessagesComponent,
        _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_11__.MemberCardComponent,
        _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_13__.MemberEditComponent,
        _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_15__.PhotoEditorComponent,
        _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_16__.ServerErrorComponent,
        _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__.NotFoundComponent,
        _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_18__.TextInputComponent,
        _pipe_cast_pipe__WEBPACK_IMPORTED_MODULE_19__.CastPipe,
        _forms_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_20__.DateInputComponent,
        _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_21__.MemberMessagesComponent,
        _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_22__.AdminPanelComponent,
        _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_23__.HasRoleDirective,
        _admin_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_24__.UserManagementComponent,
        _admin_photo_management_photo_management_component__WEBPACK_IMPORTED_MODULE_25__.PhotoManagementComponent,
        _modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_26__.RolesModalComponent,
        _modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_27__.ConfirmModalComponent,
        _modals_call_modal_call_modal_component__WEBPACK_IMPORTED_MODULE_28__.CallModalComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule,
        _modules_shared_module__WEBPACK_IMPORTED_MODULE_9__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 5534:
/*!*********************************!*\
  !*** ./src/app/busy.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusyService": () => (/* binding */ BusyService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ 5593);


class BusyService {
    constructor(spinnerService) {
        this.spinnerService = spinnerService;
        this.busyRequestCount = 0;
    }
    busy() {
        this.busyRequestCount++;
        this.spinnerService.show(undefined, {
            type: 'line-scale-party',
            bdColor: 'rgba(255,255,255,0)',
            color: '#333333',
        });
    }
    idle() {
        this.busyRequestCount--;
        if (this.busyRequestCount <= 0) {
            this.busyRequestCount = 0;
            this.spinnerService.hide();
        }
    }
}
BusyService.ɵfac = function BusyService_Factory(t) { return new (t || BusyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__.NgxSpinnerService)); };
BusyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BusyService, factory: BusyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9953:
/*!*********************************************************!*\
  !*** ./src/app/errors/not-found/not-found.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 5, vars: 0, consts: [[1, "container"], ["routerLink", "/", 1, "btn", "btn-info", "btn-lg"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Return to home page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2:
/*!***************************************************************!*\
  !*** ./src/app/errors/server-error/server-error.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerErrorComponent": () => (/* binding */ ServerErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



function ServerErrorComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Note: If you are seeing this then Angular is probably not to blame ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "What to do next?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Open the chrome dev tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Inspect the network tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Check the failing request");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Examine the request URL - make sure it is correct");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Reproduce the error in Postman - if we see the same response, then the issue is not with Angular ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Following is the stack trace - this is where your investigation should start! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Error: ", ctx_r0.error.message, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.error.details);
} }
class ServerErrorComponent {
    constructor(router) {
        var _a, _b;
        this.router = router;
        const navigation = this.router.getCurrentNavigation();
        console.log(navigation);
        this.error = (_b = (_a = navigation === null || navigation === void 0 ? void 0 : navigation.extras) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.error;
    }
    ngOnInit() { }
}
ServerErrorComponent.ɵfac = function ServerErrorComponent_Factory(t) { return new (t || ServerErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
ServerErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServerErrorComponent, selectors: [["app-server-error"]], decls: 3, vars: 1, consts: [[4, "ngIf"], [1, "text-danger"], [1, "font-weight-bold"], [1, "mt-5", 2, "background-color", "whitesmoke"]], template: function ServerErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Internal server error - refreshing the page will make the error disappear!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ServerErrorComponent_ng_container_2_Template, 22, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2ZXItZXJyb3IuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../register/register.component */ 9087);




function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Find you finds");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Come on in to find your friends... all you need to do is sign up! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.registerToggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Learn more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-register", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cancelRegistration", function HomeComponent_div_2_Template_app_register_cancelRegistration_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.cancelRegisterMode($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(http) {
        this.http = http;
        this.registerMode = false;
    }
    ngOnInit() {
    }
    registerToggle() {
        this.registerMode = !this.registerMode;
    }
    cancelRegisterMode(event) {
        this.registerMode = event;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 2, consts: [[1, "container", "mt-5"], ["style", "text-align: center", 4, "ngIf"], ["class", "container", 4, "ngIf"], [2, "text-align", "center"], [1, "lead"], [1, "text-center"], [1, "btn", "btn-primary", "btn-lg", "mr-2", 3, "click"], [1, "btn", "btn-info", "btn-lg"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-4"], [3, "cancelRegistration"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 10, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.registerMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _register_register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6558:
/*!******************************************!*\
  !*** ./src/app/lists/lists.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListsComponent": () => (/* binding */ ListsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_members_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/members.service */ 9516);
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/buttons */ 9756);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../members/member-card/member-card.component */ 6967);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 2214);







function ListsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-member-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("member", member_r2);
} }
function ListsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "pagination", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ListsComponent_div_12_Template_pagination_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.pagination.currentPage = $event; })("pageChanged", function ListsComponent_div_12_Template_pagination_pageChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("boundaryLinks", true)("totalItems", ctx_r1.pagination.totalItems)("itemsPerPage", ctx_r1.pagination.itemsPerPage)("ngModel", ctx_r1.pagination.currentPage);
} }
class ListsComponent {
    constructor(memberService) {
        this.memberService = memberService;
        this.predicate = 'liked';
        this.pageNumber = 1;
        this.pageSize = 5;
    }
    ngOnInit() {
        this.loadLikes();
    }
    loadLikes() {
        this.memberService
            .getLikes(this.predicate, this.pageNumber, this.pageSize)
            .subscribe((response) => {
            this.members = response.result;
            this.pagination = response.pagination;
        });
    }
    pageChanged(event) {
        this.pageNumber = event.page;
        this.loadLikes();
    }
}
ListsComponent.ɵfac = function ListsComponent_Factory(t) { return new (t || ListsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_members_service__WEBPACK_IMPORTED_MODULE_0__.MembersService)); };
ListsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ListsComponent, selectors: [["app-lists"]], decls: 13, vars: 5, consts: [[1, "text-center", "mt-3"], [1, "container", "mt-3"], [1, "row"], ["name", "predicate", 1, "btn-group"], ["btnRadio", "liked", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], ["btnRadio", "likedBy", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], [1, "row", "mt-3"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [3, "member"], [1, "d-flex", "justify-content-center"], ["previousText", "\u2039", "nextText", "\u203A", "firstText", "\u00AB", "lastText", "\u00BB", 3, "boundaryLinks", "totalItems", "itemsPerPage", "ngModel", "ngModelChange", "pageChanged"]], template: function ListsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ListsComponent_Template_button_ngModelChange_6_listener($event) { return ctx.predicate = $event; })("click", function ListsComponent_Template_button_click_6_listener() { return ctx.loadLikes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Members i like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ListsComponent_Template_button_ngModelChange_8_listener($event) { return ctx.predicate = $event; })("click", function ListsComponent_Template_button_click_8_listener() { return ctx.loadLikes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Members who like me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ListsComponent_div_11_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ListsComponent_div_12_Template, 2, 4, "div", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.predicate === "liked" ? "Member I like" : "Member who like me");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.predicate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.predicate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.members);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pagination);
    } }, directives: [ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_1__.ButtonRadioDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_2__.MemberCardComponent, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6967:
/*!**************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberCardComponent": () => (/* binding */ MemberCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/members.service */ 9516);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/presence.service */ 3238);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-timeago */ 3060);







function MemberCardComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MemberCardComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "timeago");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx_r1.member.lastActive), "");
} }
const _c0 = function () { return { tab: 3 }; };
class MemberCardComponent {
    constructor(memberService, toastr, presence) {
        this.memberService = memberService;
        this.toastr = toastr;
        this.presence = presence;
    }
    ngOnInit() { }
    addLike(member) {
        this.memberService.addLikes(member.username).subscribe(() => {
            this.toastr.success('You have liked ' + member.knownAs);
        });
    }
}
MemberCardComponent.ɵfac = function MemberCardComponent_Factory(t) { return new (t || MemberCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_members_service__WEBPACK_IMPORTED_MODULE_0__.MembersService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_1__.PresenceService)); };
MemberCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MemberCardComponent, selectors: [["app-member-card"]], inputs: { member: "member" }, decls: 26, vars: 16, consts: [[1, "container", "d-flex", "justify-content-center"], [1, "card", "p-3", "mt-3"], [1, "first"], [1, "time", "d-flex", "flex-row", "align-items-center", "justify-content-between", "mt-3"], [1, "second", "d-flex", "flex-row", "mt-2"], [1, "image", "mr-3"], ["width", "60", 1, "rounded-circle", 3, "src", "alt"], [1, ""], [1, "d-flex", "flex-row", "mb-1"], [3, "routerLink"], [1, "d-flex", "align-items-center"], ["class", "is-online ml-1", 4, "ngIf"], ["class", "hour ml-1", 4, "ngIf"], [1, "btn", "btn-outline-dark", "btn-sm", "px-2", 3, "click"], [1, "fa", "fa-heart"], [1, "btn", "btn-outline-dark", "btn-sm", 3, "routerLink"], [1, "btn", "btn-outline-dark", "btn-sm", 3, "routerLink", "queryParams"], [1, "fa", "fa-comment-o"], [1, "line-color"], [1, "is-online", "ml-1"], [1, "fa", "fa-user", "mr-2"], [1, "hour", "ml-1"], [1, "fa", "fa-clock-o", "clock"]], template: function MemberCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, MemberCardComponent_span_12_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, MemberCardComponent_span_14_Template, 4, 3, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MemberCardComponent_Template_button_click_17_listener() { return ctx.addLike(ctx.member); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " See Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "hr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_4_0;
        let tmp_5_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.member.photoUrl || "./assets/default-avatar.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", ctx.member.knownAs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/members/", ctx.member.username, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("@", ctx.member.username, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 11, ctx.presence.onlineUsers$)) == null ? null : tmp_4_0.includes(ctx.member.username));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 13, ctx.presence.onlineUsers$)) == null ? null : tmp_5_0.includes(ctx.member.username)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/members/", ctx.member.username, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/members/", ctx.member.username, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.member.knownAs, ", ", ctx.member.age, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, ngx_timeago__WEBPACK_IMPORTED_MODULE_6__.TimeagoPipe], styles: [".card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.2, 1.2);\n  transition-duration: 500ms;\n  transition-timing-function: \"easy-out\";\n  opacity: 0.7;\n}\n\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1, 1);\n  transition-duration: 500ms;\n  transition-timing-function: \"easy-out\";\n}\n\n.card-img-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n\n.member-icons[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -30%;\n  left: 0;\n  right: 0;\n  margin-right: auto;\n  margin-left: auto;\n  opacity: 0;\n}\n\n.card-img-wrapper[_ngcontent-%COMP%]:hover   .member-icons[_ngcontent-%COMP%] {\n  bottom: 0;\n  opacity: 1;\n}\n\n.animate[_ngcontent-%COMP%] {\n  transition: all 0.3s ease-in-out;\n}\n\n@keyframes fa-blink {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.4;\n  }\n}\n\n.is-online[_ngcontent-%COMP%] {\n  animation: fa-blink 1.5s linear infinite;\n  color: #01bd2a;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #f5e7ec;\n  width: 350px;\n  border-radius: 20px;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.hour[_ngcontent-%COMP%] {\n  margin-top: 1px;\n  color: green;\n  font-size: 12px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBQTtFQUNGO0VBQ0E7SUFDRSxZQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLHdDQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLDhCQUFBO0FBQUYiLCJmaWxlIjoibWVtYmVyLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZDpob3ZlciBpbWcge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBcImVhc3ktb3V0XCI7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4uY2FyZCBpbWcge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IFwiZWFzeS1vdXRcIjtcclxufVxyXG5cclxuLmNhcmQtaW1nLXdyYXBwZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWVtYmVyLWljb25zIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtMzAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jYXJkLWltZy13cmFwcGVyOmhvdmVyIC5tZW1iZXItaWNvbnMge1xyXG4gIGJvdHRvbTogMDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uYW5pbWF0ZSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmEtYmxpbmsge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gIH1cclxufVxyXG5cclxuLmlzLW9ubGluZSB7XHJcbiAgYW5pbWF0aW9uOiBmYS1ibGluayAxLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICBjb2xvcjogcmdiKDEsIDE4OSwgNDIpO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZTdlYztcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmhlYWRpbmcge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5ob3VyIHtcclxuICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6874:
/*!******************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberDetailComponent": () => (/* binding */ MemberDetailComponent)
/* harmony export */ });
/* harmony import */ var _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @kolkov/ngx-gallery */ 7191);
/* harmony import */ var rxjs_internal_operators_take__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators/take */ 1056);
/* harmony import */ var rxjs_internal_operators_take__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_take__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_model_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_model/user */ 5440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/members.service */ 9516);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/message.service */ 6252);
/* harmony import */ var src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/presence.service */ 3238);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/account.service */ 7110);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 5690);
/* harmony import */ var _member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../member-messages/member-messages.component */ 7197);
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-timeago */ 3060);














const _c0 = ["memberTabs"];
function MemberDetailComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Online now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class MemberDetailComponent {
    constructor(memberService, route, messageService, presence, accountService, router) {
        this.memberService = memberService;
        this.route = route;
        this.messageService = messageService;
        this.presence = presence;
        this.accountService = accountService;
        this.router = router;
        this.messages = [];
        this.accountService.currentUser$
            .pipe((0,rxjs_internal_operators_take__WEBPACK_IMPORTED_MODULE_8__.take)(1))
            .subscribe((user) => (this.user = user || new src_app_model_user__WEBPACK_IMPORTED_MODULE_0__.User()));
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }
    ngOnDestroy() {
        this.messageService.stopHubConnection();
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.member = data.member;
        });
        this.route.queryParams.subscribe((params) => {
            params.tab ? this.selectTab(params.tab) : this.selectTab(0);
        });
        this.galleryOptions = [
            {
                width: '500px',
                height: '500px',
                imagePercent: 100,
                thumbnailsColumns: 4,
                imageAnimation: _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_9__.NgxGalleryAnimation.Slide,
                preview: false,
            },
        ];
        this.galleryImages = this.getImages();
    }
    getImages() {
        const imageUrls = [];
        for (const photo of this.member.photos) {
            imageUrls.push({
                small: photo === null || photo === void 0 ? void 0 : photo.url,
                medium: photo === null || photo === void 0 ? void 0 : photo.url,
                big: photo === null || photo === void 0 ? void 0 : photo.url,
            });
        }
        return imageUrls;
    }
    loadMessages() {
        this.messageService
            .getMessageThread(this.member.username)
            .subscribe((messages) => {
            this.messages = messages;
        });
    }
    selectTab(tabId) {
        this.memberTabs.tabs[tabId].active = true;
    }
    onTabActivated(data) {
        this.activeTab = data;
        if (this.activeTab.heading == 'Messages' && this.messages.length === 0) {
            this.messageService.createHubConnection(this.user, this.member.username);
        }
        else {
            this.messageService.stopHubConnection();
        }
    }
}
MemberDetailComponent.ɵfac = function MemberDetailComponent_Factory(t) { return new (t || MemberDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_members_service__WEBPACK_IMPORTED_MODULE_1__.MembersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_3__.PresenceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router)); };
MemberDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: MemberDetailComponent, selectors: [["app-member-detail"]], viewQuery: function MemberDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.memberTabs = _t.first);
    } }, decls: 56, vars: 22, consts: [[1, "row"], [1, "col-4"], [1, "card"], [1, "card-img-top", "img-thumbnail", 3, "src", "alt"], [1, "card-body"], ["class", "mb-2", 4, "ngIf"], [1, "card-footer"], [1, "btn-group", "d-flex"], [1, "btn", "btn-primary"], [1, "btn", "btn-success", 3, "click"], [1, "col-8"], [1, "member-tabset"], ["memberTabs", ""], [3, "heading", "selectTab"], ["heading", "Interests", 3, "selectTab"], ["heading", "Photos", 3, "selectTab"], [2, "display", "inline-block", "margin-bottom", "20px", 3, "options", "images"], ["heading", "Messages", 3, "selectTab"], [3, "username"], [1, "mb-2"], [1, "fa", "fa-user-circle", "text-success"]], template: function MemberDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, MemberDetailComponent_div_5_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Location:");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Age:");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Last Active:");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "timeago");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Member since:");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Like");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MemberDetailComponent_Template_button_click_33_listener() { return ctx.selectTab(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, " Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "tabset", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "tab", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectTab", function MemberDetailComponent_Template_tab_selectTab_38_listener($event) { return ctx.onTabActivated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "looking for");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "tab", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectTab", function MemberDetailComponent_Template_tab_selectTab_47_listener($event) { return ctx.onTabActivated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Interests");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "tab", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectTab", function MemberDetailComponent_Template_tab_selectTab_52_listener($event) { return ctx.onTabActivated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](53, "ngx-gallery", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "tab", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectTab", function MemberDetailComponent_Template_tab_selectTab_54_listener($event) { return ctx.onTabActivated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "app-member-messages", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", ctx.member.photoUrl || "./assets/default-avatar.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("alt", ctx.member.knownAs);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 15, ctx.presence.onlineUsers$)) == null ? null : tmp_2_0.includes(ctx.member.username));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx.member.city, ", ", ctx.member.country, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.member.age);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 17, ctx.member.lastActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](28, 19, ctx.member.created, "dd MMM yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("heading", "About ", ctx.member.knownAs, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.member.information);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.member.lookingFor);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.member.interests);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.galleryOptions)("images", ctx.galleryImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("username", ctx.member.username);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__.TabsetComponent, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__.TabDirective, _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_9__.NgxGalleryComponent, _member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_6__.MemberMessagesComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, ngx_timeago__WEBPACK_IMPORTED_MODULE_12__.TimeagoPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: [".img-thumbnail[_ngcontent-%COMP%] {\n  margin: 25px;\n  width: 85%;\n  height: 85%;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 0 25px;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  background-color: #fff;\n  border-top: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6Im1lbWJlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXRodW1ibmFpbCB7XHJcbiAgbWFyZ2luOiAyNXB4O1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgaGVpZ2h0OiA4NSU7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IDAgMjVweDtcclxufVxyXG5cclxuLmNhcmQtZm9vdGVyIHtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7259:
/*!**************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberEditComponent": () => (/* binding */ MemberEditComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var src_app_model_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_model/user */ 5440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/account.service */ 7110);
/* harmony import */ var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/members.service */ 9516);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 5690);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../photo-editor/photo-editor.component */ 247);
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-timeago */ 3060);











const _c0 = ["editForm"];
function MemberEditComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Information: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "you have made changes, any unsaved changes will lost ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MemberEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Your profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, MemberEditComponent_div_0_div_5_Template, 4, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Location:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Age:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Last Active:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "timeago");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Member since:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " Save Changes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "tabset", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "tab", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "form", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function MemberEditComponent_div_0_Template_form_ngSubmit_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.updateMember(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "textarea", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MemberEditComponent_div_0_Template_textarea_ngModelChange_42_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.member.information = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Looking for");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "textarea", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MemberEditComponent_div_0_Template_textarea_ngModelChange_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.member.lookingFor = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Interests");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "textarea", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MemberEditComponent_div_0_Template_textarea_ngModelChange_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.member.interests = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Location Details:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "City:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MemberEditComponent_div_0_Template_input_ngModelChange_54_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.member.city = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Country:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MemberEditComponent_div_0_Template_input_ngModelChange_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.member.country = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "tab", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](59, "app-photo-editor", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](39);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r2.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r0.member.photoUrl || "./assets/default-avatar.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("alt", ctx_r0.member.knownAs);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r0.member.city, ", ", ctx_r0.member.country, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.member.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](25, 16, ctx_r0.member.lastActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](31, 18, ctx_r0.member.created, "dd MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !_r2.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("heading", "About ", ctx_r0.member.knownAs, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.member.information);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.member.lookingFor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.member.interests);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.member.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.member.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("member", ctx_r0.member);
} }
class MemberEditComponent {
    constructor(accountService, memberService, toasterService) {
        this.accountService = accountService;
        this.memberService = memberService;
        this.toasterService = toasterService;
        this.accountService.currentUser$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1))
            .subscribe((user) => (this.user = user || new src_app_model_user__WEBPACK_IMPORTED_MODULE_0__.User()));
    }
    unloadNotification($event) {
        if (this.editForm.dirty) {
            $event.returnValue = true;
        }
    }
    ngOnInit() {
        this.loadMember();
    }
    loadMember() {
        var _a;
        this.memberService.getMember((_a = this.user) === null || _a === void 0 ? void 0 : _a.username).subscribe((member) => {
            this.member = member;
        });
    }
    updateMember() {
        this.memberService.updateMember(this.member).subscribe(() => {
            this.toasterService.success('Profile updated successfully');
            this.editForm.reset(this.member);
        });
    }
}
MemberEditComponent.ɵfac = function MemberEditComponent_Factory(t) { return new (t || MemberEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_members_service__WEBPACK_IMPORTED_MODULE_2__.MembersService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService)); };
MemberEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MemberEditComponent, selectors: [["app-member-edit"]], viewQuery: function MemberEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.editForm = _t.first);
    } }, hostBindings: function MemberEditComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("beforeunload", function MemberEditComponent_beforeunload_HostBindingHandler($event) { return ctx.unloadNotification($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
    } }, decls: 1, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-4"], [1, "col-8"], ["class", "alert alert-info", 4, "ngIf"], [1, "card"], [1, "card-img-top", "img-thumbnail", 3, "src", "alt"], [1, "card-body"], [1, "card-footer"], ["form", "editForm", 1, "btn", "btn-success", "btn-block", 3, "disabled"], [1, "member-tabset"], [3, "heading"], ["id", "editForm", 3, "ngSubmit"], ["editForm", "ngForm"], ["name", "information", "rows", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "lookingFor", "rows", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "mt-2"], ["name", "interests", "rows", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-inline"], ["for", "city"], ["type", "text", "name", "city", 1, "form-control", "mx-2", 3, "ngModel", "ngModelChange"], ["for", "country"], ["type", "text", "name", "country", 1, "form-control", "mx-2", 3, "ngModel", "ngModelChange"], ["heading", "Edit Photos"], [3, "member"], [1, "alert", "alert-info"]], template: function MemberEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, MemberEditComponent_div_0_Template, 60, 21, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.member);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__.TabsetComponent, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__.TabDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_4__.PhotoEditorComponent], pipes: [ngx_timeago__WEBPACK_IMPORTED_MODULE_10__.TimeagoPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: [".img-thumbnail[_ngcontent-%COMP%] {\n  margin: 25px;\n  width: 85%;\n  height: 85%;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 0 25px;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  background-color: #fff;\n  border-top: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJtZW1iZXItZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctdGh1bWJuYWlsIHtcclxuICBtYXJnaW46IDI1cHg7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBoZWlnaHQ6IDg1JTtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgcGFkZGluZzogMCAyNXB4O1xyXG59XHJcblxyXG4uY2FyZC1mb290ZXIge1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 1147:
/*!**************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberListComponent": () => (/* binding */ MemberListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/members.service */ 9516);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/buttons */ 9756);
/* harmony import */ var _member_card_member_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../member-card/member-card.component */ 6967);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 2214);







function MemberListComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gender_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", gender_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", gender_r4.display, " ");
} }
function MemberListComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-member-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("member", member_r5);
} }
function MemberListComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "pagination", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MemberListComponent_div_31_Template_pagination_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.pagination.currentPage = $event; })("pageChanged", function MemberListComponent_div_31_Template_pagination_pageChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("boundaryLinks", true)("totalItems", ctx_r3.pagination.totalItems)("itemsPerPage", ctx_r3.pagination.itemsPerPage)("ngModel", ctx_r3.pagination.currentPage);
} }
class MemberListComponent {
    constructor(memberService) {
        this.memberService = memberService;
        this.genderList = [
            { value: 'male', display: 'Males' },
            { value: 'female', display: 'Females' },
        ];
        this.userParams = this.memberService.getUserParams();
    }
    ngOnInit() {
        this.loadMembers();
    }
    loadMembers() {
        this.memberService.setUserParams(this.userParams);
        this.memberService.getMembers(this.userParams).subscribe((response) => {
            this.members = response.result;
            this.pagination = response.pagination;
        });
    }
    resetFilters() {
        this.userParams = this.memberService.resetFilters();
        this.loadMembers();
    }
    pageChanged(event) {
        this.userParams.pageNumber = event.page;
        this.memberService.setUserParams(this.userParams);
        this.loadMembers();
    }
}
MemberListComponent.ɵfac = function MemberListComponent_Factory(t) { return new (t || MemberListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_members_service__WEBPACK_IMPORTED_MODULE_0__.MembersService)); };
MemberListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MemberListComponent, selectors: [["app-member-list"]], decls: 32, vars: 9, consts: [[1, "text-center", "mt-3"], [1, "container", "mt-3"], ["autocomplete", "off", 1, "form-inline", "mb-3", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["type", "number", "name", "minAge", 1, "form-control", "ml-1", 2, "width", "70px", 3, "ngModel", "ngModelChange"], [1, "form-group", "px-2"], ["type", "number", "name", "maxAge", 1, "form-control", "ml-1", 2, "width", "70px", 3, "ngModel", "ngModelChange"], ["name", "gender", 1, "form-control", "ml-1", 2, "width", "130px", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-primary", "ml-1"], ["type", "submit", 1, "btn", "btn-info", "ml-1", 3, "click"], [1, "col"], [1, "button-group", "float-right"], ["type", "button", "name", "orderBy", "btnRadio", "lastActive", 1, "btn", "btn-primary", 3, "ngModel", "click", "ngModelChange"], ["type", "button", "name", "orderBy", "btnRadio", "created", 1, "btn", "btn-primary", 3, "ngModel", "click", "ngModelChange"], [1, "row"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center mt-2", 4, "ngIf"], [3, "value"], [3, "member"], [1, "d-flex", "justify-content-center", "mt-2"], ["previousText", "\u2039", "nextText", "\u203A", "firstText", "\u00AB", "lastText", "\u00BB", 3, "boundaryLinks", "totalItems", "itemsPerPage", "ngModel", "ngModelChange", "pageChanged"]], template: function MemberListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function MemberListComponent_Template_form_ngSubmit_4_listener() { return ctx.loadMembers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Age from:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MemberListComponent_Template_input_ngModelChange_9_listener($event) { return ctx.userParams.minAge = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Age to:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MemberListComponent_Template_input_ngModelChange_13_listener($event) { return ctx.userParams.maxAge = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Show:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MemberListComponent_Template_select_ngModelChange_17_listener($event) { return ctx.userParams.gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, MemberListComponent_option_18_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Apply Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MemberListComponent_Template_button_click_21_listener() { return ctx.resetFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Reset Filters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MemberListComponent_Template_button_click_25_listener() { return ctx.loadMembers(); })("ngModelChange", function MemberListComponent_Template_button_ngModelChange_25_listener($event) { return ctx.userParams.orderBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " Last Active ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MemberListComponent_Template_button_click_27_listener() { return ctx.loadMembers(); })("ngModelChange", function MemberListComponent_Template_button_ngModelChange_27_listener($event) { return ctx.userParams.orderBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Newest Members ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, MemberListComponent_div_30_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, MemberListComponent_div_31_Template, 2, 4, "div", 18);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Your matches - ", ctx.pagination == null ? null : ctx.pagination.totalItems, " found");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.userParams.minAge);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.userParams.maxAge);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.userParams.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.genderList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.userParams.orderBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.userParams.orderBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.members);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pagination);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_1__.ButtonRadioDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _member_card_member_card_component__WEBPACK_IMPORTED_MODULE_2__.MemberCardComponent, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW1iZXItbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7197:
/*!**********************************************************************!*\
  !*** ./src/app/members/member-messages/member-messages.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberMessagesComponent": () => (/* binding */ MemberMessagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/message.service */ 6252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-timeago */ 3060);





const _c0 = ["messageForm"];
function MemberMessagesComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No messages yet... say hi by using the message box below ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MemberMessagesComponent_ul_5_li_1_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " (unread) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MemberMessagesComponent_ul_5_li_1_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "timeago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" (read ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, message_r6.dateRead), ") ");
} }
function MemberMessagesComponent_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "timeago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MemberMessagesComponent_ul_5_li_1_span_10_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MemberMessagesComponent_ul_5_li_1_span_11_Template, 3, 3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", message_r6.senderPhotoUrl || "./assets/default-avatar.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", message_r6.senderUsername);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 6, message_r6.messageSent));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !message_r6.dateRead && message_r6.senderUsername !== ctx_r5.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", message_r6.dateRead && message_r6.senderUsername !== ctx_r5.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r6.content);
} }
function MemberMessagesComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MemberMessagesComponent_ul_5_li_1_Template, 14, 8, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r2.messageService.messageThread$));
} }
function MemberMessagesComponent_i_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 25);
} }
class MemberMessagesComponent {
    constructor(messageService) {
        this.messageService = messageService;
        this.loading = false;
    }
    ngOnInit() { }
    sendMessage() {
        this.loading = true;
        this.messageService
            .sendMessage(this.username, this.messageContent)
            .then(() => {
            this.messageForm.reset();
        })
            .finally(() => (this.loading = false));
    }
}
MemberMessagesComponent.ɵfac = function MemberMessagesComponent_Factory(t) { return new (t || MemberMessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService)); };
MemberMessagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MemberMessagesComponent, selectors: [["app-member-messages"]], viewQuery: function MemberMessagesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.messageForm = _t.first);
    } }, inputs: { messages: "messages", username: "username" }, decls: 16, vars: 10, consts: [[1, "card"], [1, "card-body", 2, "overflow", "scroll", "height", "535px", 3, "scrollTop"], ["scrollMe", ""], [4, "ngIf"], ["class", "chat", 4, "ngIf"], [1, "card-footer"], ["autocomplete", "off", 3, "ngSubmit"], ["messageForm", "ngForm"], [1, "input-group"], ["type", "text", "required", "", "name", "messageContent", "placeholder", "send a private message", 1, "form-control", "input-sm", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "fa fa-spinner fa-spin", 4, "ngIf"], [1, "chat"], [4, "ngFor", "ngForOf"], [1, "chat-img", "float-right"], [1, "rounded-circle", 3, "src", "alt"], [1, "chat-body"], [1, "header"], [1, "text-muted"], [1, "fa", "fa-clock-0"], ["class", "text-danger", 4, "ngIf"], ["class", "text-success", 4, "ngIf"], [1, "text-danger"], [1, "text-success"], [1, "fa", "fa-spinner", "fa-spin"]], template: function MemberMessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MemberMessagesComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MemberMessagesComponent_ul_5_Template, 3, 3, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function MemberMessagesComponent_Template_form_ngSubmit_8_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MemberMessagesComponent_Template_input_ngModelChange_11_listener($event) { return ctx.messageContent = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MemberMessagesComponent_i_15_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollTop", _r0.scrollHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 6, ctx.messageService.messageThread$)) == null ? null : tmp_1_0.length) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 8, ctx.messageService.messageThread$).length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.messageContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r3.valid || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, ngx_timeago__WEBPACK_IMPORTED_MODULE_4__.TimeagoPipe], styles: [".card[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.chat[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.chat[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px dotted #b3a9a9;\n}\n\n.rounded-circle[_ngcontent-%COMP%] {\n  max-height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci1tZXNzYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJtZW1iZXItbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY2hhdCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNoYXQgbGkge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjYjNhOWE5O1xyXG59XHJcblxyXG4ucm91bmRlZC1jaXJjbGUge1xyXG4gIG1heC1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 247:
/*!****************************************************************!*\
  !*** ./src/app/members/photo-editor/photo-editor.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoEditorComponent": () => (/* binding */ PhotoEditorComponent)
/* harmony export */ });
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ 6321);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var src_app_model_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_model/user */ 5440);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/account.service */ 7110);
/* harmony import */ var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/members.service */ 9516);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);









function PhotoEditorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PhotoEditorComponent_div_1_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const photo_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.setMainPhoto(photo_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Main ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PhotoEditorComponent_div_1_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const photo_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.deletePhoto(photo_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const photo_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", photo_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", photo_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", photo_r2.isMain)("ngClass", photo_r2.isMain ? "btn-success active" : "btn-outline-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", photo_r2.isMain);
} }
function PhotoEditorComponent_div_14_tr_13_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, (item_r7 == null ? null : item_r7.file == null ? null : item_r7.file.size) / 1024 / 1024, ".2"), " MB ");
} }
function PhotoEditorComponent_div_14_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PhotoEditorComponent_div_14_tr_13_td_4_Template, 3, 4, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r7 == null ? null : item_r7.file == null ? null : item_r7.file.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.uploader.options.isHTML5);
} }
const _c0 = function (a0) { return { width: a0 }; };
function PhotoEditorComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Upload queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, PhotoEditorComponent_div_14_tr_13_Template, 5, 2, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Queue progress: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PhotoEditorComponent_div_14_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.uploader.uploadAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Upload all ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PhotoEditorComponent_div_14_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.uploader.cancelAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Cancel all ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PhotoEditorComponent_div_14_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.uploader.clearQueue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " Remove all ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Queue length: ", ctx_r1.uploader == null ? null : ctx_r1.uploader.queue == null ? null : ctx_r1.uploader.queue.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.uploader.queue);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c0, ctx_r1.uploader.progress + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.uploader.getNotUploadedItems().length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.uploader.isUploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.uploader.queue.length);
} }
const _c1 = function (a0) { return { "nv-file-over": a0 }; };
class PhotoEditorComponent {
    constructor(accountService, memberService) {
        this.accountService = accountService;
        this.memberService = memberService;
        this.hasBaseDropZoneOver = false;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
        this.accountService.currentUser$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))
            .subscribe((user) => (this.user = user || new src_app_model_user__WEBPACK_IMPORTED_MODULE_0__.User()));
    }
    ngOnInit() {
        this.initializeUploader();
    }
    fileOverBase(e) {
        this.hasBaseDropZoneOver = e;
    }
    initializeUploader() {
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__.FileUploader({
            url: this.baseUrl + 'users/add-photo',
            authToken: 'Bearer ' + this.user.token,
            isHTML5: true,
            allowedFileType: ['image'],
            removeAfterUpload: true,
            autoUpload: false,
            maxFileSize: 10 * 1024 * 1024,
        });
        this.uploader.onAfterAddingFile = (file) => {
            file.withCredentials = false;
        };
        this.uploader.onSuccessItem = (item, response, status, headers) => {
            if (response) {
                const photo = JSON.parse(response);
                this.member.photos.push(photo);
                if (photo.isMain) {
                    this.user.photoUrl = photo.url;
                    this.member.photoUrl = photo.url;
                    this.accountService.setCurrentUser(this.user);
                }
            }
        };
    }
    setMainPhoto(photo) {
        this.memberService.setMainPhoto(photo.id).subscribe(() => {
            this.user.photoUrl = photo.url;
            this.accountService.setCurrentUser(this.user);
            this.member.photoUrl = photo.url;
            this.member.photos.forEach((p) => {
                if (p.isMain)
                    p.isMain = false;
                if (p.id == photo.id)
                    p.isMain = true;
            });
        });
    }
    deletePhoto(photoId) {
        this.memberService.deletePhoto(photoId).subscribe(() => {
            this.member.photos = this.member.photos.filter((x) => x.id !== photoId);
        });
    }
}
PhotoEditorComponent.ɵfac = function PhotoEditorComponent_Factory(t) { return new (t || PhotoEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_members_service__WEBPACK_IMPORTED_MODULE_3__.MembersService)); };
PhotoEditorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PhotoEditorComponent, selectors: [["app-photo-editor"]], inputs: { member: "member" }, decls: 15, vars: 8, consts: [[1, "row"], ["class", "col-2", 4, "ngFor", "ngForOf"], [1, "row", "mt-3"], [1, "col-md-3"], ["ng2FileDrop", "", 1, "card", "bd-faded", "p-3", "text-center", "mb-3", "my-drop-zone", 3, "ngClass", "uploader", "fileOver"], [1, "fa", "fa-upload", "fa-3x"], ["type", "file", "ng2FileSelect", "", "multiple", "", 3, "uploader"], ["type", "file", "ng2FileSelect", "", 3, "uploader"], ["class", "col-md-9", "style", "margin-bottom: 40px", 4, "ngIf"], [1, "col-2"], [1, "img-thumbnail", "p-1", 3, "src", "alt"], [1, "text-center"], [1, "btn", "btn-sm", 3, "disabled", "ngClass", "click"], [1, "btn", "btn-sm", "btn-danger", 3, "disabled", "click"], [1, "fa", "fa-trash"], [1, "col-md-9", 2, "margin-bottom", "40px"], [1, "table"], ["width", "50%"], [4, "ngFor", "ngForOf"], [1, "progress"], ["role", "progressbar", 1, "progress-bar", 3, "ngStyle"], ["type", "button", 1, "btn", "btn-success", "btn-s", 3, "disabled", "click"], [1, "fa", "fa-upload"], ["type", "button", 1, "btn", "btn-warning", "btn-s", 3, "disabled", "click"], [1, "fa", "fa-ban"], ["type", "button", 1, "btn", "btn-danger", "btn-s", 3, "disabled", "click"], ["nowrap", "", 4, "ngIf"], ["nowrap", ""]], template: function PhotoEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PhotoEditorComponent_div_1_Template, 7, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Add Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fileOver", function PhotoEditorComponent_Template_div_fileOver_6_listener($event) { return ctx.fileOverBase($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Drop photos down ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Multiple ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Single ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, PhotoEditorComponent_div_14_Template, 28, 8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.member.photos);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c1, ctx.hasBaseDropZoneOver))("uploader", ctx.uploader);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("uploader", ctx.uploader);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("uploader", ctx.uploader);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.uploader == null ? null : ctx.uploader.queue == null ? null : ctx.uploader.queue.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__.FileDropDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__.FileSelectDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe], styles: ["img.img-thumbnail[_ngcontent-%COMP%] {\n  height: 100px;\n  min-width: 100px !important;\n  margin-bottom: 2px;\n}\n\n.nv-file-over[_ngcontent-%COMP%] {\n  border: dotted 3px red;\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3RvLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRiIsImZpbGUiOiJwaG90by1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcuaW1nLXRodW1ibmFpbCB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBtaW4td2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG4ubnYtZmlsZS1vdmVyIHtcclxuICBib3JkZXI6IGRvdHRlZCAzcHggcmVkO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 5298:
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesComponent": () => (/* binding */ MessagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/message.service */ 6252);
/* harmony import */ var _services_confirm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/confirm.service */ 8458);
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/buttons */ 9756);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 2214);
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-timeago */ 3060);









function MessagesComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MessagesComponent_div_12_tr_10_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", message_r4.recipientPhotoUrl || "./assets/default-avatar.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", message_r4.recipientUsername);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 3, message_r4.recipientUsername));
} }
function MessagesComponent_div_12_tr_10_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", message_r4.senderPhotoUrl || "./assets/default-avatar.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", message_r4.senderUsername);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 3, message_r4.senderUsername));
} }
const _c0 = function () { return { tab: 3 }; };
function MessagesComponent_div_12_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MessagesComponent_div_12_tr_10_div_4_Template, 5, 5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MessagesComponent_div_12_tr_10_div_5_Template, 5, 5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "timeago");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MessagesComponent_div_12_tr_10_Template_button_click_10_listener($event) { return $event.stopPropagation(); })("click", function MessagesComponent_div_12_tr_10_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const message_r4 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r10.deleteMessage(message_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("routerLink", ctx_r3.container === "Outbox" ? "/members/" + message_r4.recipientUsername : "/members/" + message_r4.senderUsername);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx_r3.loading)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](message_r4.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.container === "Outbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.container !== "Outbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 7, message_r4.messageSent));
} }
function MessagesComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "From / To");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Sent / Receive");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, MessagesComponent_div_12_tr_10_Template, 12, 10, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.messages);
} }
function MessagesComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "pagination", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MessagesComponent_div_13_Template_pagination_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.pagination.currentPage = $event; })("pageChanged", function MessagesComponent_div_13_Template_pagination_pageChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("boundaryLinks", true)("totalItems", ctx_r2.pagination.totalItems)("itemsPerPage", ctx_r2.pagination.itemsPerPage)("ngModel", ctx_r2.pagination.currentPage);
} }
class MessagesComponent {
    constructor(messageService, confirmService) {
        this.messageService = messageService;
        this.confirmService = confirmService;
        this.messages = [];
        this.container = 'Unread';
        this.pageNumber = 1;
        this.pageSize = 5;
        this.loading = false;
    }
    ngOnInit() {
        this.loadMessages();
    }
    loadMessages() {
        this.loading = true;
        this.messageService
            .getMessages(this.pageNumber, this.pageSize, this.container)
            .subscribe((response) => {
            this.messages = response.result;
            this.pagination = response.pagination;
            this.loading = false;
        });
    }
    deleteMessage(id) {
        this.confirmService
            .confirm('Confirm delete message', 'This cannot be undone')
            .subscribe((result) => {
            if (result) {
                this.messageService.deleteMessage(id).subscribe(() => {
                    this.messages.splice(this.messages.findIndex((m) => m.id == id), 1);
                });
            }
        });
    }
    pageChanged(event) {
        this.pageNumber = event.page;
        this.loadMessages();
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_confirm_service__WEBPACK_IMPORTED_MODULE_1__.ConfirmService)); };
MessagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], decls: 14, vars: 6, consts: [[1, "row", "mb-4"], ["name", "container", 1, "btn-group"], ["btnRadio", "Unread", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], [1, "fa", "fa-envelope"], ["btnRadio", "Inbox", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], [1, "fa", "fa-envelope-open"], ["btnRadio", "Outbox", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], [1, "fa", "fa-paper-plane"], ["class", "row", 4, "ngIf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "row"], [1, "table", "table-hover", 2, "cursor", "pointer"], [2, "width", "40%"], [2, "width", "20%"], [3, "hidden", "routerLink", "queryParams", 4, "ngFor", "ngForOf"], [3, "hidden", "routerLink", "queryParams"], [4, "ngIf"], [1, "btn", "btn-danger", 3, "click"], [1, "img-circle", "rounded-circle", "mr-2", 3, "src", "alt"], [1, "d-flex", "justify-content-center"], ["previousText", "\u2039", "nextText", "\u203A", "firstText", "\u00AB", "lastText", "\u00BB", 3, "boundaryLinks", "totalItems", "itemsPerPage", "ngModel", "ngModelChange", "pageChanged"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MessagesComponent_Template_button_ngModelChange_2_listener($event) { return ctx.container = $event; })("click", function MessagesComponent_Template_button_click_2_listener() { return ctx.loadMessages(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Unread ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MessagesComponent_Template_button_ngModelChange_5_listener($event) { return ctx.container = $event; })("click", function MessagesComponent_Template_button_click_5_listener() { return ctx.loadMessages(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Inbox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MessagesComponent_Template_button_ngModelChange_8_listener($event) { return ctx.container = $event; })("click", function MessagesComponent_Template_button_click_8_listener() { return ctx.loadMessages(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Outbox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, MessagesComponent_div_11_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, MessagesComponent_div_12_Template, 11, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, MessagesComponent_div_13_Template, 2, 4, "div", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.container);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.container);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.container);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.messages == null ? null : ctx.messages.length) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.messages.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pagination && !ctx.loading);
    } }, directives: [ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_2__.ButtonRadioDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationComponent], pipes: [ngx_timeago__WEBPACK_IMPORTED_MODULE_8__.TimeagoPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe], styles: [".img-circle[_ngcontent-%COMP%] {\n  max-height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJtZXNzYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctY2lyY2xlIHtcclxuICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 5375:
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/account.service */ 7110);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_directives/has-role.directive */ 397);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 743);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);








function NavComponent_ng_container_5_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["Admin", "Moderator"]; };
function NavComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Matched");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "List");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, NavComponent_ng_container_5_li_10_Template, 3, 0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appHasRole", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
} }
function NavComponent_div_7_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Edit Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavComponent_div_7_div_5_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r6.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function NavComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NavComponent_div_7_div_5_Template, 6, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", user_r4.photoUrl || "./assets/default-avatar.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("alt", user_r4.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Welcome ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 3, user_r4.knownAs || user_r4.username), "");
} }
function NavComponent_form_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function NavComponent_form_9_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NavComponent_form_9_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.model.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NavComponent_form_9_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.model.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.model.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.model.password);
} }
class NavComponent {
    constructor(accountService, router, toastr) {
        this.accountService = accountService;
        this.router = router;
        this.toastr = toastr;
        this.model = {};
    }
    ngOnInit() {
    }
    login() {
        this.accountService.login(this.model).subscribe(user => {
            this.router.navigateByUrl('/members');
        }, error => {
            this.toastr.error(error.error);
        });
    }
    logout() {
        this.accountService.logout();
        this.router.navigateByUrl('/');
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService)); };
NavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 11, vars: 9, consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "fixed-top", "bg-dark"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], [1, "navbar-nav", "mr-auto", "mb-2", "mb-md-0"], [4, "ngIf"], ["class", "dropdown", "dropdown", "", 4, "ngIf"], ["class", "form-inline mt-2 mt-md-0", "autocomplete", "off", 3, "ngSubmit", 4, "ngIf"], [1, "nav-item"], ["routerLinkActive", "active", "routerLink", "/members", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/lists", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/messages", 1, "nav-link"], ["class", "nav-item", 4, "appHasRole"], ["routerLinkActive", "active", "routerLink", "/admin", 1, "nav-link"], ["dropdown", "", 1, "dropdown"], [3, "src", "alt"], ["dropdownToggle", "", 1, "dropdown-toggle", "text-light", "ml-2"], ["class", "dropdown-menu mt-3", 4, "dropdownMenu"], [1, "dropdown-menu", "mt-3"], ["routerLink", "/member/edit", 1, "dropdown-item"], [1, "dropdown-divider"], [1, "dropdown-item", 3, "click"], ["autocomplete", "off", 1, "form-inline", "mt-2", "mt-md-0", 3, "ngSubmit"], ["loginForm", "ngForm"], ["name", "username", "type", "text", "placeholder", "Username", 1, "form-control", "mr-sm-2", 3, "ngModel", "ngModelChange"], ["name", "password", "type", "password", "placeholder", "Password", 1, "form-control", "mr-sm-2", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-outline-success"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Dating App");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NavComponent_ng_container_5_Template, 11, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, NavComponent_div_7_Template, 6, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, NavComponent_form_9_Template, 6, 2, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 3, ctx.accountService.currentUser$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 5, ctx.accountService.currentUser$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 7, ctx.accountService.currentUser$) === null);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_1__.HasRoleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__.BsDropdownDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__.BsDropdownMenuDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe], styles: [".dropdown-toggle[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-height: 50px;\n  border: 2px solid #fff;\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6Im5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi10b2dnbGUsXHJcbi5kcm9wZG93bi1pdGVtIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LWhlaWdodDogNTBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 9087:
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/account.service */ 7110);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_forms/text-input/text-input.component */ 1201);
/* harmony import */ var _forms_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_forms/date-input/date-input.component */ 1700);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);










function RegisterComponent_div_20_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", error_r2, " ");
} }
function RegisterComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RegisterComponent_div_20_li_2_Template, 2, 1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.validationErrors);
} }
class RegisterComponent {
    constructor(accountService, toastr, fb, router) {
        this.accountService = accountService;
        this.toastr = toastr;
        this.fb = fb;
        this.router = router;
        this.cancelRegistration = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({});
        this.maxDate = new Date();
        this.validationErrors = [];
    }
    ngOnInit() {
        this.initializeForm();
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    }
    initializeForm() {
        this.registerForm = this.fb.group({
            gender: ['male'],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            knownAs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            dateofBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            password: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(16),
                ],
            ],
            confirmPassword: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, this.matchValues('password')],
            ],
        });
    }
    matchValues(matchTo) {
        return (control) => {
            var _a, _b;
            return (control === null || control === void 0 ? void 0 : control.value) === ((_b = (_a = control === null || control === void 0 ? void 0 : control.parent) === null || _a === void 0 ? void 0 : _a.get(matchTo)) === null || _b === void 0 ? void 0 : _b.value)
                ? null
                : { isMatching: true };
        };
    }
    register() {
        this.accountService.register(this.registerForm.value).subscribe((response) => {
            this.router.navigateByUrl('/members');
        }, (error) => {
            this.validationErrors = error;
        });
    }
    cancel() {
        this.cancelRegistration.emit(false);
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], outputs: { cancelRegistration: "cancelRegistration" }, decls: 26, vars: 13, consts: [["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "text-center", "text-primary"], [1, "form-group"], [1, "control-label"], [1, "radio-inline"], ["type", "radio", "value", "male", "formControlName", "gender"], ["type", "radio", "value", "female", "formControlName", "gender", 1, "ml-2"], ["formControlName", "username", 3, "label"], ["formControlName", "knownAs", 3, "label"], ["formControlName", "dateofBirth", 3, "label", "maxDate"], ["formControlName", "city", 3, "label"], ["formControlName", "country", 3, "label"], ["formControlName", "password", 3, "type", "label"], ["formControlName", "confirmPassword", 3, "type", "label"], ["class", "row mt-5", 4, "ngIf"], [1, "form-group", "text-center"], ["type", "submit", 1, "btn", "btn-success", "mr-2", 3, "disabled"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "row", "mt-5"], [1, "text-danger"], [4, "ngFor", "ngForOf"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_0_listener() { return ctx.registerForm.valid && ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "I am a: \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Male ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " female ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "app-text-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "app-text-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "app-date-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "app-text-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "app-text-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "app-text-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "app-text-input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, RegisterComponent_div_20_Template, 3, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_24_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "Known As");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "Date of Birth")("maxDate", ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "password")("label", "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "password")("label", "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.validationErrors.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_1__.TextInputComponent, _forms_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_2__.DateInputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'https://localhost:5001/api/',
    hubUrl: 'https://localhost:5001/hubs/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 5784:
/*!****************************************!*\
  !*** ./node_modules/peerjs/dist/ sync ***!
  \****************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 5784;
module.exports = webpackEmptyContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map