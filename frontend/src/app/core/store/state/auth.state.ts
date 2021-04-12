import { createSelector } from '@ngrx/store';

export interface AuthState {
  loggedIn: boolean;
  token: string | null;
  loading: boolean;
  hasError: boolean;
}

// TODO: find a better way of doing this
const token: string | null = localStorage.getItem('token');
export const initialAuthState: AuthState = {
  loggedIn: token !== null, loading: false, hasError: false, token
};

export const selectAuthState = (state: { auth: AuthState }) => state.auth;
export const selectLoggedIn = createSelector(selectAuthState, state => state.loggedIn);
export const selectLoading = createSelector(selectAuthState, state => state.loading);
export const selectHasError = createSelector(selectAuthState, state => state.hasError);
