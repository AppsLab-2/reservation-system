import {Business} from '../../../core/model/business.model';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface BusinessState {
  selectedId?: number;
  selected?: Business;
  loading: boolean;
  hasError: boolean;
}

export const initialBusinessState: BusinessState = {
  loading: false, hasError: false
};

export const selectBusinessState = createFeatureSelector<BusinessState>('business');
export const selectSelectedId = createSelector(selectBusinessState, state => state.selectedId);
export const selectSelectedBusiness = createSelector(selectBusinessState, state => state.selected);
export const selectLoading = createSelector(selectBusinessState, state => state.loading);
