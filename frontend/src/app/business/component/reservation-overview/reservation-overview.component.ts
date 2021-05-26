import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReservationService } from '../../../core/service/reservation.service';
import { Store } from '@ngrx/store';
import { BusinessState, selectSelectedId } from '../../state/state/business.state';
import { mergeMap } from 'rxjs/operators';
import { Reservation } from '../../../core/model/reservation.model';

@Component({
  selector: 'hera-reservation-overview',
  templateUrl: './reservation-overview.component.html',
  styleUrls: ['./reservation-overview.component.scss']
})
export class ReservationOverviewComponent implements OnInit, OnDestroy {

  map?: Map<Date, Reservation[]>;
  private subscription!: Subscription;

  constructor(
    private readonly store$: Store<{ business: BusinessState }>,
    private readonly reservationService: ReservationService
  ) { }

  ngOnInit(): void {
    this.subscription = this.store$.select(selectSelectedId).pipe(
      mergeMap(id => this.reservationService.getDatesToReservationsMapForBusiness(id as number))
    ).subscribe(map => this.map = map);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
