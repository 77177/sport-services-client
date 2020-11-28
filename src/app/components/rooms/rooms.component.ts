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
  public sign = 'ROOMS';
  public rooms: Room[];
  public roomRequest = {
    roomId: -1,
    trainerId: -1,
    start: '',
    end: ''
  };

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.getRooms()
      .subscribe(value => this.rooms = value);
  }

  getUser(): any {
    return this.testService.getUser();
  }

  isTrainer(): boolean {
    return this.getUser().authority === 'ROLE_TRAINER';
  }

  createRoomRequest(roomId: number, trainerId: any): void {
    console.log('working');
    this.roomRequest.roomId = roomId;
    this.roomRequest.trainerId = trainerId;
    console.log(this.roomRequest);
  }

}
