import { Component, forwardRef, Inject } from '@angular/core';
import { NgModel } from '@angular/forms';

import { Hero } from '../hero';
import { OverlayService } from '../overlay.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent {

  model = new Hero();

  constructor(
    // Stops the program from crashing due to circular dependency
    @Inject(forwardRef(() => OverlayService))
    private overlayService: OverlayService
  ) { }

  closeOverlay(): void {
    this.overlayService.close();
  }

}
