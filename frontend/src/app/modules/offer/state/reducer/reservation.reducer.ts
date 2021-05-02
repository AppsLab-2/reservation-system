import { createReducer, on } from '@ngrx/store';
import { initialReservationState } from '../state/reservation.state';
import {
  choosePitch,
  createReservation, createReservationFailure, createReservationSuccess,
  getDates, getDatesFailure, getDatesSuccess,
  getOffer, getOfferFailure, getOfferSuccess,
  getPitches, getPitchesFailure, getPitchesSuccess
} from '../action/reservation.action';

export const reservationReducer = createReducer(
  initialReservationState,
  on(getOffer, (_, { id }) => ({ offerId: id, hasError: false, loading: true, finished: false })),
  on(getOfferSuccess, (state, { offer }) => ({ ...state, offer, loading: false })),
  on(getOfferFailure, state => ({ ...state, loading: false, hasError: true })),

  on(getDates, state => ({ ...state, loading: true, hasError: false })),
  on(getDatesSuccess, (state, { dates }) => ({ ...state, dates, loading: false })),
  on(getDatesFailure, state => ({ ...state, loading: false, hasError: true })),

  on(getPitches, (state, { date }) => ({ ...state, selectedDate: date, loading: true, hasError: false })),
  on(getPitchesSuccess, (state, { pitches }) => ({ ...state, pitches, loading: false })),
  on(getPitchesFailure, state => ({  ...state, loading: false, hasError: true })),

  on(choosePitch, (state, { pitch }) => ({ ...state, selectedPitch: pitch })),

  on(createReservation, state => ({ ...state, loading: true, hasError: false })),
  on(createReservationSuccess, state => ({ ...state, loading: false, finished: true })),
  on(createReservationFailure, state => ({ ...state, loading: false, hasError: true }))
);
