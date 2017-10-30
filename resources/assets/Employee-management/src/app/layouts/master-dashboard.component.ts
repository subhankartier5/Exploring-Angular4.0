import {Component} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-master-dashboard',
  templateUrl: './master-dashboard.component.html',
  styleUrls: ['./master-dashboard.component.css']
})

export class MasterDashboardComponent {
  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }
  logout(): void {
    this.authenticationService.doLogOut();
    this.router.navigate(['/login']);
  }
}
