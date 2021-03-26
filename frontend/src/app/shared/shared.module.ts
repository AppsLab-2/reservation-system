import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { BusinessCardComponent } from './component/business-card/business-card.component';
import { MapComponent } from './component/map/map.component';
import { HeaderComponent } from './component/header/header.component';
import { OfferCardComponent } from './component/offer-card/offer-card.component';

@NgModule({
  declarations: [
    BusinessCardComponent,
    MapComponent,
    HeaderComponent,
    OfferCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    BusinessCardComponent,
    MapComponent,
    HeaderComponent,
    OfferCardComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
