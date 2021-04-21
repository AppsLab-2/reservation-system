import { createReducer, on } from '@ngrx/store';
import { initialProfileState } from '../state/profile.state';
import { getProfile, getProfileFailure, getProfileSuccess } from '../action/profile.action';

export const profileReducer = createReducer(
  initialProfileState,
  on(getProfile, state => ({ ...state, loading: true, hasError: false })),
  on(getProfileSuccess, (_, { profile }) => ({ profile, loading: false, hasError: false })),
  on(getProfileFailure, state => ({ ...state, loading: false, hasError: false }))
);
