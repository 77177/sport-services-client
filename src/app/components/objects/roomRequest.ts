import {User} from './user';
import {Room} from './room';

export interface RoomRequest {
  id: number;
  requester: User;
  room: Room;
  startTime: Date;
  endTime: Date;
  approvedAdmin: boolean;
  approvedSecurity: boolean;
}
