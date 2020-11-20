import {User} from './user';
import {Room} from './room';

export interface RoomRequest {
  id: number;
  requester: User;
  room: Room;
  startTime: any;
  endTime: any;
  approvedAdmin: boolean;
  approvedSecurity: boolean;
}
