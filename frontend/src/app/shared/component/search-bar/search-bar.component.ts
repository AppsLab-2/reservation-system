import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'hera-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  searchControl = new FormControl('', Validators.required);

  constructor(private router: Router) {}

  ngOnInit(): void {}

  search(): void {
    if (this.searchControl.valid) {
      const query = this.searchControl.value;
      this.router.navigate(['client/search'], { queryParams: { query }});
    }
  }
}
