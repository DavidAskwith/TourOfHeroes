import { OverlayRef } from '@angular/cdk/overlay';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import { Hero } from './hero';

export class AddHeroOverlayRef {

  /** Subject for notifying the user that the dialog has finished closing. */
  private _afterClosed = new Subject<any | undefined>();

  constructor(private overlayRef: OverlayRef) {}

  close(hero?: Hero): void {
    this.overlayRef.dispose();
    this._afterClosed.next(hero);
    this._afterClosed.complete();
  }

  afterClosed(): Observable<any | undefined> {
    return this._afterClosed.asObservable();
  }
}
