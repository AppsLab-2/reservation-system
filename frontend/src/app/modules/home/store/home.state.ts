import { Business } from '../../../core/model/business.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface HomeState {
  businesses: Business[] | null;
}

export const initialHomeState: HomeState = {
  businesses: null
};

export const selectHomeState = createFeatureSelector<HomeState>('home');
export const selectHomeBusinesses = createSelector(selectHomeState, state => state.businesses);
