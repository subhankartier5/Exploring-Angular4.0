import { Component } from '@angular/core';
import {User} from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: '../login-form/login.component.html',
})
export class LoginComponent  {
  title = 'Login';
  user_model = new User('admin@gmail.com', '123456');
  submitted = false;
  onSubmit() {
    this.submitted = true ;
    console.log(this.user_model);
  }
  // get diagnostic() {
  //   return JSON.stringify(this.user_model);
  // }
}
