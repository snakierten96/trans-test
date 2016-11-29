import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemsListComponent, ItemsResolveService } from './items-list';
import { ItemDetailComponent, ItemDetailResolveService } from './item-detail';

const routes: Routes = [
  { 
    path: 'browse',
    component: ItemsListComponent,
    resolve: {
      items: ItemsResolveService
    }
  },
  { 
    path: 'item/:id',
    component: ItemDetailComponent,
    resolve: {
      data: ItemDetailResolveService
    }
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ItemsRoutingModule {}