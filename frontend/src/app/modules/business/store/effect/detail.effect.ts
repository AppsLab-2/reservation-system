import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { BusinessService } from '../../../../core/service/business.service';
import { DetailAction, getBusinessDetailError, getBusinessDetailSuccess } from '../action/detail.action';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectDetailId } from '../state/detail.state';
import { of } from 'rxjs';

@Injectable()
export class DetailEffects {

  getBusinessDetail$ = createEffect(() =>
    this.action$.pipe(
      ofType(DetailAction.GetBusinessDetail),
      concatLatestFrom(_ => this.store$.select(selectDetailId)),
      filter(([_, id]) => id !== null),
      mergeMap(([_, id]) =>
        this.businessService.getBusinessDetail(id as number).pipe(
          map(business => getBusinessDetailSuccess({ business })),
          catchError(() => of(getBusinessDetailError()))
        )
      )
    )
  );

  constructor(
    private readonly store$: Store,
    private readonly action$: Actions,
    private readonly businessService: BusinessService
  ) { }

}
