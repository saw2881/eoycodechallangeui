"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var auth_service_1 = require("./services/auth.service");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var EmployeeLoginComponent = (function () {
    function EmployeeLoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    EmployeeLoginComponent.prototype.ngOnInit = function () {
        this.employeeNumber = new forms_1.FormControl(null, forms_1.Validators.required);
        this.password = new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.maxLength(10)]);
        this.signInForm = new forms_1.FormGroup({
            employeeNumber: this.employeeNumber,
            password: this.password
        });
    };
    EmployeeLoginComponent.prototype.loginEmployee = function (signInFormValues) {
        var _this = this;
        if (!this.signInForm.valid) {
            console.log("Invalid form");
            this.validPassword = this.password.valid;
            this.validEmployeeNumber = this.employeeNumber.valid;
        }
        else {
            var employeeLogin = {
                employeeId: signInFormValues.employeeNumber,
                password: signInFormValues.password
            };
            this.authService
                .login(employeeLogin)
                .subscribe(function (data) {
                console.log(data);
                _this.validLogin = true;
                localStorage.setItem("authToken", data.token);
                //get the logged in user detail
                _this.authService
                    .getCurrentUser()
                    .subscribe(function (data) {
                    console.log(data);
                    _this.authService.currentUser = data;
                }, function (error) {
                    console.log(error);
                    if (error.status == 401) {
                        _this.validLogin = false;
                    }
                });
                _this.router.navigate(['employee/dashboard']);
            }, function (error) {
                console.log(error);
                if (error.status == 401) {
                    _this.validLogin = false;
                }
            });
        }
    };
    EmployeeLoginComponent.prototype.numericKeyPressOnlyEvent = function (keyPressEvent) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(keyPressEvent.charCode);
        if (!pattern.test(inputChar)) {
            keyPressEvent.preventDefault();
        }
    };
    return EmployeeLoginComponent;
}());
EmployeeLoginComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/employee-login.component.html'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
], EmployeeLoginComponent);
exports.EmployeeLoginComponent = EmployeeLoginComponent;
//# sourceMappingURL=employee-login.component.js.map