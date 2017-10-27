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
  doLogin(userInfo: User) {
    return this.http.post(Constants.loginUrl, userInfo);
  }

  /**
   * log user out
   */
  doLogOut(): void {
    this.loggedIn = false;
    this.auth_token = null;
    localStorage.removeItem('currentUser');
  }

  /**
   * check if the user is logged in or not
   * @return {boolean}
   */
  get userLoggedIn(): boolean {
    if (this.loggedIn && this.auth_token.length) {
      return true;
    } else {
      return false;
    }
  }
}
