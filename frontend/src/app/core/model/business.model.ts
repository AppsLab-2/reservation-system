import { Address } from './address.model';
import { Offer } from './offer.model';
import { WeeklyHours } from './weekly-hours.model';

export interface Business {
  id?: number;
  name: string;
  address: Address;
  headerImage: string;
}

export interface BusinessDetail extends Business {
  description: string;
  offers: Offer[];
  openingHours: WeeklyHours;
  closingHours: WeeklyHours;
}
