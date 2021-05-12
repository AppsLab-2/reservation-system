import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { BusinessDetailComponent } from './component/business-detail/business-detail.component';
import { ReservationCreatorComponent } from './component/reservation-creator/reservation-creator.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'business/:id', component: BusinessDetailComponent },
  { path: 'offer/:id', component: ReservationCreatorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
