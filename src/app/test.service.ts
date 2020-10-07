import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient) { }

  test(): string {
    const http = this.httpClient.get('http://localhost:8080/v1/api/test');
    console.log(http);
    return ;
  }
}
