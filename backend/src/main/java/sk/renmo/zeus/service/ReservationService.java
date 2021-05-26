package sk.renmo.zeus.service;

import sk.renmo.zeus.model.Reservation;
import sk.renmo.zeus.model.User;

import java.time.LocalDate;
import java.util.Collection;
import java.util.Map;
import java.util.Optional;

public interface ReservationService {
    Optional<Reservation> createReservationForUser(User user, long pitchId);
    Collection<Reservation> getReservationsByRecipientId(long userId);
    Collection<Reservation> getReservationsByBusinessAndDate(long userId, long businessId, LocalDate date);
    Map<LocalDate, Collection<Reservation>> getDatesToReservationsMapForBusiness(long userId, long businessId);
}
