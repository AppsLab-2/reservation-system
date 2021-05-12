import { createReducer, on } from '@ngrx/store';
import { initialDetailState } from '../state/detail.state';
import { getBusinessDetail, getBusinessDetailSuccess } from '../action/detail.action';

export const detailReducer = createReducer(
  initialDetailState,
  on(getBusinessDetail, (state, { id }) => ({ ...initialDetailState, id })),
  on(getBusinessDetailSuccess, (state, { business }) => ({ ...state, business }))
);
