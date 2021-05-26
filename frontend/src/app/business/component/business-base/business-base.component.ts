import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { selectBusiness } from '../../state/action/business.action';
import {
  BusinessState,
  selectLoading,
  selectSelectedBusiness,
  selectSelectedId
} from '../../state/state/business.state';

interface NavigationEntry {
  icon: string;
  destination: string;
}

@Component({
  selector: 'hera-business-base',
  templateUrl: './business-base.component.html',
  styleUrls: ['./business-base.component.scss']
})
export class BusinessBaseComponent implements OnInit, OnDestroy {

  loading = true;
  title?: string;

  readonly navigation: NavigationEntry[] = [
    { icon: 'dashboard', destination: './dashboard' },
    { icon: 'local_offer', destination: './offers' },
    { icon: 'reorder', destination: './reservations' },
    { icon: 'group', destination: './employees' },
    { icon: 'settings', destination: '/' },
    { icon: 'exit_to_app', destination: '../' }
  ];

  private unsubscribe$ = new Subject();

  constructor(
    private readonly store$: Store<{ business: BusinessState }>,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // get id from route if missing
    this.store$.select(selectSelectedId).pipe(
      takeUntil(this.unsubscribe$),
      filter(id => !id)
    ).subscribe(() => {
      const rawId: string | null = this.route.snapshot.paramMap.get('id');

      if (rawId) {
        const id = +rawId;
        this.store$.dispatch(selectBusiness({ id }));
      }
    });

    this.store$.select(selectLoading).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(loading => this.loading = loading);

    this.store$.select(selectSelectedBusiness).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(business => this.title = business?.name);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
