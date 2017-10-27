import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: '../login/login.component.html',
})
export class LoginComponent  {
  constructor(private router: Router, protected authenticationService: AuthenticationService) {}
  title     = 'Login';
  email: string;
  password: string;
  responseData: any;
  onSubmit(loginFormData: NgForm) {
    this.email = loginFormData.value.email;
    this.password = loginFormData.value.password;
    this.responseData = this.authenticationService.doLogin({'email': this.email, 'password': this.password});
    this.responseData.subscribe(
      data => {
        if (data.status) {
          this.authenticationService.loggedIn   = true;
          this.authenticationService.auth_token = data.token;
          localStorage.setItem('currentUser', JSON.stringify({ username: this.email, token: this.authenticationService.auth_token }));
          this.router.navigate(['/dashboard']);
        } else {
          this.authenticationService.isError = true;
          this.authenticationService.loggedIn   = false;
          this.authenticationService.error = 'Something went wrong! can not be able to sign you in.';
        }
      },
      err => {
        this.authenticationService.isError = true;
        this.authenticationService.loggedIn   = false;
        this.authenticationService.error = err.error.response;
      }
    );
  }
  closeDiv(): void { this.authenticationService.isError = false; }
}
