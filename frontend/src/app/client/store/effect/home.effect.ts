import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { BusinessService } from '../../../core/service/business.service';
import { getBusinessesError, getBusinessesSuccess, HomeAction } from '../action/home.action';

@Injectable()
export class HomeEffects {

  getBusinesses$ = createEffect(() =>
    this.action$.pipe(
      ofType(HomeAction.GetBusinesses),
      mergeMap(() =>
        this.businessService.getBusinesses().pipe(
          map(businesses => getBusinessesSuccess({ businesses })),
          catchError(() => of(getBusinessesError()))
        )
      )
    )
  );

  constructor(
    private readonly action$: Actions,
    private readonly businessService: BusinessService
  ) { }

}
