import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: '../login-form/login.component.html',
})
export class LoginComponent  {
  title = 'Login';
  login(): void {
    alert('login request');
  }
}
