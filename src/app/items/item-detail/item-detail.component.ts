import { Component, OnInit, OnDestroy, ViewEncapsulation,
  trigger, state, style, transition, animate } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Rx';

import { IItem, IItemDetail } from '../item';
import { LoadingStateService } from '../../shared';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('detailState', [
      state('active',style({ opacity: 1, transform: 'scale(1)' })),
      state('inactive',style({ opacity: 0, transform: 'scale(.95)' })),
      transition('inactive => active',animate('1s ease-in')),
      transition('active => inactive',animate('1s 500ms ease-out'))
    ])
  ],
})
export class ItemDetailComponent implements OnInit, OnDestroy {

  private _subscriptions: Subscription[] = [];

  item: IItem;
  random: IItem[];
  state: string = "inactive";

  constructor(private route: ActivatedRoute, private loadingState: LoadingStateService) { }

  ngOnInit(): void {
    this._subscriptions.push(this.route.data.subscribe(
      (data: { data: IItemDetail }) => {
        this.item = data.data.item;
        this.random = data.data.random;
      },
      err => console.error(err)        
    ));
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
