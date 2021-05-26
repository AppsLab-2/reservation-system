import { Profile } from './profile.model';

export interface Employee {
  id?: number;
  userId: number;
  businessId: number;
  role: any;
  profile: Profile;
}
