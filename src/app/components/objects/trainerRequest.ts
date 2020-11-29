import {User} from './user';

export interface TrainerRequest {
  id: number;
  requester: User;
  trainer: User;
  startTime: Date;
  endTime: Date;
  approvedTrainer: boolean;
  approvedSecurity: boolean;
}
