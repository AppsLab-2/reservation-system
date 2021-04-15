import { createReducer, on } from '@ngrx/store';
import { initialRegisterState } from '../state/register.state';
import { register, registerFailure, registerSuccess } from '../action/auth.action';

export const registerReducer = createReducer(
  initialRegisterState,
  on(register, _ => ({ loading: true, success: false, failure: false })),
  on(registerSuccess, _ => ({ loading: false, success: true, failure: false })),
  on(registerFailure, _ => ({ loading: false, success: false, failure: true }))
);
