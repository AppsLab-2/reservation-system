import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../model/offer.model';
import { REST_API } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getOffer(id: number): Observable<Offer> {
    return this.httpClient.get<Offer>(`${REST_API}/offer/${id}`);
  }

}
