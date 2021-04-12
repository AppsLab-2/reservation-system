import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

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

  login(username: string, password: string): Observable<string> {
    const endpoint = 'http://localhost:8080/login';
    const body = { username, password };
    return this.httpClient.post<HttpResponse<any>>(endpoint, body, { observe: 'response', withCredentials: true }).pipe(
      mergeMap(response => {
        const header: string | null = response.headers.get('Authorization');
        return header !== null && header.startsWith('Bearer ')
          ? of(header)
          : throwError(new Error('Token not returned!'));
      }),
      map(header => header.substring('Bearer '.length))
    );
  }

}
