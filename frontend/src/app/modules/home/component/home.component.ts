import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HomeAction } from '../store/home.action';
import { HomeState, selectHomeBusinesses } from '../store/home.state';

@Component({
  selector: 'hera-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  businesses$ = this.store.select(selectHomeBusinesses);

  constructor(
    private readonly store: Store<{ home: HomeState }>
  ) { }

  ngOnInit(): void {
    this.store.dispatch({ type: HomeAction.GetBusinesses });
  }

}
