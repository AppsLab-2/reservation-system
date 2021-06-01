import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { getProfile } from '../../../core/store/action/profile.action';
import {
  ProfileState,
  selectProfile,
} from '../../../core/store/state/profile.state';

@Component({
  selector: 'hera-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  showBackArrow: boolean = !this.location.isCurrentPathEqualTo('/client');
  profile$ = this.store$.select(selectProfile);

  constructor(
    private location: Location,
    private readonly store$: Store<{ profile: ProfileState }>
  ) {}

  ngOnInit(): void {
    this.store$.dispatch(getProfile());
  }

  back(): void {
    this.location.back();
  }
}
