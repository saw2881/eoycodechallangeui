import { NgModule, OnInit } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import {RouterModule} from '@angular/router'
import {RequestOptions} from '@angular/http'

import { EmployeeHomeComponent } from './employee-home.component'
import { EmployeeRegisterComponent } from './employee-register.component'
import {EmployeeAppComponent} from './employee-app.component'
import { NavBarComponent } from './nav-bar.component'
import { EmployeeLoginComponent } from './employee-login.component'
import { EmployeeDashboardComponent } from './employee-dashboard.component'
import {AuthService} from './services/auth.service'
import {appRoutes} from './routes'
import {CustomRequestOptions} from './shared/custom-request-options'
import {PagerService} from './services/pager.service'


@NgModule({
    imports: [BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule],
    declarations: [EmployeeAppComponent,
    EmployeeHomeComponent,
    EmployeeRegisterComponent,
    NavBarComponent,
    EmployeeLoginComponent,
    EmployeeDashboardComponent],
    bootstrap: [EmployeeAppComponent],
    providers: [AuthService,
    PagerService,
    {provide: RequestOptions, useClass: CustomRequestOptions }]
})
export class AppModule {

}
