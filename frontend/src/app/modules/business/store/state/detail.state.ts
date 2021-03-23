import { BusinessDetail } from '../../../../core/model/business.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface DetailState {
  id: number | null;
  business: BusinessDetail | null;
}

export const initialDetailState: DetailState = {
  id: null,
  business: null
};

export const selectDetailState = createFeatureSelector<DetailState>('detail');
export const selectDetailId = createSelector(selectDetailState, state => state.id);
export const selectDetailBusiness = createSelector(selectDetailState, state => state.business);
