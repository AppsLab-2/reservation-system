import { Injectable } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginFailure, loginSuccess } from '../action/auth.action';
import { catchError, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { getProfileSuccess } from '../action/profile.action';
import { Action } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class LoginEffects {

  login$ = createEffect(() =>
    this.action$.pipe(
      ofType(login),
      mergeMap(({ username, password }) =>
        this.authService.login(username, password).pipe(
          mergeMap(ctx => {
            const actions: Action[] = [loginSuccess({ token: ctx.token })];
            if (ctx.profile) {
              actions.push(getProfileSuccess({ profile: ctx.profile }));
            }
            return actions;
          }),
          catchError(() => of(loginFailure()))
        )
      )
    )
  );

  loginSuccess$ = createEffect(() =>
    this.action$.pipe(
      ofType(loginSuccess),
      tap(({ token }) => localStorage.setItem('token', token))
    ), { dispatch: false }
  );

  constructor(
    private readonly action$: Actions,
    private readonly authService: AuthService
  ) { }

}
