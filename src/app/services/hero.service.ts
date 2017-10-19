import { Injectable } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Injectable()

export class HeroService {
  /**
   * @return Hero
   * list of all heroes populated from here when app loads
   */
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  /**
   * @return {Promise<Hero[]>}
   * to reduce server latency return promise hero asnyc after 1 milisecond
   */
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay (if huge set data comes it wouldn't stop page for data)
      setTimeout(() => resolve(this.getHeroes()), 1000);
    });
  }

  /**
   * @param {number} id
   * @return {Promise<Hero>}
   */
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
