import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post('http://localhost:4300/login', user, {
      responseType: 'text',
    });

  }

  login(details: any) {
    // return this.http.post('http://localhost:4300/register',details)
  }
}
