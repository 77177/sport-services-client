import {User} from './user';

export interface TrainerRequest {
  id: number;
  requester: User;
  trainer: User;
  startTime: any;
  endTime: any;
  approvedTrainer: boolean;
  approvedSecurity: boolean;
}
