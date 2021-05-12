import { createReducer, on } from '@ngrx/store';
import { initialHomeState } from '../state/home.state';
import { getBusinessesSuccess } from '../action/home.action';

export const homeReducer = createReducer(
  initialHomeState,
  on(getBusinessesSuccess, (state, { businesses }) => ({ businesses }))
);
