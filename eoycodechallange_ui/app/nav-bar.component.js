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
var router_1 = require("@angular/router");
var NavBarComponent = (function () {
    function NavBarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavBarComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/employee/login']);
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    core_1.Component({
        selector: 'nav-bar',
        template: "<div class=\"navbar-fixed\" style=\"margin-bottom: 50px;\">\n    <nav>\n      <div class=\"nav-wrapper\">\n        <a href=\"/\" class=\"brand-logo\">\n          <img src=\"app/assets/images/eoy_brand.png\" class=\"brand-image\" alt=\"EOY Code Challenge\" />\n        </a>\n        <ul class=\"right hide-on-med-and-down\">\n          <li><a *ngIf=\"!authService.currentUser\" class=\"waves-effect waves-light btn\" [routerLink]=\"['/employee/login']\">Login</a></li>\n          <li><a *ngIf=\"!authService.currentUser\" class=\"waves-effect waves-light btn\" [routerLink]=\"['/employee/registration']\">Register</a></li>\n          <li>\n            <div style=\"margin-top: 15px; font-weight: bold;\" *ngIf=\"authService.currentUser\" class=\"chip right\">\n                <i class=\"material-icons\">account_circle</i>\n                {{authService.currentUser.employeeName}}\n            </div>\n          </li>\n          <li>\n            <a *ngIf=\"authService.currentUser\" class=\"waves-effect waves-light btn\" (click)=\"logout()\">SIGN OUT</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>",
        styles: ["nav { background-color: #EEEEEE}"]
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
], NavBarComponent);
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=nav-bar.component.js.map