package sk.renmo.zeus.repository;

import org.springframework.data.repository.CrudRepository;
import sk.renmo.zeus.model.Review;

public interface ReviewRepository extends CrudRepository<Review, Long> {
    Iterable<Review> findAllByBusinessId(long businessId);
    Iterable<Review> findAllByCreatorId(long creatorId);
}
