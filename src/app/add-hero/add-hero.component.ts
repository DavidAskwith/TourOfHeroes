import { Component, forwardRef, Inject } from '@angular/core';

import { NgModel } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Hero } from '../hero';
import { ExitWarnDialogComponent } from '../exit-warn-dialog/exit-warn-dialog.component';
import { OverlayService } from '../overlay.service';
import { HeroesService } from '../heroes.service';

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
    // Stops the program from crashing due to circular dependency
    @Inject(forwardRef(() => OverlayService)) private overlayService: OverlayService,
    private heroService: HeroesService,
    public dialog: MatDialog,
    private fb: FormBuilder
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
        console.log(resp);
      });
      this.overlayService.close();
  }

  openExitWarn (hero: Hero): void {

    if (this.rForm.dirty) {
      const dialogRef =  this.dialog.open(ExitWarnDialogComponent);
      dialogRef.afterClosed().subscribe( close => {
        if (close) {
          this.overlayService.close();
        }
      });
    } else {
      this.overlayService.close();
    }

  }

}
