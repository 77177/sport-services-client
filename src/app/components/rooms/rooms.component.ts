import { Component, OnInit } from '@angular/core';
import {TestService} from '../../test.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit(): void {
  }

  test(): string {
    return this.testService.test();
  }

}
