import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessDetail } from '../../../../core/model/business.model';
import { BusinessService } from '../../../../core/service/business.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'hera-business-detail',
  templateUrl: './business-detail.component.html',
  styleUrls: ['./business-detail.component.scss']
})
export class BusinessDetailComponent implements OnInit, OnDestroy {

  business?: BusinessDetail;
  subscription?: Subscription;

  constructor(
    private readonly businessService: BusinessService,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const rawId: string | null = this.route.snapshot.paramMap.get('id');
    const id: number = rawId !== null ? +rawId : 0;
    this.subscription = this.businessService
      .getBusinessDetail(id)
      .subscribe(business => this.business = business);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
