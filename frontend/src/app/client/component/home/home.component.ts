import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getBusinesses } from '../../store/action/home.action';
import { selectHomeBusinesses } from '../../store/state/home.state';
import { FavoriteService } from '../../../core/service/favorite.service';
import { Observable } from 'rxjs';
import { Business } from '../../../core/model/business.model';

@Component({
  selector: 'hera-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  businesses$ = this.store$.select(selectHomeBusinesses);
  favoriteBusinesses$: Observable<Business[]> | undefined;

  constructor(
    private readonly store$: Store,
    private readonly favoriteService: FavoriteService
  ) { }

  ngOnInit(): void {
    this.store$.dispatch(getBusinesses());
    this.favoriteBusinesses$ = this.favoriteService.getFavoriteBusinesses();
  }

}
