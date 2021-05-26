import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'hera-search-nav-bar',
  templateUrl: './search-nav-bar.component.html',
  styleUrls: ['./search-nav-bar.component.scss'],
})
export class SearchNavBarComponent implements OnInit {
  width = '700px';
  showBackArrow: boolean = !this.location.isCurrentPathEqualTo('/client');

  constructor(private location: Location) {}

  ngOnInit(): void {
    if (!this.showBackArrow) {
      this.width = '630px';
    }
  }

  back(): void {
    this.location.back();
  }
}
