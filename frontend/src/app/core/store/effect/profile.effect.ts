import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProfileService } from '../../service/profile.service';
import { getProfile, getProfileFailure, getProfileSuccess } from '../action/profile.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ProfileEffects {

  getProfile$ = createEffect(() =>
    this.action$.pipe(
      ofType(getProfile),
      mergeMap(() =>
        this.profileService.getProfile().pipe(
          map(profile => getProfileSuccess({ profile })),
          catchError(() => of(getProfileFailure()))
        )
      )
    )
  );

  constructor(
    private readonly action$: Actions,
    private readonly profileService: ProfileService
  ) { }

}
