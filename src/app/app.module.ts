import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroDetailIdComponent } from  './hero-detail-id.component';
import {FormsModule} from '@angular/forms'; // <-- ngModel Lives here

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroDetailIdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
