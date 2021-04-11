import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'hera-search-nav-bar',
  templateUrl: './search-nav-bar.component.html',
  styleUrls: ['./search-nav-bar.component.scss'],
})
export class SearchNavBarComponent implements OnInit {
  width: string = '700px';
  showBackArrow: boolean = !this.location.isCurrentPathEqualTo('/home');

  constructor(private location: Location) {}

  ngOnInit(): void {
    if (!this.showBackArrow) {
      this.width = '630px';
    }
  }

  back() {
    this.location.back();
  }
}
