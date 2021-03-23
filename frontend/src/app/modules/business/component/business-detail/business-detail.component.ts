import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessDetail } from '../../../../core/model/business.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectDetailBusiness } from '../../store/state/detail.state';
import { getBusinessDetail } from '../../store/action/detail.action';

@Component({
  selector: 'hera-business-detail',
  templateUrl: './business-detail.component.html',
  styleUrls: ['./business-detail.component.scss']
})
export class BusinessDetailComponent implements OnInit, OnDestroy {

  business: BusinessDetail | null = null;
  subscription?: Subscription;

  constructor(
    private readonly store$: Store,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const rawId: string | null = this.route.snapshot.paramMap.get('id');
    const id: number = rawId !== null ? +rawId : 0;
    this.store$.dispatch(getBusinessDetail({ id })); // TODO: refactor as effect
    this.subscription = this.store$
      .select(selectDetailBusiness)
      .subscribe(business => this.business = business);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
