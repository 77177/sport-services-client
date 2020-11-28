import { Component, OnInit } from '@angular/core';
import {TestService} from '../../test.service';
import {User} from '../objects/user';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {

  public testObject: string;
  public sign = 'TRAINERS';
  public trainers: User[];
  public trainerRequest = {
    requesterId: -1,
    trainerId: -1,
    start: '',
    end: ''
  };

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.getTrainers()
      .subscribe(value => this.trainers = value);
  }

  getUser(): any {
    return this.testService.getUser();
  }

  isLearner(): boolean {
    return this.getUser().authority === 'ROLE_USER';
  }

  createTrainerRequest(requesterId: number, trainerId: any): void {
    console.log('working');
    this.trainerRequest.requesterId = requesterId;
    this.trainerRequest.trainerId = trainerId;
    console.log(this.trainerRequest);
    this.testService.createTrainerRequest(this.trainerRequest);
  }
}
