import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../model/profile.model';
import { REST_API } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getProfile(): Observable<Profile> {
    return this.httpClient.get<Profile>(`${REST_API}/profile`);
  }

}
