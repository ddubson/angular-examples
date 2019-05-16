import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ItemsComponent} from './items/items.component';
import {ItemsDashboardComponent} from './items/items-dashboard/items-dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'items-welcome', pathMatch: 'full'},
  {path: 'items-welcome', component: ItemsComponent},
  {path: 'items-dashboard', component: ItemsDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
