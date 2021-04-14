import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from '../../store/action/auth.action';
import { LoginState, selectHasError, selectLoading, selectLoggedIn } from '../../store/state/login.state';
import { filter, mergeMap, takeUntil } from 'rxjs/operators';
import { from, Subject } from 'rxjs';

@Component({
  selector: 'hera-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  loading = false;
  hasError = false;
  private unsubscribe$ = new Subject();

  constructor(
    private readonly store$: Store<{ login: LoginState }>,
    private readonly router: Router
  ) { }

  get submittable(): boolean {
    return this.loginForm.valid && !this.loading;
  }

  ngOnInit(): void {
    this.store$.select(selectLoggedIn).pipe(
      takeUntil(this.unsubscribe$),
      filter(isLoggedIn => isLoggedIn),
      mergeMap(_ => from(this.router.navigateByUrl('/home')))
    ).subscribe();

    this.store$.select(selectLoading).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(loading => this.loading = loading);

    this.store$.select(selectHasError).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(hasError => this.hasError = hasError);
  }

  login(): void {
    if (this.submittable) {
      this.store$.dispatch(login(this.loginForm.value));
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
