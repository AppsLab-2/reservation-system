import { Component, Input, OnInit } from '@angular/core';
import { Business } from '../../../core/model/business.model';
import { FavoriteService } from '../../../core/service/favorite.service';

@Component({
  selector: 'hera-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss'],
})
export class BusinessCardComponent implements OnInit {
  @Input() business?: Business;
  isFavorite: boolean | undefined;

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    const id = this.business?.id;
    if (id) {
      this.favoriteService
        .isFavorite(id)
        .subscribe((isFavorite) => (this.isFavorite = isFavorite));
    }
  }
}
