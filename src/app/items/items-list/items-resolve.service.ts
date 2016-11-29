import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { IItem } from '../item';
import { ItemsService } from '../items.service';

@Injectable()
export class ItemsResolveService implements Resolve<Observable<IItem>> {

  constructor(private itemsService: ItemsService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<IItem[]> {
    return this.itemsService.getItems().toArray();
  }

}
