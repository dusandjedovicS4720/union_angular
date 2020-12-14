import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AktiService {
  constructor(private http: HttpClient) {}

  getAkti() {
    //const data = {
    //  'akti': table
    //}

    // const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

    return this.http.get('http://localhost:5000/api/akti/getAkti');
  }

  getAkt(id: number) {
    return this.http.get(`http://localhost:5000/api/akti/getAkt/${id}`);
  }
}
