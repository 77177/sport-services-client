import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Test} from './components/objects/test';
import {Room} from './components/objects/room';
import {User} from './components/objects/user';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  user = {
    username: '',
    firstName: '',
    password: '',
    lastName: '',
    email: '',
    authority: '',
    enabled: 'true'
  };
  private url = 'http://localhost:4200';

  constructor(private httpClient: HttpClient) { }

  test(): Observable<Test>{
    return this.httpClient.get<Test>(this.url + '/v1/api/test');
  }

  getRooms(): Observable<Room[]> {
    return this.httpClient.get<Room[]>(this.url + '/v1/api/room/all');
  }

  getTrainers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url + '/v1/api/trainer/all');
  }

  getTrainingRequestsForLearner(learnerId: number): Observable<any> {
    return this.httpClient.get<any>(this.url + '/v1/api/request/train/learner/' + learnerId);
  }

  getRoomRequestsForTrainer(trainerId: number): Observable<any> {
    return this.httpClient.get<any>(this.url + '/v1/api/request/room/trainer/' + trainerId);
  }

  getAllTrainerRequests(): Observable<any> {
    return this.httpClient.get<any>(this.url + '/v1/api/request/train/all');
  }

  getAllRoomRequests(): Observable<any> {
    return this.httpClient.get<any>(this.url + '/v1/api/request/room/all');
  }

  login(username: string, password: string): void {
    const creds = {username, password};
    this.httpClient.post<any>(this.url + '/login?username=' + username + '&password=' + password, creds)
      .subscribe(value => this.user = value);
  }

  logout(): void {
    this.httpClient.post<any>(this.url + '/logout', {})
      .subscribe(value => this.user.username = value.test);
  }

  isLoggedIn(): boolean {
    return this.user.username !== '';
  }

  register(userToRegister): void {
    this.httpClient.post<any>(this.url + '/v1/api/user/', userToRegister).subscribe(value => console.log(value));
  }

  getUser(): any {
    return this.user;
  }
}
