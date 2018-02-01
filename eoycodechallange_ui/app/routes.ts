import { Routes } from '@angular/router'
import { EmployeeAppComponent } from './employee-app.component'
import { EmployeeRegisterComponent } from './employee-register.component'
import { EmployeeHomeComponent } from './employee-home.component'
import { EmployeeLoginComponent } from './employee-login.component'
import {EmployeeDashboardComponent} from './employee-dashboard.component'

export const appRoutes: Routes = [
    { path: "employee/registration", component: EmployeeRegisterComponent },
    { path: "employee/home", component: EmployeeHomeComponent },
    { path: "employee/login", component: EmployeeLoginComponent },
    { path: "employee/dashboard", component: EmployeeDashboardComponent },
    { path: "employee", component: EmployeeAppComponent },
    { path: "", redirectTo: "employee/home", pathMatch: "full" }
];