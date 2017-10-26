import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LoginService} from './services/login-service';
import {AppRoutingModule} from './routes/app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LoginService],
  bootstrap: [LoginComponent]
})
export class AppModule { }
