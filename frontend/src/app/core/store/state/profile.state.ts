import { Profile } from '../../model/profile.model';
import {createSelector} from '@ngrx/store';

export interface ProfileState {
  profile: Profile | null;
  loading: boolean;
  hasError: boolean;
}

export const initialProfileState: ProfileState = {
  profile: null, loading: false, hasError: false
};

export const selectProfileState = (state: { profile: ProfileState }) => state.profile;
export const selectProfile = createSelector(selectProfileState, state => state.profile);
