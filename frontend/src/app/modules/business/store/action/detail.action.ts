import { createAction, props } from '@ngrx/store';
import { BusinessDetail } from '../../../../core/model/business.model';

export enum DetailAction {
  GetBusinessDetail = '[Detail] Get Business Detail',
  GetBusinessDetailSuccess = '[Detail] Get Business Detail Success',
  GetBusinessDetailError = '[Detail] Get Business Detail Error'
}

export const getBusinessDetail = createAction(
  DetailAction.GetBusinessDetail,
  props<{ id: number }>()
);

export const getBusinessDetailSuccess = createAction(
  DetailAction.GetBusinessDetailSuccess,
  props<{ business: BusinessDetail }>()
);

export const getBusinessDetailError = createAction(DetailAction.GetBusinessDetailError);
