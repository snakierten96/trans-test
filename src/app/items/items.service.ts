import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import * as _ from 'lodash';

import { IItem } from './item';

@Injectable()
export class ItemsService {

  private itemsUrl = 'api/items';

  constructor(private http: Http) { }

  getItems(): Observable<IItem> {
    return this.http.get(this.itemsUrl)
      .flatMap(response => Observable.from(response.json().data));
  }

  getItem(id: number): Observable<IItem> {
    return this.getItems().filter(item => item.id === id).take(1);
  }

  getRandom(id: number): Observable<IItem> {
    return this.getItems()
      .filter(item => item.id !== id)
      .toArray()
      .flatMap(items => Observable.from(_.shuffle(items).slice(0,4)))
  }

}
