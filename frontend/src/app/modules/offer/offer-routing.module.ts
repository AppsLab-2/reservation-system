import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ReservationCreatorComponent } from './component/reservation-creator/reservation-creator.component';

const routes: Route[] = [
  { path: ':id', component: ReservationCreatorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }
