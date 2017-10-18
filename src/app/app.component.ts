import { Component } from '@angular/core';
import { Hero } from './hero';
import {HeroService} from './services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent  {
  heroes: Hero[];
  constructor(private heroService: HeroService) {
    // getting heroes data asnychronusly using promise
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  selectedHero: Hero;
  title = 'Tour of Heroes';

  /**
   *
   * @param {Hero} hero
   * @return void
   */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }
}
