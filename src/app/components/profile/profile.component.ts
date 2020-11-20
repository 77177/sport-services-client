import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TestService} from '../../test.service';
import {RoomRequest} from '../objects/roomRequest';
import {TrainerRequest} from '../objects/trainerRequest';
import {waitForAsync} from '@angular/core/testing';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public testObject: string;
  public sign = 'PROFILE';
  public creds = {username: '', password: ''};
  public trainerRequestsForTrainer: TrainerRequest[];
  public roomRequestForTrainer: RoomRequest[];
  public trainerRequestsForLearner: TrainerRequest[];
  public allRoomRequests: RoomRequest[];
  public allTrainerRequests: TrainerRequest[];
  @Input() currentUser;

  constructor(private testService: TestService) {
  }

  login(): void {
    this.testService.login(this.creds.username, this.creds.password);
  }

  logout(): void {
    this.testService.logout();
  }

  isLoggedIn(): boolean {
    return this.testService.isLoggedIn();
  }

  getUser(): any {
    return this.testService.getUser();
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

  getTrainerRequestsForTrainer(): TrainerRequest[] {
    return this.trainerRequestsForTrainer;
  }

  getTrainerRequestsForLearner(): TrainerRequest[] {
    return this.trainerRequestsForLearner;
  }

  getRoomRequestsForTrainer(): RoomRequest[] {
    return this.roomRequestForTrainer;
  }

  getAllRoomRequests(): RoomRequest[] {
    return this.allRoomRequests;
  }

  getAllTrainerRequests(): TrainerRequest[] {
    return this.allTrainerRequests;
  }

  refresh(): void {
    this.currentUser = this.getUser();
    if (this.isTrainer()) {
      this.testService.getTrainingRequestsForTrainer(this.currentUser.id)
        .subscribe(value => this.trainerRequestsForTrainer = value);
      this.testService.getRoomRequestsForTrainer(this.currentUser.id)
        .subscribe(value => this.roomRequestForTrainer = value);
    } else if (this.isLearner()) {
      this.testService.getTrainingRequestsForLearner(this.getUser().id)
        .subscribe(value => this.trainerRequestsForLearner = value);
    } else if (this.isAdmin()) {
      this.testService.getAllRoomRequests()
        .subscribe(value => this.allRoomRequests = value);
      this.testService.getAllTrainerRequests()
        .subscribe(value => this.allTrainerRequests = value);
    } else if (this.isSecurity()) {
      this.testService.getAllRoomRequests()
        .subscribe(value => this.allRoomRequests = value);
      this.testService.getAllTrainerRequests()
        .subscribe(value => this.allTrainerRequests = value);
    }
  }
}
