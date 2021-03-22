import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { BusinessService } from '../../../core/service/business.service';
import { getBusinessesError, getBusinessesSuccess, HomeAction } from './home.action';

@Injectable()
export class HomeEffects {

  getBusinesses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeAction.GetBusinesses),
      mergeMap(() => this.businessService.getBusinesses()
        .pipe(
          map(businesses => getBusinessesSuccess({ businesses })),
          catchError(() => of(getBusinessesError()))
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly businessService: BusinessService
  ) { }

}
