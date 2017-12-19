import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';
import { OverlayService } from '../overlay.service';
import { AddHeroOverlayRef } from '../add-hero-overlay-ref';

import { HeroDetailsComponent } from '../hero-details/hero-details.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(
    public dialog: MatDialog,
    private heroesService: HeroesService,
    private overlay: OverlayService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  delete(hero: Hero): void {
    this.heroesService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
      });
  }

  openDialog(hero: Hero): void {
    this.dialog.open(HeroDetailsComponent, {
      data: { hero: hero }
    });
  }

  showOverlay(): void {

    // Opens overlay and holds remote control for
    const dialogRef: AddHeroOverlayRef = this.overlay.open();


    // Adds the newly created hero to the heroes after 
    // the add-hero dialog closes
    dialogRef.afterClosed().subscribe( resp => {
      this.heroes.push(resp);
    });

  }


}
