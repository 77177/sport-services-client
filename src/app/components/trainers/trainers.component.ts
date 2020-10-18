import { Component, OnInit } from '@angular/core';
import {TestService} from '../../test.service';
import {Trainer} from '../objects/trainer';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {

  public testObject: string;
  public trainers: Trainer[];
  public sign = 'TRAINERS';

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.test()
      .subscribe(value => this.testObject = value.test);
    this.testService.getTrainers()
      .subscribe(value => this.trainers = value);
  }
}
