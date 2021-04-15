import { createSelector } from '@ngrx/store';

export interface RegisterState {
  loading: boolean;
  success: boolean;
  failure: boolean;
}

export const initialRegisterState: RegisterState = {
  loading: false, success: false, failure: false
};

export const selectRegisterState = (state: { register: RegisterState }) => state.register;
export const selectLoading = createSelector(selectRegisterState, register => register.loading);
export const selectSuccess = createSelector(selectRegisterState, register => register.success);
export const selectFailure = createSelector(selectRegisterState, register => register.failure);
