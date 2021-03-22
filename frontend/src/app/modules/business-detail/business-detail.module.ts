import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BusinessDetailRoutingModule } from './business-detail-routing.module';
import { BusinessDetailComponent } from './component/business-detail/business-detail.component';
import { AddressCardComponent } from './component/address-card/address-card.component';

@NgModule({
  imports: [
    SharedModule,
    BusinessDetailRoutingModule
  ],
  declarations: [BusinessDetailComponent, AddressCardComponent]
})
export class BusinessDetailModule { }
