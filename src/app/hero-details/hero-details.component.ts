import { Component, Input, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { HeroesService} from '../heroes.service';
import { Hero } from '../hero';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html'
})
export class HeroDetailsComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    public dialogRef: MatDialogRef<HeroDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private heroesService: HeroesService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.hero = this.data.hero;
  }

}
