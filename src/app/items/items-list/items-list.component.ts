import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs/Rx';

import { IItem } from '../item';

@Component({
  selector: 'app-items',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
  encapsulation: ViewEncapsulation.None
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
