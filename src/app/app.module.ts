import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home';
import { ItemsModule } from './items';
import { LoadingStateService } from './loading-state.service';
import { LoadingOverlayComponent, LoadingOverlayService } from './loading-overlay';

@NgModule({
  declarations: [
    AppComponent,
    LoadingOverlayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MaterialModule.forRoot(),
    AppRoutingModule,
    HomeModule,
    ItemsModule
  ],
  entryComponents: [LoadingOverlayComponent],
  providers: [
    Title,
    LoadingStateService,
    LoadingOverlayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
