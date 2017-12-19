import { Injectable, Component, Injector } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';

import { AddHeroComponent } from './add-hero/add-hero.component';
import { AddHeroOverlayRef } from './add-hero-overlay-ref';

@Injectable()
export class OverlayService {

  private overlayRef: OverlayRef;

  constructor(
    private overlay: Overlay,
    private injector: Injector
  ) { }

  open() {

    const overlayRef = this.overlayConfig();

    // hold a reference to the opened dialog
    const dialogRef = new AddHeroOverlayRef(overlayRef);

    // Creates a injectable to pass the dialogRef
    const injector = this.createInjector(dialogRef);

    // Create ComponentPortal that can be attached to a PortalHost
    const addHeroPortal = new ComponentPortal(AddHeroComponent, null, injector);

    // Attach ComponentPortal to PortalHost
    overlayRef.attach(addHeroPortal);

    return dialogRef;

  }

  private overlayConfig() {

    // The possition config for the overlay
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    // Returns an OverlayRef which is a PortalHost
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'overlay-backdrop',
      panelClass: 'overlay',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayRef;
  }

  private createInjector(dialogRef: AddHeroOverlayRef) {

    // Instantiate new WeakMap for our custom injection tokens
    const injectionTokens = new WeakMap();

    // Set custom injection tokens
    injectionTokens.set(AddHeroOverlayRef, dialogRef);
    // injectionTokens.set(FILE_PREVIEW_DIALOG_DATA, config.data);

    // Instantiate new PortalInjector
    return new PortalInjector(this.injector, injectionTokens);
  }


}
