import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';

const routes: Route[] = [
  { path: '', component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }