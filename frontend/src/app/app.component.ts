import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Subscription } from 'rxjs';
import { ProfileState, selectProfile } from './core/store/state/profile.state';
import { LoginState, selectLoggedIn } from './core/store/state/login.state';
import { getProfile } from './core/store/action/profile.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private subscription!: Subscription;

  constructor(
    private readonly store$: Store<{ login: LoginState, profile: ProfileState }>
  ) { }

  ngOnInit(): void {
    this.subscription = combineLatest([
      this.store$.select(selectProfile),
      this.store$.select(selectLoggedIn)
    ]).subscribe(([profile, loggedIn]) => {
      if (loggedIn && !profile) {
        this.store$.dispatch(getProfile());
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
