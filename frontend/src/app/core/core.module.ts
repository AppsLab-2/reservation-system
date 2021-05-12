import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from './guard/module-import.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { LandingComponent } from './component/landing/landing.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

import { AuthService } from './service/auth.service';
import { BusinessService } from './service/business.service';
import { OfferService } from './service/offer.service';
import { PitchService } from './service/pitch.service';
import { ProfileService } from './service/profile.service';
import { ReservationService } from './service/reservation.service';
import { FavoriteService } from './service/favorite.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    BusinessService,
    FavoriteService,
    OfferService,
    PitchService,
    ProfileService,
    ReservationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  declarations: [
    LandingComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    throwIfAlreadyLoaded(parent, 'CoreModule');
  }
}
