package sk.renmo.zeus.service;

import sk.renmo.zeus.model.Business;

import java.util.Collection;
import java.util.Optional;

public interface BusinessService {
    Collection<Business> getAllBusinesses();
    Optional<Business> getBusinessById(long id);
    Collection<Business> getSearchResults(String query);
}
