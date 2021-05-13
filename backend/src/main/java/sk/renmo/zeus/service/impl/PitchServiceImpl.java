package sk.renmo.zeus.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sk.renmo.zeus.model.Pitch;
import sk.renmo.zeus.repository.PitchRepository;
import sk.renmo.zeus.service.PitchService;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.Optional;
import java.util.stream.Collectors;

// TODO: move this logic to repository (into query)

@Service
@RequiredArgsConstructor
public class PitchServiceImpl implements PitchService {

    private final PitchRepository repository;

    @Override
    public void deletePitch(Pitch pitch) {
        this.repository.delete(pitch);
    }

    @Override
    public Optional<Pitch> getPitchById(long id) {
        return this.repository.findById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public Collection<Pitch> getPitchesByOfferIdAndDate(long offerId, LocalDate date) {
        return this.repository.findAllByOfferId(offerId)
                .filter(pitch -> pitch.getStartDateTime().toLocalDate().isEqual(date))
                .filter(Pitch::hasNotExpired)
                .collect(Collectors.toSet());
    }

    @Override
    @Transactional(readOnly = true)
    public Collection<LocalDate> getDatesWithPitches(long offerId) {
        return this.repository.findAllByOfferId(offerId)
                .filter(Pitch::hasNotExpired)
                .map(Pitch::getStartDateTime)
                .map(LocalDateTime::toLocalDate)
                .collect(Collectors.toSet());
    }

}
