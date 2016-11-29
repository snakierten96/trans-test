import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { ItemsService } from './items.service';
import { ItemsListComponent, ItemsResolveService } from './items-list';
import { ItemDetailComponent, ItemDetailResolveService } from './item-detail';
import { ItemsRoutingModule } from './items-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ItemsRoutingModule
  ],
  declarations: [
    ItemsListComponent,
    ItemDetailComponent
  ],
  providers:[
    ItemsService,
    ItemsResolveService,
    ItemDetailResolveService
  ]
})
export class ItemsModule { }