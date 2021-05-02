import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { REST_API } from '../../../environments/environment';
import { Pitch } from '../model/pitch.model';
import { PitchDto } from '../dto/pitch.dto';

@Injectable({
  providedIn: 'root'
})
export class PitchService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getDatesWithPitches(offerId: number): Observable<Date[]> {
    return this.httpClient.get<string[]>(`${REST_API}/offer/${offerId}/pitch`).pipe(
      map(rawDates => rawDates.map(this.parseDate))
    );
  }

  getPitchesForDate(offerId: number, date: Date): Observable<Pitch[]> {
    const isoDate = this.dateToString(date);
    const params = new HttpParams().set('date', isoDate);
    return this.httpClient.get<PitchDto[]>(`${REST_API}/offer/${offerId}/pitch/date`, { params }).pipe(
      map(dtos => dtos.map(dto => ({ id: dto.id, offerId: dto.offerId, startDateTime: new Date(dto.startDateTime) })))
    );
  }

  // thanks timezones
  parseDate(rawDate: string): Date {
    const parts = rawDate.split('-');

    const year = +parts[0];
    const month = +parts[1] - 1;
    const day = +parts[2];

    return new Date(year, month, day);
  }

  dateToString(date: Date): string {
    const year = date.getFullYear();
    const month = this.prependZeroToPositiveValue(date.getMonth() + 1);
    const day = this.prependZeroToPositiveValue(date.getDate());
    return `${year}-${month}-${day}`;
  }

  prependZeroToPositiveValue(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
  }

}
