package sk.renmo.zeus.service;

import sk.renmo.zeus.model.Pitch;

import java.time.LocalDate;
import java.util.Collection;
import java.util.Optional;

public interface PitchService {
    Optional<Pitch> getPitchById(long id);
    Collection<Pitch> getPitchesByOfferIdAndDate(long offerId, LocalDate date);
    Collection<LocalDate> getDatesWithPitches(long offerId);
}
