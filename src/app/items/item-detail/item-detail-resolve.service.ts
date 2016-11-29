import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { IItemDetail } from '../item';
import { ItemsService } from '../items.service';

@Injectable()
export class ItemDetailResolveService implements Resolve<Observable<IItemDetail>> {

  constructor(private itemsSerice: ItemsService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<IItemDetail> {
    return this.itemsSerice.getItem(+route.params['id'])
      .flatMap(item => {
        return this.itemsSerice.getRandom(item.id).toArray()
          .map(random => { return <IItemDetail>{ item, random } })
      })
  } 

}
