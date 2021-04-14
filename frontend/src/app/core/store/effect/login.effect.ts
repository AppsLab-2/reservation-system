import { Injectable } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginFailure, loginSuccess } from '../action/auth.action';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthEffects {

  login$ = createEffect(() =>
    this.action$.pipe(
      ofType(login),
      mergeMap(({ username, password }) =>
        this.authService.login(username, password).pipe(
          map(token => loginSuccess({ token })),
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
