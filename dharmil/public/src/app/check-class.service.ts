import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class CheckClassService {

  constructor(
    private http: HttpClient
  ) { }

  url = 'https://f0780e41.ngrok.io/api/findUnique';
  check( value ) {
    const headers = {'Content-Type': 'application/json; charset=utf-8'};
    return this.http.post<any>(this.url, { headers, value });
  }
}
