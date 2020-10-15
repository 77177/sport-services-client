import { Component, OnInit } from '@angular/core';
import {TestService} from '../../test.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {

  public testObject: string;

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.test()
      .subscribe(value => this.testObject = value.test);
  }
}
