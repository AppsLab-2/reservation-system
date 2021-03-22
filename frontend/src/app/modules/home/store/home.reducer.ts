import { createReducer, on } from '@ngrx/store';
import { initialHomeState } from './home.state';
import { getBusinessesSuccess } from './home.action';

export const homeReducer = createReducer(
  initialHomeState,
  on(getBusinessesSuccess, (state, { businesses }) => ({ businesses }))
);
