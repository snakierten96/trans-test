import { Component, OnInit, OnDestroy, ViewEncapsulation,
  trigger, state, style, transition, animate } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs/Rx';

import { IItem } from '../item';

@Component({
  selector: 'app-items',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
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
export class ItemsListComponent implements OnInit, OnDestroy {

  routeData: Subscription;
  items: IItem[];
  selectedItem: IItem;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeData = this.route.data.subscribe(
      ( data: { items: IItem[] }) => this.items = data.items,
      err => console.error(err)
    );
  }

  ngOnDestroy(): void {
    this.routeData.unsubscribe();
  }

}
