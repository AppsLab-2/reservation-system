import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BusinessRoutingModule } from './business-routing.module';
import { BusinessDetailComponent } from './component/business-detail/business-detail.component';
import { AddressCardComponent } from './component/address-card/address-card.component';
import { StoreModule } from '@ngrx/store';
import { detailReducer } from './store/reducer/detail.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DetailEffects } from './store/effect/detail.effect';

@NgModule({
  imports: [
    SharedModule,
    BusinessRoutingModule,
    StoreModule.forFeature('detail', detailReducer),
    EffectsModule.forFeature([DetailEffects])
  ],
  declarations: [
    BusinessDetailComponent,
    AddressCardComponent
  ]
})
export class BusinessModule { }
