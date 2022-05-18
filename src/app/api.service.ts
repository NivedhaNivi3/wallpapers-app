import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  sub$ = new Subject();
  count = 0;

  private BASE_URL = 'https://api.pexels.com/v1';
  private API_KEY = '563492ad6f917000010000018bd3b35c5203439bbd0e39c72c17fd64';

  constructor(private http: HttpClient) {
    setInterval(() => {
      this.count++;
      this.sub$.next({ firstName: 'Nivedha', age: 99 });
    }, 1000);
  }

  getImage() {
    return this.http.get(`${this.BASE_URL}/curated`, {
      headers: new HttpHeaders().append('Authorization', this.API_KEY),
    });
  }
}
