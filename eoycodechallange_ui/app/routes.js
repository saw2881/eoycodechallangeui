"use strict";
var employee_app_component_1 = require("./employee-app.component");
var employee_register_component_1 = require("./employee-register.component");
var employee_home_component_1 = require("./employee-home.component");
var employee_login_component_1 = require("./employee-login.component");
var employee_dashboard_component_1 = require("./employee-dashboard.component");
exports.appRoutes = [
    { path: "employee/registration", component: employee_register_component_1.EmployeeRegisterComponent },
    { path: "employee/home", component: employee_home_component_1.EmployeeHomeComponent },
    { path: "employee/login", component: employee_login_component_1.EmployeeLoginComponent },
    { path: "employee/dashboard", component: employee_dashboard_component_1.EmployeeDashboardComponent },
    { path: "employee", component: employee_app_component_1.EmployeeAppComponent },
    { path: "", redirectTo: "employee/home", pathMatch: "full" }
];
//# sourceMappingURL=routes.js.map