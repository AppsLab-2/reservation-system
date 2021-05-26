import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReservationService } from '../../../core/service/reservation.service';
import { Subject } from 'rxjs';
import { Reservation } from '../../../core/model/reservation.model';
import { Store } from '@ngrx/store';
import { BusinessState, selectSelectedId } from '../../state/state/business.state';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'hera-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  activeReservations?: Reservation[];
  upcomingReservations?: Reservation[];

  private businessId!: number;
  private reservations?: Reservation[];
  private unsubscribe$ = new Subject();

  constructor(
    private readonly store$: Store<{ business: BusinessState }>,
    private readonly reservationService: ReservationService
  ) { }

  ngOnInit(): void {
    // TODO: reload/divide based on intervals
    this.store$.select(selectSelectedId).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(id => {
      this.businessId = id as number;
      this.reloadReservations();
    });
  }

  reloadReservations(): void {
    this.reservationService.getTodayReservationsByBusiness(this.businessId).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(reservations => {
      this.reservations = reservations;
      this.divideReservations();
    });
  }

  divideReservations(): void {
    const active: Reservation[] = [];
    const upcoming: Reservation[] = [];

    this.reservations?.forEach(reservation => {
      const end = this.getEndTime(reservation);
      const now = new Date();

      if (now > end) {
        return;
      }

      const start = reservation.startDateTime;
      const reservations = now > start ? active : upcoming;
      reservations.push(reservation);
    });

    this.activeReservations = active;
    this.upcomingReservations = upcoming;
  }

  // TODO: move this conversion process
  getEndTime(reservation: Reservation): Date {
    const rawDuration = reservation.offer.duration;
    const parts = rawDuration.split(':');

    const time = new Date(reservation.startDateTime.valueOf());
    time.setSeconds(time.getSeconds() + +parts[2]);
    time.setMinutes(time.getMinutes() + +parts[1]);
    time.setSeconds(time.getSeconds() + +parts[0]);
    return time;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
