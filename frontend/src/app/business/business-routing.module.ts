import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BusinessBaseComponent } from './component/business-base/business-base.component';
import { BusinessChooserComponent } from './component/business-chooser/business-chooser.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EmployeeManagerComponent } from './component/employee-manager/employee-manager.component';
import { OfferManagerComponent } from './component/offer-manager/offer-manager.component';
import { ReservationOverviewComponent } from './component/reservation-overview/reservation-overview.component';

const routes: Route[] = [
  { path: '', component: BusinessChooserComponent },
  {
    path: ':id',
    component: BusinessBaseComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employees', component: EmployeeManagerComponent },
      { path: 'offers', component: OfferManagerComponent },
      { path: 'reservations', component: ReservationOverviewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
