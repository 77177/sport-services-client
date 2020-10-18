import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Test} from './components/objects/test';
import {Room} from './components/objects/room';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private url = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }


  test(): Observable<Test>{
    return this.httpClient.get<Test>(this.url + '/v1/api/test');
  }

  getRooms(): Observable<Room[]> {
    return this.httpClient.get<Room[]>(this.url + '/v1/api/room/all');
  }
}
