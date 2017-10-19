import { Component } from '@angular/core';
import { Hero } from './hero';
import {HeroService} from './services/hero.service';
import {AppRoutingModule} from './routes/app-routing.module';
import {Router} from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService, private router: Router) {
    // getting heroes data asnychronusly using promise
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  /**
   *
   * @param {Hero} hero
   * @return void
   */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
