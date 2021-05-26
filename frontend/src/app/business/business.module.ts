import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BusinessRoutingModule } from './business-routing.module';

import { StoreModule } from '@ngrx/store';
import { businessReducer } from './state/reducer/business.reducer';

import { EffectsModule } from '@ngrx/effects';
import { BusinessEffects } from './state/effect/business.effect';

import { BusinessBaseComponent } from './component/business-base/business-base.component';
import { BusinessChooserComponent } from './component/business-chooser/business-chooser.component';
import { BusinessHeaderComponent } from './component/business-header/business-header.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EmployeeManagerComponent } from './component/employee-manager/employee-manager.component';
import { OfferManagerComponent } from './component/offer-manager/offer-manager.component';
import { ReservationListComponent } from './component/reservation-list/reservation-list.component';
import { ReservationOverviewComponent } from './component/reservation-overview/reservation-overview.component';

import { EmployeeService } from './service/employee.service';

@NgModule({
  declarations: [
    BusinessBaseComponent,
    BusinessChooserComponent,
    BusinessHeaderComponent,
    DashboardComponent,
    EmployeeManagerComponent,
    OfferManagerComponent,
    ReservationListComponent,
    ReservationOverviewComponent
  ],
  imports: [
    SharedModule,
    BusinessRoutingModule,
    StoreModule.forFeature('business', businessReducer),
    EffectsModule.forFeature([BusinessEffects])
  ],
  providers: [
    EmployeeService
  ]
})
export class BusinessModule { }
