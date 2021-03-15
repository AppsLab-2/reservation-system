import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './component/landing/landing.component';

@NgModule({
  imports: [
    SharedModule,
    LandingRoutingModule
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }
