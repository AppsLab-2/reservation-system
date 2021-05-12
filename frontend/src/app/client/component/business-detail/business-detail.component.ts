import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessDetail } from '../../../core/model/business.model';
import { Subscription} from 'rxjs';
import { Store } from '@ngrx/store';
import { selectDetailBusiness } from '../../store/state/detail.state';
import { getBusinessDetail } from '../../store/action/detail.action';
import { FavoriteService } from '../../../core/service/favorite.service';

@Component({
  selector: 'hera-business-detail',
  templateUrl: './business-detail.component.html',
  styleUrls: ['./business-detail.component.scss']
})
export class BusinessDetailComponent implements OnInit, OnDestroy {

  business: BusinessDetail | null = null;
  subscription?: Subscription;
  isFavorite?: boolean;

  constructor(
    private readonly store$: Store,
    private readonly route: ActivatedRoute,
    private readonly favoriteService: FavoriteService
  ) { }

  ngOnInit(): void {
    const id = this.getId();
    this.store$.dispatch(getBusinessDetail({ id })); // TODO: refactor as effect
    this.subscription = this.store$
      .select(selectDetailBusiness)
      .subscribe(business => this.business = business);
    this.favoriteService.isFavorite(id)
      .subscribe((isFavorite) => (this.isFavorite = isFavorite));
  }

  getId(): number {
    const rawId: string | null = this.route.snapshot.paramMap.get('id');
    return  rawId !== null ? +rawId : 0;
  }

  toggleFavorite(): void {
    const id = this.getId();
    this.favoriteService.toggleFavorite(id);
    this.isFavorite = !this.isFavorite;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
