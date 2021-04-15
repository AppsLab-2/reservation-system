import { createAction, props } from '@ngrx/store';

export enum AuthAction {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  Register = '[Auth] Register',
  RegisterSuccess = '[Auth] Register Success',
  RegisterFailure = '[Auth] Register Failure'
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

export const register = createAction(
  AuthAction.Register,
  props<{ username: string, mailAddress: string, password: string }>()
);

export const registerSuccess = createAction(AuthAction.RegisterSuccess);
export const registerFailure = createAction(AuthAction.RegisterFailure);
