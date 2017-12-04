import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    public dialog: MatDialog,
    private heroesService: HeroesService,
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (name) {
      this.heroesService.create(name)
        .then((hero) => {
          this.heroes.push(hero);
          this.selectedHero = null;
        });
    }
  }

  delete(hero: Hero): void {
    this.heroesService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

  openDialog(hero: Hero): void {
    this.dialog.open(HeroDetailsComponent, {
      data: { hero: hero }
    });
  }

}
