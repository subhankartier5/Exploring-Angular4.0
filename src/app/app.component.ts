import { Component } from '@angular/core';
import { Hero } from './hero';
import {HeroService} from './services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./heroes.component.css']
})
export class AppComponent  {
  title = 'Tour of Heroes';
}
