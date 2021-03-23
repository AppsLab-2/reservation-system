import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getBusinesses } from '../store/home.action';
import { selectHomeBusinesses } from '../store/home.state';

@Component({
  selector: 'hera-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  businesses$ = this.store$.select(selectHomeBusinesses);

  constructor(
    private readonly store$: Store
  ) { }

  ngOnInit(): void {
    this.store$.dispatch(getBusinesses());
  }

}
