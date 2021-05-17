package sk.renmo.zeus.service;

import sk.renmo.zeus.model.Reservation;
import sk.renmo.zeus.model.User;

import java.util.Collection;
import java.util.Optional;

public interface ReservationService {
    Optional<Reservation> createReservationForUser(User user, long pitchId);
    Collection<Reservation> getReservationsByRecipientId(long userId);
    Collection<Reservation> getReservationsByBusiness(long userId, long businessId);
}
