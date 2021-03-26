import { Component, Input, OnInit } from '@angular/core';
import { Offer } from '../../../core/model/offer.model';

@Component({
  selector: 'hera-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss'],
})
export class OfferCardComponent implements OnInit {
  @Input() offer?: Offer;

  constructor() {}

  ngOnInit(): void {}
}
