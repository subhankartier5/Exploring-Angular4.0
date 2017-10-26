import { Component } from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: '../dashboard/dashboard.component.html',
})
export class DashboardComponent  {
  constructor(private loginComponent: LoginComponent, private router: Router) {}
  logout(): void {
    this.loginComponent.loggedIn = false;
    this.loginComponent.auth_token = null;
    localStorage.removeItem('currentUser');
    if (!this.loginComponent.auth_token) {
      this.router.navigate(['/']);
    }
  }
}

