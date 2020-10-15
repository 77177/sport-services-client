import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Test} from './components/objects/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient) { }


  test(): Observable<Test>{
    return this.httpClient.get<Test>('http://localhost:8080/v1/api/test');
  }
}
