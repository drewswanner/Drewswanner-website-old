import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>('https://drewswanner.com/?rest_route=/wp/v2/posts', {
      params: {
        per_page: '6'
      }
    });
  }
}
