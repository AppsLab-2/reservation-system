package sk.renmo.zeus.repository;

import org.springframework.data.repository.CrudRepository;
import sk.renmo.zeus.model.Reservation;

public interface ReservationRepository extends CrudRepository<Reservation, Long> {
    Iterable<Reservation> findAllByRecipientId(long recipientId);
}
