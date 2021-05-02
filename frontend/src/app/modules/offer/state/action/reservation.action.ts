import { createAction, props } from '@ngrx/store';
import { Offer } from '../../../../core/model/offer.model';
import { Pitch } from '../../../../core/model/pitch.model';

export enum ReservationAction {
  GetOffer = '[Reservation] Get Offer',
  GetOfferSuccess = '[Reservation] Get Offer Success',
  GetOfferFailure = '[Reservation] Get Offer Failure',
  GetDates = '[Reservation] Get Dates',
  GetDatesSuccess = '[Reservation] Get Dates Success',
  GetDatesFailure = '[Reservation] Get Dates Failure',
  GetPitches = '[Reservation] Get Pitches',
  GetPitchesSuccess = '[Reservation] Get Pitches Success',
  GetPitchesFailure = '[Reservation] Get Pitches Failure',
  ChoosePitch = '[Reservation] Choose Pitch',
  CreateReservation = '[Reservation] Create Reservation',
  CreateReservationSuccess = '[Reservation] Create Reservation Success',
  CreateReservationFailure = '[Reservation] Create Reservation Failure'
}

export const getOffer = createAction(ReservationAction.GetOffer, props<{ id: number }>());
export const getOfferSuccess = createAction(ReservationAction.GetOfferSuccess, props<{ offer: Offer }>());
export const getOfferFailure = createAction(ReservationAction.GetOfferFailure);

export const getDates = createAction(ReservationAction.GetDates);
export const getDatesSuccess = createAction(ReservationAction.GetDatesSuccess, props<{ dates: Date[] }>());
export const getDatesFailure = createAction(ReservationAction.GetDatesFailure);

export const getPitches = createAction(ReservationAction.GetPitches, props<{ date: Date }>());
export const getPitchesSuccess = createAction(ReservationAction.GetPitchesSuccess, props<{ pitches: Pitch[] }>());
export const getPitchesFailure = createAction(ReservationAction.GetPitchesFailure);

export const choosePitch = createAction(ReservationAction.ChoosePitch, props<{ pitch: Pitch }>());

export const createReservation = createAction(ReservationAction.CreateReservation);
export const createReservationSuccess = createAction(ReservationAction.CreateReservationSuccess);
export const createReservationFailure = createAction(ReservationAction.CreateReservationFailure);
