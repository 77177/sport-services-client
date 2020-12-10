import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TestService} from '../../test.service';
import {RoomRequest} from '../objects/roomRequest';
import {TrainerRequest} from '../objects/trainerRequest';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public testObject: string;
  public sign = 'PROFILE';
  public creds = {username: '', password: ''};
  public newRoom = {
    area: -1
  };
  @Input() currentUser;

  constructor(private testService: TestService) {
  }

  login(): void {
    this.testService.login(this.creds.username, this.creds.password);
  }

  logout(): void {
    this.testService.logout();
  }

  isLoggedIn(): boolean {
    return this.testService.isLoggedIn();
  }

  getUser(): any {
    return this.testService.getUser();
  }

  isTrainer(): boolean {
    return this.testService.isTrainer();
  }

  isAdmin(): boolean {
    return this.testService.isAdmin();
  }

  isLearner(): boolean {
    return this.testService.isLearner();
  }

  isSecurity(): boolean {
    return this.testService.isSecurity();
  }

  getTrainerRequestsForTrainer(): TrainerRequest[] {
    return this.testService.trainerRequestsForTrainer;
  }

  getTrainerRequestsForLearner(): TrainerRequest[] {
    return this.testService.trainerRequestsForLearner;
  }

  getRoomRequestsForTrainer(): RoomRequest[] {
    return this.testService.roomRequestForTrainer;
  }

  getAllRoomRequests(): RoomRequest[] {
    return this.testService.allRoomRequests;
  }

  getAllTrainerRequests(): TrainerRequest[] {
    return this.testService.allTrainerRequests;
  }

  refresh(): void {
    this.testService.refresh();
  }

  sendTrainerRequestApprovalBySecurity(trainerRequestId): void {
    this.testService.sendTrainerRequestApprovalBySecurity(trainerRequestId);
  }

  sendRoomRequestApprovalBySecurity(roomRequestId): void {
    this.testService.sendRoomRequestApprovalBySecurity(roomRequestId);
  }

  sendTrainerRequestApprovalByTrainer(trainerRequestId): void {
    this.testService.sendTrainerRequestApprovalByTrainer(trainerRequestId);
  }

  sendRoomRequestApprovalByAdmin(roomRequestId): void {
    this.testService.sendRoomRequestApprovalByAdmin(roomRequestId);
  }

  deleteRoomRequest(roomRequestId): void {
    this.testService.deleteRoomRequest(roomRequestId);
  }

  deleteTrainerRequest(trainerRequestId): void {
    this.testService.deleteTrainerRequest(trainerRequestId);
  }

  getDate(milliseconds): Date {
    return new Date(milliseconds);
  }

  createRoom(): void {
    this.testService.createRoom(this.newRoom);
  }
}

