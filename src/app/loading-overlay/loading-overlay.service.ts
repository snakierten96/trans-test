import { Injectable } from '@angular/core';
import { Router, Event, NavigationStart,
         NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Overlay, OverlayState, OverlayRef, Portal, ComponentPortal } from '@angular/material';

import { LoadingOverlayComponent } from './loading-overlay.component';
import { LoadingStateService } from '../loading-state.service';

@Injectable()
export class LoadingOverlayService {

  constructor(router: Router, private loadingState: LoadingStateService,
    private _overlay: Overlay) {

    let overlayRef = this._createOverlay();
    let portal = new ComponentPortal(LoadingOverlayComponent);

    router.events.subscribe(event => this._navigationInterceptor(event));
    this.loadingState.getState().subscribe(loading => {
      if (loading) {
        overlayRef.attach(portal);
      } else {
        overlayRef.detach();
      }
    });

  }

  private _navigationInterceptor (event: Event): void {

    if (event instanceof NavigationStart) {
      this.loadingState.setState(true);
    }
    if (event instanceof (NavigationEnd || NavigationCancel || NavigationError)) {
      this.loadingState.setState(false);
    }
    if (event instanceof NavigationEnd) {
      window.scrollTo(0,0);
    }
  }

  private _getOverlayState(): OverlayState {
    let state = new OverlayState();

    state.hasBackdrop = true;
    state.positionStrategy = this._overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    return state;
  }

  private _createOverlay(): OverlayRef {
    let overlayState = this._getOverlayState();
    return this._overlay.create(overlayState);
  }

}
