import { Component, OnInit } from '@angular/core';
import {TestService} from '../../test.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  public testObject: string;

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.test()
      .subscribe(value => this.testObject = value.test);
  }

}
