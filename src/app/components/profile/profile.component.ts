import { Component, OnInit } from '@angular/core';
import {TestService} from '../../test.service';
import { RoomRequest } from '../objects/roomRequest';
import {TrainerRequest} from '../objects/trainerRequest';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public testObject: string;
  public sign = 'PROFILE';
  public creds = { username: '', password: ''};
  public trainerRequestsForTrainer: TrainerRequest[];
  public roomRequestForTrainer: RoomRequest[];
  public trainerRequestsForLearner: TrainerRequest[];

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.getTrainingRequestsForLearner(this.getUser().id)
      .subscribe(value => this.trainerRequestsForTrainer = value);
  }

  login(): void {
    this.testService.login(this.creds.username, this.creds.password);
  }

  logout(): void {
    this.testService.logout();
  }

  isValidUsername(): boolean {
    return this.testService.isLoggedIn();
  }

  getUser(): any {
    return this.testService.getUser();
  }

  isTrainer(): boolean {
    this.testService.getTrainingRequestsForTrainer(this.getUser().id)
      .subscribe(value => this.trainerRequestsForTrainer = value);
    this.testService.getRoomRequestsForTrainer(this.getUser().id)
      .subscribe(value => this.roomRequestForTrainer = value);
    return this.getUser().authority === 'ROLE_TRAINER';
  }

  isAdmin(): boolean {
    return this.getUser().authority === 'ROLE_ADMIN';
  }

  isLearner(): boolean {
    this.testService.getTrainingRequestsForLearner(this.getUser().id)
      .subscribe(value => this.trainerRequestsForLearner = value);
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
}
