import { Injectable } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { register, registerFailure, registerSuccess } from '../action/auth.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterEffects {

  register$ = createEffect(() =>
    this.action$.pipe(
      ofType(register),
      mergeMap(({ username, mailAddress, password }) =>
        this.authService.register(username, mailAddress, password).pipe(
          map(_ => registerSuccess()),
          catchError(_ => of(registerFailure()))
        )
      )
    )
  );

  constructor(
    private readonly action$: Actions,
    private readonly authService: AuthService
  ) { }

}
