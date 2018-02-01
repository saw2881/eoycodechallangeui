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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var AuthService = (function () {
    function AuthService(http, customRequestOptions) {
        this.http = http;
        this.customRequestOptions = customRequestOptions;
    }
    AuthService.prototype.register = function (newEmployee) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var requestBody = JSON.stringify(newEmployee);
        return this.http
            .post("http://localhost:3000/api/auth/register", requestBody, options)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.login = function (loginEmployee) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append("x-access-token", "SS");
        var options = new http_1.RequestOptions({ headers: headers });
        var requestBody = JSON.stringify(loginEmployee);
        return this.http
            .post("http://localhost:3000/api/auth/login", requestBody, options)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.allEmployeeDetails = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('x-access-token', localStorage.getItem("authToken"));
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .post("http://localhost:3000/api/user/all", null, options)
            .map(function (response) {
            var index = 0;
            console.log(response.json());
            var allEmployees = response.json().map(function (employee) {
                return {
                    serialNo: ++index,
                    employeeName: employee.employeeName,
                    employeeId: employee.employeeId,
                    designation: employee.designation,
                    serviceLine: employee.serviceLine,
                    role: employee.role,
                };
            });
            return allEmployees;
        });
    };
    AuthService.prototype.getCurrentUser = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('x-access-token', localStorage.getItem("authToken"));
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .post("http://localhost:3000/api/user/me", null, options)
            .map(function (response) {
            console.log(response.json());
            return response.json();
        });
    };
    AuthService.prototype.logout = function () {
        this.currentUser = null;
        localStorage.removeItem("authToken");
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, http_1.RequestOptions])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map