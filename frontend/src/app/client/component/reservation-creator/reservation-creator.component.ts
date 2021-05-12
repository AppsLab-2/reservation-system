import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatHorizontalStepper } from '@angular/material/stepper';

import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { choosePitch, createReservation, getDates, getOffer, getPitches } from '../../store/action/reservation.action';
import {
  selectDates,
  selectFinished,
  selectHasError,
  selectLoading,
  selectOffer,
  selectPitches,
  selectSelectedDate,
  selectSelectedPitch
} from '../../store/state/reservation.state';

import { Offer } from '../../../core/model/offer.model';
import { Pitch } from '../../../core/model/pitch.model';

@Component({
  selector: 'hera-reservation-creator',
  templateUrl: './reservation-creator.component.html',
  styleUrls: ['./reservation-creator.component.scss']
})
export class ReservationCreatorComponent implements OnInit, OnDestroy {

  loading = true;
  hasError = false;
  offer?: Offer;
  dates?: Date[];
  selectedDate?: Date;
  pitches?: Pitch[];
  selectedPitch?: Pitch;
  displayColumns = ['id', 'date', 'time', 'select'];

  @ViewChild('stepper')
  private stepper!: MatHorizontalStepper;
  private unsubscribe$ = new Subject();

  constructor(
    private readonly store$: Store,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const rawId: string | null = this.route.snapshot.paramMap.get('id');
    const id: number = rawId !== null ? +rawId : 0;
    this.store$.dispatch(getOffer({ id }));

    this.store$.select(selectLoading).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(loading => this.loading = loading);

    this.store$.select(selectHasError).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(hasError => this.hasError = hasError);

    this.store$.select(selectOffer).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(offer => {
      if (offer) {
        this.store$.dispatch(getDates());
      }
      this.offer = offer;
    });

    this.store$.select(selectDates).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(dates => this.dates = dates);

    this.store$.select(selectSelectedDate).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(selectedDate => {
      if (selectedDate) {
        this.stepper.next();
      }
      this.selectedDate = selectedDate;
    });

    this.store$.select(selectPitches).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(pitches => this.pitches = pitches);

    this.store$.select(selectSelectedPitch).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(selectedPitch => {
      if (selectedPitch) {
        this.stepper.next();
      }
      this.selectedPitch = selectedPitch;
    });

    this.store$.select(selectFinished).pipe(
      takeUntil(this.unsubscribe$),
      filter(finished => finished)
    ).subscribe(() => alert('Created!'));
  }

  onSelectDate(date: Date): void {
    this.store$.dispatch(getPitches({ date }));
  }

  onSelectPitch(pitch: Pitch): void {
    this.store$.dispatch(choosePitch({ pitch }));
  }

  reserve(): void {
    this.store$.dispatch(createReservation());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
