import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { BusinessService } from '../../../core/service/business.service';
import { selectBusiness, selectBusinessFailure, selectBusinessSuccess } from '../action/business.action';

@Injectable()
export class BusinessEffects {

  selectBusiness$ = createEffect(() =>
    this.action$.pipe(
      ofType(selectBusiness),
      mergeMap(({ id }) =>
        // TODO: use custom method for this
        this.businessService.getBusinessDetail(id).pipe(
          map(business => selectBusinessSuccess({ business })),
          catchError(() => of(selectBusinessFailure()))
        )
      )
    )
  );

  constructor(
    private readonly action$: Actions,
    private readonly businessService: BusinessService
  ) { }

}
