import { createReducer, on } from '@ngrx/store';
import { initialBusinessState } from '../state/business.state';
import { selectBusiness, selectBusinessFailure, selectBusinessSuccess } from '../action/business.action';

export const businessReducer = createReducer(
  initialBusinessState,
  on(selectBusiness, (_, { id }) => ({ selectedId: id, loading: true, hasError: false })),
  on(selectBusinessSuccess, (state, { business }) => ({ ...state, selected: business, loading: false })),
  on(selectBusinessFailure, state => ({ ...state, loading: false, hasError: true }))
);
