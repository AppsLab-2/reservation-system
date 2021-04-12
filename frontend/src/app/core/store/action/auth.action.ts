import { createAction, props } from '@ngrx/store';

export enum AuthAction {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure'
}

export const login = createAction(
  AuthAction.Login,
  props<{ username: string, password: string }>()
);

export const loginSuccess = createAction(
  AuthAction.LoginSuccess,
  props<{ token: string }>()
);

export const loginFailure = createAction(AuthAction.LoginFailure);
