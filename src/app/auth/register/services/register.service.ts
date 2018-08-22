
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) { }
  
  getCoutries(term) {
    if (term) {
      return this.http.get<any>(`https://restcountries.eu/rest/v2/name/${term}`);
    } else {
      return this.http.get<any>('https://restcountries.eu/rest/v2/all');
    }
  }
}