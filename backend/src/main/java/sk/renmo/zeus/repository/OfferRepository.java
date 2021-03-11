package sk.renmo.zeus.repository;

import org.springframework.data.repository.CrudRepository;
import sk.renmo.zeus.model.Offer;

public interface OfferRepository extends CrudRepository<Offer, Long> {
    Iterable<Offer> findAllByBusinessId(long businessId);
}
