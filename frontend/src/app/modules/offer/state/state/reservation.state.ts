import { Offer } from '../../../../core/model/offer.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Pitch } from '../../../../core/model/pitch.model';

export interface ReservationState {
  offerId?: number;
  offer?: Offer;
  dates?: Date[];
  selectedDate?: Date;
  pitches?: Pitch[];
  selectedPitch?: Pitch;
  loading: boolean;
  hasError: boolean;
  finished: boolean;
}

export const initialReservationState: ReservationState = {
  loading: false, hasError: false, finished: false
};

export const selectReservationState = createFeatureSelector<ReservationState>('reservation');
export const selectOfferId = createSelector(selectReservationState, state => state.offerId);
export const selectOffer = createSelector(selectReservationState, state => state.offer);
export const selectDates = createSelector(selectReservationState, state => state.dates);
export const selectSelectedDate = createSelector(selectReservationState, state => state.selectedDate);
export const selectPitches = createSelector(selectReservationState, state => state.pitches);
export const selectSelectedPitch = createSelector(selectReservationState, state => state.selectedPitch);
export const selectLoading = createSelector(selectReservationState, state => state.loading);
export const selectHasError = createSelector(selectReservationState, state => state.hasError);
export const selectFinished = createSelector(selectReservationState, state => state.finished);
