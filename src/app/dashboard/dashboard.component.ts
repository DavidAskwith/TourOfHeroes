import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroesSevice: HeroesService) { }

  ngOnInit(): void {

    this.heroesSevice.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
