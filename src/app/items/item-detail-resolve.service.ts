import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { IItem } from './item';
import { ItemsService } from './items.service';

@Injectable()
export class ItemDetailResolveService implements Resolve<Observable<IItem>> {

  constructor(private itemsSerice: ItemsService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.itemsSerice.getItem(+route.params['id'])
      .flatMap(item => {
        console.log(JSON.stringify(item));
        return this.itemsSerice.getRandom(item.id).toArray()
          .map(random => {
             console.log(JSON.stringify(random));
             return { item, random }; 
          })
      })
  } 

}
