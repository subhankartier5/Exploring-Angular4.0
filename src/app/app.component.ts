import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  {id: 1, name: 'Subhankar Roy'},
  {id: 2, name: 'Durlav Banerjee'},
  {id: 3, name: 'Abhijit Bind'},
  {id: 4, name: 'Samrin Ahmed'},
  {id: 5, name: 'Prodipto Dhar'},
  {id: 6, name: 'Samim Almamun'},
  {id: 7, name: 'Akash Pradeep Jatua'},
  {id: 8, name: 'Malay Dhar'},
  {id: 9, name: 'Gargi Pal'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedHero: Hero;
  title = 'Tour of Heroes';
  heroes = HEROES;

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
