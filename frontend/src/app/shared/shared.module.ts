import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { BusinessCardComponent } from './component/business-card/business-card.component';
import { MapComponent } from './component/map/map.component';
import { CardsHeaderComponent } from './component/cards-header/cards-header.component';

@NgModule({
  declarations: [
    BusinessCardComponent,
    MapComponent,
    CardsHeaderComponent
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
    CardsHeaderComponent
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
