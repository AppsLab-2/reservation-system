import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { REST_API } from '../../../environments/environment';
import { Profile } from '../model/profile.model';

// TODO: move this
export interface LoginSuccess {
  token: string;
  profile?: Profile;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  login(username: string, password: string): Observable<LoginSuccess> {
    const endpoint = `${REST_API}/login`;
    const body = { username, password };
    return this.httpClient.post<Profile>(endpoint, body, { observe: 'response' }).pipe(
      mergeMap(response => {
        const header: string | null = response.headers.get('Authorization');
        if (header && header.startsWith('Bearer ')) {
          const token = header.substring('Bearer '.length);
          return of({ token, profile: response.body ?? undefined });
        } else {
          return throwError(new Error('Token not returned!'));
        }
      })
    );
  }

  register(username: string, mailAddress: string, password: string): Observable<any> {
    const endpoint = `${REST_API}/register`;
    const body = { username, mailAddress, password };
    return this.httpClient.post(endpoint, body);
  }

  // TODO: this is a quick fix
  logout(): void {
    localStorage.removeItem('token');
  }

}
