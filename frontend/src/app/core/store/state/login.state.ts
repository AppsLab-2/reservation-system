import { createSelector } from '@ngrx/store';

export interface LoginState {
  loggedIn: boolean;
  token: string | null;
  loading: boolean;
  hasError: boolean;
}

// TODO: find a better way of doing this
const token: string | null = localStorage.getItem('token');
export const initialLoginState: LoginState = {
  loggedIn: token !== null, loading: false, hasError: false, token
};

export const selectLoginState = (state: { login: LoginState }) => state.login;

export const selectLoggedIn = createSelector(selectLoginState, state => state.loggedIn);
export const selectLoading = createSelector(selectLoginState, state => state.loading);
export const selectHasError = createSelector(selectLoginState, state => state.hasError);
