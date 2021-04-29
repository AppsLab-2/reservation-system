package sk.renmo.zeus.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sk.renmo.zeus.model.Pitch;
import sk.renmo.zeus.model.Reservation;
import sk.renmo.zeus.model.User;
import sk.renmo.zeus.repository.PitchRepository;
import sk.renmo.zeus.repository.ReservationRepository;
import sk.renmo.zeus.util.IterableUtils;

import java.util.Collection;

@Service
@RequiredArgsConstructor
public class ReservationServiceImpl implements ReservationService {

    // should we use PitchService here?
    private final PitchRepository pitchRepository;
    private final ReservationRepository reservationRepository;

    @Override
    @Transactional
    public Reservation createReservationForUser(User user, Pitch pitch) {
        Reservation reservation = new Reservation();

        reservation.setRecipient(user);
        reservation.setOffer(pitch.getOffer());
        reservation.setStartDateTime(pitch.getStartDateTime());

        this.pitchRepository.delete(pitch);
        return this.reservationRepository.save(reservation);
    }

    @Override
    public Collection<Reservation> getReservationsByRecipientId(long recipientId) {
        Iterable<Reservation> reservations = this.reservationRepository.findAllByRecipientId(recipientId);
        return IterableUtils.toSet(reservations);
    }

}
