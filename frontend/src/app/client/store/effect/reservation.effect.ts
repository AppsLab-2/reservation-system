import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';

import {
  createReservation, createReservationFailure, createReservationSuccess,
  getDates, getDatesFailure, getDatesSuccess,
  getOffer, getOfferFailure, getOfferSuccess, getPitches, getPitchesFailure, getPitchesSuccess
} from '../action/reservation.action';
import { selectOfferId, selectReservationState, selectSelectedPitch } from '../state/reservation.state';

import { OfferService } from '../../../core/service/offer.service';
import { PitchService } from '../../../core/service/pitch.service';
import { ReservationService } from '../../../core/service/reservation.service';
import { Pitch } from '../../../core/model/pitch.model';

@Injectable()
export class ReservationEffects {

  getOffer$ = createEffect(() =>
    this.action$.pipe(
      ofType(getOffer),
      mergeMap(({ id }) =>
        this.offerService.getOffer(id).pipe(
          map(offer => getOfferSuccess({ offer })),
          catchError(() => of(getOfferFailure()))
        )
      )
    )
  );

  getDates$ = createEffect(() =>
    this.action$.pipe(
      ofType(getDates),
      concatLatestFrom(() => this.store$.select(selectOfferId)),
      filter(([_, id]) => !!id),
      mergeMap(([_, id]) =>
        this.pitchService.getDatesWithPitches(id as number).pipe(
          map(dates => getDatesSuccess({ dates })),
          catchError(() => of(getDatesFailure()))
        )
      )
    )
  );

  getPitches$ = createEffect(() =>
    this.action$.pipe(
      ofType(getPitches),
      concatLatestFrom(() => this.store$.select(selectReservationState)), // TODO: don't take whole state, this is quick fix
      filter(([_, state]) => !!state.offerId && !!state.selectedDate),
      mergeMap(([_, state]) =>
        this.pitchService.getPitchesForDate(state.offerId as number, state.selectedDate as Date).pipe(
          map(pitches => getPitchesSuccess({ pitches })),
          catchError(() => of(getPitchesFailure()))
        )
      )
    )
  );

  createReservation$ = createEffect(() =>
    this.action$.pipe(
      ofType(createReservation),
      concatLatestFrom(() => this.store$.select(selectSelectedPitch)),
      filter(([_, pitch]) => !!pitch && !!pitch.id),
      mergeMap(([_, pitch]) =>
        this.reservationService.createReservation((pitch as Pitch).id as number).pipe(
          map(() => createReservationSuccess()),
          catchError(() => of(createReservationFailure()))
        )
      )
    )
  );

  constructor(
    private readonly store$: Store,
    private readonly action$: Actions,
    private readonly offerService: OfferService,
    private readonly pitchService: PitchService,
    private readonly reservationService: ReservationService
  ) { }

}
