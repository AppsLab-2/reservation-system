import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../../core/service/business.service';
import { Observable } from 'rxjs';
import { Business } from '../../../core/model/business.model';

@Component({
  selector: 'hera-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  businesses?: Observable<Business[]>;

  constructor(
    private readonly businessService: BusinessService
  ) { }

  ngOnInit(): void {
    this.businesses = this.businessService.getBusinesses();
  }

}
