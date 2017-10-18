import {Component, Input} from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail-id',
  templateUrl: './hero-detail-id.component.html',
  styleUrls: ['./app.component.css']
})

export class HeroDetailIdComponent {
  @Input() hero2: Hero;
}
