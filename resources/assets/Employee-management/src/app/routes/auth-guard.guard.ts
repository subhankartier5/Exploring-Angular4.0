import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthGuardGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // return this.authenticationService.userLoggedIn;
    // this.router.navigate(['/login']);
    if (this.authenticationService.userLoggedIn) {
      return this.authenticationService.userLoggedIn;
    } else {
      this.router.navigate(['login']);
    }
  }
}
