import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { ItemsListComponent } from './items-list';
import { ItemDetailComponent } from './item-detail';
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
  ]
})
export class ItemsModule { }