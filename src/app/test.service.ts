import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Test} from './components/objects/test';
import {Room} from './components/objects/room';
import {User} from './components/objects/user';
import {TrainerRequest} from './components/objects/trainerRequest';
import {RoomRequest} from './components/objects/roomRequest';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  public trainerRequestsForTrainer: TrainerRequest[];
  public roomRequestForTrainer: RoomRequest[];
  public trainerRequestsForLearner: TrainerRequest[];
  public allRoomRequests: RoomRequest[];
  public allTrainerRequests: TrainerRequest[];
  user = {
    username: '',
    firstName: '',
    password: '',
    lastName: '',
    email: '',
    authority: '',
    enabled: true
  } as User;

  private url = 'http://localhost:4200';

  constructor(private httpClient: HttpClient) { }

  test(): Observable<Test>{
    return this.httpClient.get<Test>(this.url + '/v1/api/test');
  }

  isTrainer(): boolean {
    return this.getUser().authority === 'ROLE_TRAINER';
  }

  isAdmin(): boolean {
    return this.getUser().authority === 'ROLE_ADMIN';
  }

  isLearner(): boolean {
    return this.getUser().authority === 'ROLE_USER';
  }

  isSecurity(): boolean {
    return this.getUser().authority === 'ROLE_SECURITY';
  }

  refresh(): void {
    const currentUser = this.getUser();
    if (this.isTrainer()) {
      this.getTrainingRequestsForTrainer(currentUser.id)
        .subscribe(value => this.trainerRequestsForTrainer = value);
      this.getRoomRequestsForTrainer(currentUser.id)
        .subscribe(value => this.roomRequestForTrainer = value);
    } else if (this.isLearner()) {
      this.getTrainingRequestsForLearner(currentUser.id)
        .subscribe(value => this.trainerRequestsForLearner = value);
    } else if (this.isAdmin()) {
      this.getAllRoomRequests()
        .subscribe(value => this.allRoomRequests = value);
      this.getAllTrainerRequests()
        .subscribe(value => this.allTrainerRequests = value);
    } else if (this.isSecurity()) {
      this.getAllRoomRequests()
        .subscribe(value => this.allRoomRequests = value);
      this.getAllTrainerRequests()
        .subscribe(value => this.allTrainerRequests = value);
    }
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

  getTrainingRequestsForTrainer(trainerId: number): Observable<TrainerRequest[]> {
    return this.httpClient.get<TrainerRequest[]>(this.url + '/v1/api/request/train/trainer/' + trainerId);
  }

  getRoomRequestsForTrainer(trainerId: number): Observable<any> {
    return this.httpClient.get<any>(this.url + '/v1/api/request/room/trainer/' + trainerId);
  }

  getAllTrainerRequests(): Observable<TrainerRequest[]> {
    return this.httpClient.get<TrainerRequest[]>(this.url + '/v1/api/request/train/all');
  }

  getAllRoomRequests(): Observable<any> {
    return this.httpClient.get<any>(this.url + '/v1/api/request/room/all');
  }

  login(username: string, password: string): void {
    let creds = {username, password};
    this.httpClient.post<any>(this.url + '/login?username=' + username +"&password=" + password, creds)
      .subscribe(value => {
        this.user = value;
        this.refresh();
      });
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

  getUser(): User {
    return this.user;
  }

  createRoomRequest(roomRequest): void {
    this.httpClient.post<any>(this.url + '/v1/api/request/room/', roomRequest)
      .subscribe(value => this.refresh());
  }

  createTrainerRequest(trainerRequest): void {
    this.httpClient.post<any>(this.url + '/v1/api/request/train/', trainerRequest)
      .subscribe(value => this.refresh());
  }

  sendTrainerRequestApprovalBySecurity(trainerRequestId): void {
    this.httpClient.get<any>(this.url + '/v1/api/request/train/security/approve/' + trainerRequestId)
      .subscribe(value => this.refresh());
  }

  sendTrainerRequestApprovalByTrainer(trainerRequestId): void {
    this.httpClient.get<any>(this.url + '/v1/api/request/train/trainer/approve/' + trainerRequestId)
      .subscribe(value => this.refresh());
  }

  sendRoomRequestApprovalBySecurity(roomRequestId): void {
    this.httpClient.get<any>(this.url + '/v1/api/request/room/security/approve/' + roomRequestId)
      .subscribe(value => this.refresh());
  }

  sendRoomRequestApprovalByAdmin(roomRequestId): void {
    this.httpClient.get<any>(this.url + '/v1/api/request/room/admin/approve/' + roomRequestId)
      .subscribe(value => this.refresh());
  }

  deleteRoomRequest(roomRequestId): void {
    this.httpClient.delete<any>(this.url + '/v1/api/request/room/' + roomRequestId)
      .subscribe(value => this.refresh());
  }

  deleteTrainerRequest(trainerRequestId): void {
    this.httpClient.delete<any>(this.url + '/v1/api/request/train/' + trainerRequestId)
      .subscribe(value => this.refresh());
  }

  createRoom(newRoom): void {
    this.httpClient.post<any>(this.url + '/v1/api/room/', newRoom)
      .subscribe(value => this.refresh());
  }
}
