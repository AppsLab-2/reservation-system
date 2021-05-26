import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../../core/service/business.service';
import { Observable } from 'rxjs';
import { Business } from '../../../core/model/business.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'hera-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  businesses$: Observable<Business[]> | undefined;

  constructor(private businessService: BusinessService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        const query = params.query;
        if (!query) {
          this.router.navigateByUrl('/client');
        }
        this.businesses$ = this.businessService.getSearchResults(query);
      });
  }

}
