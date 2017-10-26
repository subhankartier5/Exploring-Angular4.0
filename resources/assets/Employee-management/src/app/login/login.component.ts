import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Constants} from '../constants/constants';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../services/login-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: '../login/login.component.html',
})
export class LoginComponent  {
  constructor(private http: HttpClient, private loginService: LoginService, private router: Router) {}
  title     = 'Login';
  email: string;
  password: string;
  req_body: object;
  error: string;
  isError = false;
  auth_token: string;
  username: string;
  loggedIn: boolean;
  onSubmit(loginFormData: NgForm) {
    this.email = loginFormData.value.email;
    this.password = loginFormData.value.password;
    this.req_body = {email: this.email, password: this.password};
    this.http.post<LoginResponse>(Constants.loginUrl, this.req_body)
      .subscribe(
        data => {
          // redirect to dahsboard from here if status true and al well put token in local storage
          if (data.status) {
              this.loggedIn = true;
              this.auth_token = data.token;
              this.loginService.getUserName().then(username => {
                this.username = username;
                localStorage.setItem('currentUser', JSON.stringify({ username: this.username, token: this.auth_token }));
              });
              this.router.navigate(['/dashboard']);
          } else {
            this.error = 'Error! connection refused. Please try again later';
            this.isError = true;
          }
        },
        error => {
          this.error = error.error.response;
          this.isError = true;
        });
  }
  closeDiv(): void { this.isError = false; }
}
