import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly baseURL = 'https://api.pexels.com/v1';
  private readonly APIKEY = '563492ad6f917000010000018bd3b35c5203439bbd0e39c72c17fd64';


  constructor(private http: HttpClient) { }


  imageGet() {
    return this.http.get(`${this.baseURL}/curated`,
    {headers : new HttpHeaders().append('Authorization', this.APIKEY)});
  }


}
