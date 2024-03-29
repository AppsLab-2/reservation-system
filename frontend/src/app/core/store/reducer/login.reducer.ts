import { createReducer, on } from '@ngrx/store';
import { initialLoginState } from '../state/login.state';
import { login, loginFailure, loginSuccess } from '../action/auth.action';

export const loginReducer = createReducer(
  initialLoginState,
  on(login, _ => ({ loggedIn: false, token: null, loading: true, hasError: false })),
  on(loginSuccess, (_, { token }) => ({ token, loggedIn: true, loading: false, hasError: false })),
  on(loginFailure, state => ({ ...state, loading: false, hasError: true }))
);
