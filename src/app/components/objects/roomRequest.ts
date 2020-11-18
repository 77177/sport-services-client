import {User} from './user';

export interface RoomRequest {
  id: number;
  requester: User;
  trainer: User;
  startTime: any;
  endTime: any;
  approvedTrainer: boolean;
  approvedSecurity: boolean;
}
