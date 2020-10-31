import { Component, OnInit } from '@angular/core';
import {TestService} from '../../test.service';
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

  constructor(private testService: TestService) { }

  ngOnInit(): void {
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
    return this.getUser().authority === 'ROLE_TRAINER';
  }

  isLearner(): boolean {
    return this.getUser().authority === 'ROLE_ADMIN';
  }

  isAdmin(): boolean {
    return this.getUser().authority === 'ROLE_USER';
  }

  isSecurity(): boolean {
    return this.getUser().authority === 'ROLE_SECURITY';
  }

  getTrainerRequestsForTrainer(): TrainerRequest[] {
    return this.trainerRequestsForTrainer;
  }
}
