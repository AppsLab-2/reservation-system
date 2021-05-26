import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { BusinessState, selectSelectedId } from '../../state/state/business.state';
import { Offer } from '../../../core/model/offer.model';
import { OfferService } from '../../../core/service/offer.service';

@Component({
  selector: 'hera-offer-manager',
  templateUrl: './offer-manager.component.html',
  styleUrls: ['./offer-manager.component.scss']
})
export class OfferManagerComponent implements OnInit, OnDestroy {

  offers?: Offer[];
  private subscription!: Subscription;

  constructor(
    private readonly store$: Store<{ business: BusinessState }>,
    private readonly offerService: OfferService
  ) { }

  ngOnInit(): void {
    this.subscription = this.store$.select(selectSelectedId).pipe(
      mergeMap(id =>
        this.offerService.getOffersByBusiness(id as number)
      )
    ).subscribe(offers => this.offers = offers);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
