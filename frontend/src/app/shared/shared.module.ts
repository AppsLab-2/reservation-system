import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { BusinessCardComponent } from './component/business-card/business-card.component';
import { MapComponent } from './component/map/map.component';
import { HeaderComponent } from './component/header/header.component';
import { OfferCardComponent } from './component/offer-card/offer-card.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { SearchNavBarComponent } from './component/search-nav-bar/search-nav-bar.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AccountCardComponent } from './component/account-card/account-card.component';

@NgModule({
  declarations: [
    BusinessCardComponent,
    MapComponent,
    HeaderComponent,
    OfferCardComponent,
    NavBarComponent,
    SearchBarComponent,
    SearchNavBarComponent,
    CalendarComponent,
    AccountCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    BusinessCardComponent,
    MapComponent,
    HeaderComponent,
    OfferCardComponent,
    NavBarComponent,
    SearchBarComponent,
    SearchNavBarComponent,
    CalendarComponent,
    AccountCardComponent
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
