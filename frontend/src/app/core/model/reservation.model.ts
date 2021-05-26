import { Offer } from './offer.model';

export interface Reservation {
  id: number;
  recipientId: number;
  startDateTime: Date;
  offer: Offer;
}
