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
var forms_1 = require("@angular/forms");
var auth_service_1 = require("./services/auth.service");
var EmployeeRegisterComponent = (function () {
    function EmployeeRegisterComponent(authService) {
        this.authService = authService;
    }
    EmployeeRegisterComponent.prototype.ngOnInit = function () {
        this.authService.logout();
        this.employeeName = new forms_1.FormControl(null, forms_1.Validators.required);
        this.employeeNumber = new forms_1.FormControl(null, forms_1.Validators.required);
        this.password = new forms_1.FormControl(null, forms_1.Validators.required);
        this.designation = new forms_1.FormControl(null, forms_1.Validators.required);
        this.serviceLine = new forms_1.FormControl(null, forms_1.Validators.required);
        this.role = new forms_1.FormControl(null, forms_1.Validators.required);
        this.signUpForm = new forms_1.FormGroup({
            employeeName: this.employeeName,
            employeeNumber: this.employeeNumber,
            password: this.password,
            designation: this.designation,
            serviceLine: this.serviceLine,
            role: this.role
        });
    };
    EmployeeRegisterComponent.prototype.registerEmployee = function (signUpFormValues) {
        var _this = this;
        if (!this.signUpForm.valid) {
            console.log("Invalid Form");
            this.validEmployeeName = this.employeeName.valid;
            this.validEmployeeNumber = this.employeeNumber.valid;
            this.validPassword = this.password.valid;
            this.validDesignation = this.designation.valid;
            this.validServiceLine = this.serviceLine.valid;
            this.validRole = this.role.valid;
        }
        else {
            var newEmployee = {
                employeeName: signUpFormValues.employeeName,
                employeeId: signUpFormValues.employeeNumber,
                password: signUpFormValues.password,
                designation: signUpFormValues.designation,
                serviceLine: signUpFormValues.serviceLine,
                role: signUpFormValues.role
            };
            this.authService.register(newEmployee)
                .subscribe(function (data) {
                console.log(data);
                _this.registrationSuccess = true;
                _this.userAlreadyExists = false;
            }, function (error) {
                console.log(error.status);
                if (error.status === 400) {
                    _this.userAlreadyExists = true;
                    _this.registrationSuccess = false;
                }
            });
        }
    };
    EmployeeRegisterComponent.prototype.numericKeyPressOnlyEvent = function (keyPressEvent) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(keyPressEvent.charCode);
        if (!pattern.test(inputChar)) {
            keyPressEvent.preventDefault();
        }
    };
    EmployeeRegisterComponent.prototype.alphaKeyPressOnlyEvent = function (keyPressEvent) {
        var pattern = /[A-Za-z\s]/;
        var inputChar = String.fromCharCode(keyPressEvent.charCode);
        if (!pattern.test(inputChar)) {
            keyPressEvent.preventDefault();
        }
    };
    return EmployeeRegisterComponent;
}());
EmployeeRegisterComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/employee-register.component.html',
        selector: 'employee-register'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], EmployeeRegisterComponent);
exports.EmployeeRegisterComponent = EmployeeRegisterComponent;
//# sourceMappingURL=employee-register.component.js.map