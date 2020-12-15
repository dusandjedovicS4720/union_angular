import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepozitorijumService {

  constructor(private http: HttpClient) {}

  getRepozitorijumRows() {
    return this.http.get(
      'http://localhost:5000/api/repozitorijum/getRepozitorijumRows'
    );
  }

  getRepozitorijumRow(id: number, doc: string) {
    return this.http.get(
      `http://localhost:5000/api/repozitorijum/getRepozitorijumRow/${id}/${doc}`
    );
  }
  
}
