import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OUniverzitetuService {
  constructor(private http: HttpClient) {}

  getAkreditacije() {
    return this.http.get(
      'http://localhost:5000/api/oUniverzitetu/getAkreditacije'
    );
  }

  getAkreditacija(id: number) {
    return this.http.get(
      `http://localhost:5000/api/oUniverzitetu/getAkreditacija/${id}`
    );
  }
}
