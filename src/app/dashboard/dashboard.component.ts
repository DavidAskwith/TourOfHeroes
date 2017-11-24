import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private heroesService: HeroesService,
    public dialog: MatDialog) { }

  ngOnInit(): void {

    this.heroesService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  openDialog(hero: Hero): void {
    this.dialog.open(HeroDetailsComponent, {
      width: '75%',
      data: { hero: hero }
    });
  }

}
