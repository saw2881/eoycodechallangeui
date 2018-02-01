import { Component } from '@angular/core'
import { AuthService } from './services/auth.service'
import { IEmployeeDetail } from './models/employee-detail.model'
import { Router } from '@angular/router'

@Component({
  selector: 'nav-bar',
  template: `<div class="navbar-fixed" style="margin-bottom: 50px;">
    <nav>
      <div class="nav-wrapper">
        <a href="/" class="brand-logo">
          <img src="app/assets/images/eoy_brand.png" class="brand-image" alt="EOY Code Challenge" />
        </a>
        <ul class="right hide-on-med-and-down">
          <li><a *ngIf="!authService.currentUser" class="waves-effect waves-light btn" [routerLink]="['/employee/login']">Login</a></li>
          <li><a *ngIf="!authService.currentUser" class="waves-effect waves-light btn" [routerLink]="['/employee/registration']">Register</a></li>
          <li>
            <div style="margin-top: 15px; font-weight: bold;" *ngIf="authService.currentUser" class="chip right">
                <i class="material-icons">account_circle</i>
                {{authService.currentUser.employeeName}}
            </div>
          </li>
          <li>
            <a *ngIf="authService.currentUser" class="waves-effect waves-light btn" (click)="logout()">SIGN OUT</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>`,
  styles: [`nav { background-color: #EEEEEE}`]
})
export class NavBarComponent {

  constructor(private authService: AuthService, private router: Router) {

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/employee/login']);
  }

}