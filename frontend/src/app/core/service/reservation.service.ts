import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { REST_API } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  // TODO: implement reservation model
  createReservation(pitchId: number): Observable<any> {
    const params = new HttpParams().set('pitchId', pitchId.toString());
    return this.httpClient.post(`${REST_API}/reservation`, null,  { params });
  }

}
