import {Injectable, OnInit} from '@angular/core';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../constants/constants';

@Injectable()
export class AuthenticationService implements OnInit {
  isError = false;
  error: string;
  loggedIn = false;
  auth_token: string;
  data_string: LoginResponse;
  /* class constructor */
  constructor(private http: HttpClient) {}
  /* on initialize service */
  ngOnInit() {
    this.isError = false;
  }

  /**
   * log user in
   * @param {User} userInfo
   */
  doLogin(userInfo: User): void {
    this.http.post(Constants.loginUrl, userInfo)
      .subscribe(
        data => {
          this.data_string = JSON.parse(JSON.stringify(data));
          this.loggedIn = true;
          this.auth_token = this.data_string.token;
          localStorage.setItem('currentUser', JSON.stringify({ username: userInfo.email, token: this.auth_token }));
        },
        err => {
          this.isError = true;
          this.error = err.error.response;
        }
      );
  }
  doLogOut(): void {
    this.loggedIn = false;
    this.auth_token = null;
    localStorage.removeItem('currentUser');
  }
}
