import { Component, forwardRef, Inject } from '@angular/core';
import { OverlayService } from '../overlay.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent {

  constructor(
    // Stops the program from crashing due to circular dependency
    @Inject(forwardRef(() => OverlayService))
    private overlayService: OverlayService
  ) { }

  closeOverlay(): void {
    this.overlayService.close();
  }

}
