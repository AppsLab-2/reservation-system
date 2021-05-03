package sk.renmo.zeus.service;

import org.springframework.http.ResponseEntity;
import sk.renmo.zeus.model.Business;

import java.util.Collection;

public interface FavoriteService {
    Collection<Business> getFavorites();

    ResponseEntity<?> addBusinessToFavorites(long businessId);

    ResponseEntity<?> removeBusinessFromFavorites(long businessId);
}
