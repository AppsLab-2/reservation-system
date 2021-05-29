import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'hera-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  searchControl = new FormControl('', Validators.required);

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const query = params.query;
      this.searchControl.setValue(query);
    });
  }

  search(): void {
    if (this.searchControl.valid) {
      const query = this.searchControl.value;
      this.router.navigate(['client/search'], { queryParams: { query } });
    }
  }
}
