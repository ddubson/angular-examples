import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import {HttpItemsService} from './items/items-service/http-items.service';
import { ItemsDashboardComponent } from './items/items-dashboard/items-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemsDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
