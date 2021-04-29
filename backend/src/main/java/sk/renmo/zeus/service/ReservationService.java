package sk.renmo.zeus.service;

import sk.renmo.zeus.model.Pitch;
import sk.renmo.zeus.model.Reservation;
import sk.renmo.zeus.model.User;

import java.util.Collection;

public interface ReservationService {
    Reservation createReservationForUser(User user, Pitch pitch);
    Collection<Reservation> getReservationsByRecipientId(long userId);
}
