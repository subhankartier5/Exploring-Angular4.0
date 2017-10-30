import {Injectable, OnInit} from '@angular/core';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../constants/constants';

@Injectable()
export class AuthenticationService implements OnInit {
  isError = false;
  error: string;
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
    localStorage.removeItem('currentUser');
  }

  /**
   * check if the user is logged in or not
   * @return {boolean}
   */
  get userLoggedIn(): boolean {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      return false;
    }
  }
}
