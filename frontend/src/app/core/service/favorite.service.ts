import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Business } from '../model/business.model';
import { REST_API } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private httpClient: HttpClient) {
  }

  getFavoriteBusinesses(): Observable<Business[]> {
    return this.httpClient.get<Business[]>(`${REST_API}/user/favorites`);
  }

  addBusinessToFavorites(id: number): Observable<any> {
    return this.httpClient.post(`${REST_API}/user/favorites${id}`, {});
  }

  removeBusinessFromFavorites(id: number): Observable<any> {
    return this.httpClient.delete(`${REST_API}/user/favorites${id}`);
  }
}
