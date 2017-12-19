import { Component, forwardRef, Inject } from '@angular/core';

import { NgModel } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Hero } from '../hero';
import { ExitWarnDialogComponent } from '../exit-warn-dialog/exit-warn-dialog.component';
import { HeroesService } from '../heroes.service';
import { AddHeroOverlayRef } from '../add-hero-overlay-ref';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent {

  // Model for the entered form data
  hero = new Hero();

  rForm: FormGroup;

  constructor(
    private heroService: HeroesService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private dialogRef: AddHeroOverlayRef
  ) {

    this.rForm = fb.group({
      'name': [null, Validators.required],
      'realName': [null, Validators.required],
      'height': [null, Validators.min(0.1)],
      'weight': [null, Validators.min(0.1)],
      'description': [null, Validators.required],
      'powers': null,
      'abilities': null,
      'groups': null
    });

  }

  // Handles the forms post
  postHero(post) {
    if (this.rForm.valid) {
      this.hero = post;
      this.addHero();
    }
  }

  // Calls heroservice method to create hero
  // the posted hero is return in a promise
  addHero() {

    this.heroService.create(this.hero)
      .then(resp => {
        this.hero = resp;
      });
      this.dialogRef.close(this.hero);
  }

  openExitWarn (hero: Hero): void {

    // Runs if the form has data entered
    if (this.rForm.dirty) {

      // Opens a warning dialog
      const exitWarnDialogRef =  this.dialog.open(ExitWarnDialogComponent);

      // If discard is chosen the addhero dialog is closed
      exitWarnDialogRef.afterClosed().subscribe( close => {
        if (close) {
          this.dialogRef.close();
        }
      });

    } else {
      this.dialogRef.close();
    }

  }

}
