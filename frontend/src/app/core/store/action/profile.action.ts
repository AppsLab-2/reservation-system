import { createAction, props } from '@ngrx/store';
import { Profile } from '../../model/profile.model';

export enum ProfileAction {
  GetProfile = '[Profile] Get Profile',
  GetProfileSuccess = '[Profile] Get Profile Success',
  GetProfileFailure = '[Profile] Get Profile Failure'
}

export const getProfile = createAction(ProfileAction.GetProfile);

export const getProfileSuccess = createAction(
  ProfileAction.GetProfileSuccess,
  props<{ profile: Profile }>()
);

export const getProfileFailure = createAction(ProfileAction.GetProfileFailure);
