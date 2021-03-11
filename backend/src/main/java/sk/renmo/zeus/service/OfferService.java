package sk.renmo.zeus.service;

import sk.renmo.zeus.model.Offer;

import java.util.Collection;

public interface OfferService {
    Collection<Offer> getOffersByBusiness(long businessId);
}
