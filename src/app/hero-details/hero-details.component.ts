import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { HeroesService} from '../heroes.service';
import { Hero } from '../hero';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private heroesService: HeroesService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
    .switchMap((params: ParamMap) =>
      this.heroesService.getHero(+params.get('id')))
    .subscribe(hero => this.hero = hero);
  }

}
