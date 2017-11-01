import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppComponent} from './layouts/app.component';
import {AppRoutingModule} from './routes/app-routing.module';
import {AuthenticationService} from './services/authentication.service';
import {AuthGuardGuard} from './routes/auth-guard.guard';
import {MasterDashboardComponent} from './layouts/master-dashboard.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    AppComponent,
    MasterDashboardComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthenticationService, AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
