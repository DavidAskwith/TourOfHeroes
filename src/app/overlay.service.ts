import { Injectable, Component } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { AddHeroComponent } from './add-hero/add-hero.component';

@Injectable()
export class OverlayService {

  private overlayRef: OverlayRef;

  constructor(private overlay: Overlay) { }

  open() {

    // The possition config for the overlay
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    // Returns an OverlayRef which is a PortalHost
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'overlay-backdrop',
      panelClass: 'overlay',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    // Create ComponentPortal that can be attached to a PortalHost
    const componentPortal = new ComponentPortal(AddHeroComponent);

    // Attach ComponentPortal to PortalHost
    this.overlayRef.attach(componentPortal);

  }

  close() {
    this.overlayRef.dispose();
  }

}
