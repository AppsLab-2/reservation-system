import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { REST_API } from '../../../environments/environment';
import { Reservation } from '../model/reservation.model';
import { ReservationDto } from '../dto/reservation.dto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  createReservation(pitchId: number): Observable<any> {
    const params = new HttpParams().set('pitchId', pitchId.toString());
    return this.httpClient.post(`${REST_API}/reservation`, null,  { params });
  }

  getTodayReservationsByBusiness(businessId: number): Observable<Reservation[]> {
    return this.httpClient.get<ReservationDto[]>(`${REST_API}/reservation/business/${businessId}`).pipe(
      map(dtos => dtos.map(this.dtoToModel))
    );
  }

  getDatesToReservationsMapForBusiness(businessId: number): Observable<Map<Date, Reservation[]>> {
    type Response = Readonly<Record<string, ReservationDto[]>>;
    return this.httpClient.get<Response>(`${REST_API}/reservation/business/${businessId}/map`).pipe(
      map(record => {
        const reservationMap = new Map<Date, Reservation[]>();

        Object.keys(record).forEach(key => {
          const date: Date = this.parseDate(key);
          const reservations: Reservation[] = record[key].map(this.dtoToModel);
          reservationMap.set(date, reservations);
        });

        return reservationMap;
      })
    );
  }

  // TODO: duplicate code, move this to util class
  parseDate(rawDate: string): Date {
    const parts = rawDate.split('-');

    const year = +parts[0];
    const month = +parts[1] - 1;
    const day = +parts[2];

    return new Date(year, month, day);
  }

  dtoToModel(dto: ReservationDto): Reservation {
    return { ...dto, startDateTime: new Date(dto.startDateTime) };
  }

}
