import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './component/home.component';
import { StoreModule } from '@ngrx/store';
import { homeReducer } from './store/home.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './store/home.effect';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    HomeRoutingModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects])
  ]
})
export class HomeModule { }
