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

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.getTrainers()
      .subscribe(value => this.trainers = value);
  }
}
