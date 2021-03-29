package sk.renmo.zeus.service;

import sk.renmo.zeus.model.Offer;

import java.util.Collection;
import java.util.Optional;

public interface OfferService {
    Optional<Offer> getOfferById(long id);
    Collection<Offer> getOffersByBusiness(long businessId);
}
