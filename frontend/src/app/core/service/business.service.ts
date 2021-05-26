import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Business, BusinessDetail } from '../model/business.model';
import { REST_API } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getBusinesses(): Observable<Business[]> {
    return this.httpClient.get<Business[]>(`${REST_API}/business`);
  }

  getBusinessDetail(id: number): Observable<BusinessDetail> {
    return this.httpClient.get<BusinessDetail>(`${REST_API}/business/${id}`);
  }

  getSearchResults(query: string): Observable<Business[]> {
    const params = new HttpParams().set('query', query);
    return this.httpClient.get<Business[]>(`${REST_API}/business/search`, { params });
  }


}
