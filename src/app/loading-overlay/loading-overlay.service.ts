import { Injectable } from '@angular/core';
import { Router, Event, NavigationStart,
         NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Overlay, OverlayState, OverlayRef, Portal, ComponentPortal } from '@angular/material';

import { Subscription } from 'rxjs/Rx';

import { LoadingOverlayComponent } from './loading-overlay.component';
import { LoadingStateService } from '../shared';

@Injectable()
export class LoadingOverlayService {

  private _subscriptions: Subscription[] = [];

  constructor(router: Router, private loadingState: LoadingStateService,
    private _overlay: Overlay) {

    let overlayRef = this._createOverlay();
    let portal = new ComponentPortal(LoadingOverlayComponent);

    this._subscriptions.push(router.events.subscribe(event => this._navigationInterceptor(event)));
    this._subscriptions.push(this.loadingState.getState().subscribe(loading => {
      if (loading) {
        overlayRef.attach(portal);
      } else {
        overlayRef.detach();
      }
    }));

  }

  releaseSubscriptions(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
    this._subscriptions = [];
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
