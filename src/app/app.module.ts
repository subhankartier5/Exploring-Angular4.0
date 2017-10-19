import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroDetailIdComponent } from './hero-detail-id.component';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard.component';
import {FormsModule} from '@angular/forms'; // <-- ngModel Lives here
import {HeroService} from './services/hero.service';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './routes/app-routing.module';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    HeroDetailIdComponent,
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
