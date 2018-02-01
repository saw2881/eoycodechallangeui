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
var pager_service_1 = require("./services/pager.service");
var EmployeeDashboardComponent = (function () {
    function EmployeeDashboardComponent(authService, pagerService) {
        this.authService = authService;
        this.pagerService = pagerService;
        // pager object
        this.pager = {};
    }
    EmployeeDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService
            .allEmployeeDetails()
            .subscribe(function (data) {
            console.log(data);
            _this.employeeDetailsArray = data;
            // set items to json response
            _this.allItems = data;
            // initialize to page 1
            _this.setPage(1);
        }, function (error) {
            console.log(error);
        });
    };
    EmployeeDashboardComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    return EmployeeDashboardComponent;
}());
EmployeeDashboardComponent = __decorate([
    core_1.Component({
        selector: 'employee-dashboard',
        templateUrl: 'app/employee-dashboard.component.html'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, pager_service_1.PagerService])
], EmployeeDashboardComponent);
exports.EmployeeDashboardComponent = EmployeeDashboardComponent;
//# sourceMappingURL=employee-dashboard.component.js.map