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
  error: string;
  isError = false;
  onSubmit(loginFormData: NgForm) {
    this.email = loginFormData.value.email;
    this.password = loginFormData.value.password;
    this.authenticationService.doLogin({'email': this.email, 'password': this.password});
    this.router.navigate(['/dashboard']);
  }
  closeDiv(): void { this.isError = false; }
}
