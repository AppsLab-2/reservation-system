import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Business, BusinessDetail } from '../model/business.model';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getBusinesses(): Observable<Business[]> {
    return this.httpClient.get<Business[]>('http://localhost:8080/business');
  }

  getBusinessDetail(id: number): Observable<BusinessDetail> {
    return this.httpClient.get<BusinessDetail>(`http://localhost:8080/business/${id}`);
  }

}
