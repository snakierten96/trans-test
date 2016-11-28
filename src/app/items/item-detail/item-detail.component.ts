import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs/Rx';

import { IItem } from '../item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemDetailComponent implements OnInit, OnDestroy {

  routeData: Subscription;
  item: IItem;
  random: IItem[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeData = this.route.data.subscribe(
      (data: { data: { item: IItem, random: IItem[] }}) => {
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
