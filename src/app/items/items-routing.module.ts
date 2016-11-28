import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemsListComponent } from './items-list';
import { ItemDetailComponent } from './item-detail';

import { ItemsResolveService } from './items-resolve.service';
import { ItemDetailResolveService } from './item-detail-resolve.service';

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