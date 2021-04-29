package sk.renmo.zeus.repository;

import org.springframework.data.repository.CrudRepository;
import sk.renmo.zeus.model.Pitch;

import java.util.stream.Stream;

public interface PitchRepository extends CrudRepository<Pitch, Long> {
    Stream<Pitch> findAllByOfferId(long offerId);
}
