package sk.renmo.zeus.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sk.renmo.zeus.model.*;
import sk.renmo.zeus.repository.ReservationRepository;
import sk.renmo.zeus.service.EmployeeService;
import sk.renmo.zeus.service.PitchService;
import sk.renmo.zeus.service.ReservationService;
import sk.renmo.zeus.util.IterableUtils;

import java.util.Collection;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReservationServiceImpl implements ReservationService {

    private final PitchService pitchService;
    private final EmployeeService employeeService;
    private final ReservationRepository reservationRepository;

    @Override
    @Transactional
    public Optional<Reservation> createReservationForUser(User user, long pitchId) {
        return this.pitchService.getPitchById(pitchId)
                .filter(Pitch::hasNotExpired)
                .map(pitch -> this.createReservation(user, pitch));
    }

    private Reservation createReservation(User user, Pitch pitch) {
        Reservation reservation = new Reservation();

        reservation.setRecipient(user);
        reservation.setOffer(pitch.getOffer());
        reservation.setStartDateTime(pitch.getStartDateTime());

        this.pitchService.deletePitch(pitch);
        return this.reservationRepository.save(reservation);
    }

    @Override
    public Collection<Reservation> getReservationsByRecipientId(long recipientId) {
        Iterable<Reservation> reservations = this.reservationRepository.findAllByRecipientId(recipientId);
        return IterableUtils.toSet(reservations);
    }

    @Override
    public Collection<Reservation> getReservationsByBusiness(long userId, long businessId) {
        return this.employeeService.getEmployeeByUserIdAndBusinessId(userId, businessId)
                .map(Employee::getBusiness)
                .map(ReservationServiceImpl::getAllReservations)
                // TODO: should we throw here
                .orElse(Set.of());
    }

    private static Collection<Reservation> getAllReservations(Business business) {
        return business.getOffers().stream()
                .flatMap(offer -> offer.getReservations().stream())
                .collect(Collectors.toSet());
    }

}
