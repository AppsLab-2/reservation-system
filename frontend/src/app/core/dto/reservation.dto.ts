import { Offer } from '../model/offer.model';

export interface ReservationDto {
  id: number;
  recipientId: number;
  startDateTime: string;
  offer: Offer;
}
