import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {LoginComponent} from '../login/login.component';
import {AuthGuardGuard} from './auth-guard.guard';
import {AddEmployeeComponent} from '../add-employee/add-employee.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'dashboard',  component: DashboardComponent , canActivate: [AuthGuardGuard]},
  { path: 'add-employee', component: AddEmployeeComponent, canActivate: [AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
