import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Form } from './interfaces/Form';

@Injectable({
  providedIn: 'root'
})
export class FormSubmissionService {
  url = 'http://localhost:8004/add';
  constructor(private http: HttpClient) { }
  submit(form) {
    return this.http.post<Form>(this.url, form);
  }
}
