import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Business } from '../model/business.model';
import { REST_API } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  constructor(private httpClient: HttpClient) {}

  getFavoriteBusinesses(): Observable<Business[]> {
    return this.httpClient.get<Business[]>(`${REST_API}/user/favorites`);
  }

  addBusinessToFavorites(id: number): Observable<HttpResponse<any>> {
    return this.httpClient.post<HttpResponse<any>>(
      `${REST_API}/user/favorites/${id}`,
      {}
    );
  }

  removeBusinessFromFavorites(id: number): Observable<HttpResponse<any>> {
    return this.httpClient.delete<HttpResponse<any>>(
      `${REST_API}/user/favorites/${id}`
    );
  }

  isFavorite(id: number): Observable<boolean> {
    return this.getFavoriteBusinesses().pipe(
      map((businesses) => {
        return businesses.some((business) => business.id === id);
      })
    );
  }

  toggleFavorite(id: number): void {
    this.isFavorite(id).subscribe((isFavorite) => {
      if (isFavorite) {
        this.removeBusinessFromFavorites(id).subscribe();
      } else {
        this.addBusinessToFavorites(id).subscribe();
      }
    });
  }
}
