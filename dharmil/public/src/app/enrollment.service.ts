import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  url = 'http://localhost:8000/add';
  constructor(
    private http: HttpClient
  ) { }
  // enroll service
  enroll( translex ): Observable<any> {
    console.log('Inside enroll doing posting ', translex);
    console.log(this.http.post);
    const headers = {'Content-Type': 'application/json; charset=utf-8'};
    return this.http.post<any>(this.url, { headers, translex});
  }
  uploadFile( file ) {
    const url = 'http://localhost:8005/upload';
    console.log( file );
    return this.http.post<any>(url, file, {
      reportProgress: true,
      observe: 'events'
    });
  }
}
