import { Injectable } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Injectable()

export class HeroService {
  /**
   * @return Hero
   * list of all heroes populated from here
   */
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay (if huge set data comes it wouldn't stop page for data)
      setTimeout(() => resolve(this.getHeroes()), 1000);
    });
  }
}
