import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { OfferRoutingModule } from './offer-routing.module';
import { ReservationCreatorComponent } from './component/reservation-creator/reservation-creator.component';
import { StoreModule} from '@ngrx/store';
import { reservationReducer } from './state/reducer/reservation.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ReservationEffects } from './state/effect/reservation.effect';

@NgModule({
  imports: [
    SharedModule,
    OfferRoutingModule,
    StoreModule.forFeature('reservation', reservationReducer),
    EffectsModule.forFeature([ReservationEffects])
  ],
  declarations: [ReservationCreatorComponent]
})
export class OfferModule { }
