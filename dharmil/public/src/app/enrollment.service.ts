import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  url = '127.0.0.1:8000/add';
  constructor(private http: HttpClient) { }
  // enroll service
  enroll( translex ): Observable<any> {
    return this.http.post<any>(this.url, translex);
  }
}
