import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ClientRoutingModule } from './client-routing.module';

import { StoreModule } from '@ngrx/store';
import { detailReducer } from './store/reducer/detail.reducer';
import { homeReducer } from './store/reducer/home.reducer';
import { reservationReducer } from './store/reducer/reservation.reducer';

import { EffectsModule } from '@ngrx/effects';
import { DetailEffects } from './store/effect/detail.effect';
import { HomeEffects } from './store/effect/home.effect';
import { ReservationEffects } from './store/effect/reservation.effect';

import { AddressCardComponent } from './component/address-card/address-card.component';
import { BusinessDetailComponent } from './component/business-detail/business-detail.component';
import { HomeComponent } from './component/home/home.component';
import { ReservationCreatorComponent } from './component/reservation-creator/reservation-creator.component';
import { SearchComponent } from './component/search/search.component';


@NgModule({
  imports: [
    SharedModule,
    ClientRoutingModule,
    // TODO: do this properly
    StoreModule.forFeature('detail', detailReducer),
    StoreModule.forFeature('home', homeReducer),
    StoreModule.forFeature('reservation', reservationReducer),
    EffectsModule.forFeature([
      DetailEffects,
      HomeEffects,
      ReservationEffects
    ])
  ],
  declarations: [
    AddressCardComponent,
    BusinessDetailComponent,
    HomeComponent,
    ReservationCreatorComponent,
    SearchComponent
  ]
})
export class ClientModule { }
