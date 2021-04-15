import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RegisterState, selectFailure, selectLoading, selectSuccess } from '../../store/state/register.state';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { register } from '../../store/action/auth.action';
import { from, Subject } from 'rxjs';
import { filter, mergeMap, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'hera-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    mailAddress: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  loading = false;
  hasError = false;
  private unsubscribe$ = new Subject();

  constructor(
    private readonly store$: Store<{ register: RegisterState }>,
    private readonly router: Router
  ) { }

  get submittable(): boolean {
    return this.registerForm.valid;
  }

  ngOnInit(): void {
    this.store$.select(selectLoading).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(loading => this.loading = loading);

    this.store$.select(selectSuccess).pipe(
      takeUntil(this.unsubscribe$),
      filter(success => success),
      mergeMap(_ => from(this.router.navigateByUrl('/login')))
    ).subscribe();

    this.store$.select(selectFailure).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(hasError => this.hasError = hasError);
  }

  register(): void {
    if (this.submittable) {
      this.store$.dispatch(register(this.registerForm.value));
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
