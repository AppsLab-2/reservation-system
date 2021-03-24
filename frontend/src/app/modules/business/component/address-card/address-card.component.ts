import { Component, Input } from '@angular/core';
import { Address } from '../../../../core/model/address.model';

@Component({
  selector: 'hera-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss']
})
export class AddressCardComponent {

  @Input() address?: Address;

}
