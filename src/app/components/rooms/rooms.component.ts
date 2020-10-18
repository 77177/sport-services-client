import { Component, OnInit } from '@angular/core';
import {TestService} from '../../test.service';
import {Room} from '../objects/room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  public testObject: string;
  public sign: string;
  public rooms: Room[];

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.test()
      .subscribe(value => this.testObject = value.test);
    this.testService.getRooms()
      .subscribe(value => this.rooms = value);

    this.sign = 'ROOMS';

  }

}
