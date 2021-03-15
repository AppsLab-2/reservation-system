import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BusinessDetailComponent } from './component/business-detail/business-detail.component';

const routes: Route[] = [
  { path: ':id', component: BusinessDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessDetailRoutingModule { }
