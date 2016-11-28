import { Component, OnInit, OnDestroy, ViewEncapsulation,
  trigger, state, style, transition, animate } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs/Rx';

import { IItem, IItemDetail } from '../item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('routeAnimation', [
      state('*',style({ opacity: 1, transform: 'scale(1)' })),
      transition(':enter', [ 
        style({ 
          opacity: 0, 
          transform: 'scale(.95)'
        }), 
        animate('1s ease-in')
      ]),
      transition(':leave', [
        animate('1s ease-out', style({
          opacity: 0,
          transform: 'scale(.95)'
        }))
      ])
    ])
  ],
})
export class ItemDetailComponent implements OnInit, OnDestroy {

  routeData: Subscription;
  item: IItem;
  random: IItem[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeData = this.route.data.subscribe(
      (data: { data: IItemDetail }) => {
        this.item = data.data.item;
        this.random = data.data.random;
      },
      err => console.error(err)        
    );
  }

  ngOnDestroy(): void {
    this.routeData.unsubscribe();
  }

}
