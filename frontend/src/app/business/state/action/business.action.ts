import { createAction, props } from '@ngrx/store';
import { Business } from '../../../core/model/business.model';

export enum BusinessAction {
  SelectBusiness = '[Business] Select Business',
  SelectBusinessSuccess = '[Business] Select Business Success',
  SelectBusinessFailure = '[Business] Select Business Failure'
}

export const selectBusiness = createAction(BusinessAction.SelectBusiness, props<{ id: number }>());

export const selectBusinessSuccess = createAction(
  BusinessAction.SelectBusinessSuccess,
  props<{ business: Business }>()
);

export const selectBusinessFailure = createAction(BusinessAction.SelectBusinessFailure);
