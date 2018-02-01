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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var http_2 = require("@angular/http");
var employee_home_component_1 = require("./employee-home.component");
var employee_register_component_1 = require("./employee-register.component");
var employee_app_component_1 = require("./employee-app.component");
var nav_bar_component_1 = require("./nav-bar.component");
var employee_login_component_1 = require("./employee-login.component");
var employee_dashboard_component_1 = require("./employee-dashboard.component");
var auth_service_1 = require("./services/auth.service");
var routes_1 = require("./routes");
var custom_request_options_1 = require("./shared/custom-request-options");
var pager_service_1 = require("./services/pager.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes),
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule],
        declarations: [employee_app_component_1.EmployeeAppComponent,
            employee_home_component_1.EmployeeHomeComponent,
            employee_register_component_1.EmployeeRegisterComponent,
            nav_bar_component_1.NavBarComponent,
            employee_login_component_1.EmployeeLoginComponent,
            employee_dashboard_component_1.EmployeeDashboardComponent],
        bootstrap: [employee_app_component_1.EmployeeAppComponent],
        providers: [auth_service_1.AuthService,
            pager_service_1.PagerService,
            { provide: http_2.RequestOptions, useClass: custom_request_options_1.CustomRequestOptions }]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map