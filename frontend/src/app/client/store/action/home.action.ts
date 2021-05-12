import { createAction, props } from '@ngrx/store';
import { Business } from '../../../core/model/business.model';

export enum HomeAction {
  GetBusinesses = '[Home] Get Businesses',
  GetBusinessesSuccess = '[Home] Get Businesses Success',
  GetBusinessesError = '[Home] Get Businesses Error'
}

export const getBusinesses = createAction(HomeAction.GetBusinesses);

export const getBusinessesSuccess = createAction(
  HomeAction.GetBusinessesSuccess,
  props<{ businesses: Business[] }>()
);

export const getBusinessesError = createAction(HomeAction.GetBusinessesError);
