import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { ItemsListComponent } from './items-list';
import { ItemDetailComponent } from './item-detail';
import { ItemsRoutingModule } from './items-routing.module';

import { ItemsService } from './items.service';
import { ItemsResolveService } from './items-resolve.service';
import { ItemDetailResolveService } from './item-detail-resolve.service';

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