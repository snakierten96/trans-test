import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemsListComponent } from './items-list';
import { ItemDetailComponent } from './item-detail';


const routes: Routes = [
  { path: 'browse', component: ItemsListComponent },
  { path: 'item/:id', component: ItemDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ]
})
export class ItemsRoutingModule {}