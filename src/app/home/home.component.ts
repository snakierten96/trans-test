import { Component, OnInit, OnDestroy,
  trigger, state, style, transition, animate } from '@angular/core';

import { Subscription } from 'rxjs/Rx';

import { LoadingStateService } from '../loading-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('routeAnimation', [
      state('active',style({ opacity: 1, transform: 'scale(1)' })),
      state('inactive',style({ opacity: 0, transform: 'scale(.95)' })),
      transition('inactive => active',animate('1s ease-in')),
      transition('active => inactive',animate('1s 500ms ease-out'))
    ])
  ],
})
export class HomeComponent implements OnInit, OnDestroy {

  private _subscriptions: Subscription[] = [];

  state: string = 'inactive';

  constructor(private loadingState: LoadingStateService) { }

  ngOnInit(): void {
    this._subscriptions.push(this.loadingState.getState().subscribe(
      loading => this.state = (loading) ? 'inactive' : 'active',
      err => console.error(err)
    ));
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
    this._subscriptions = [];
  }

}
