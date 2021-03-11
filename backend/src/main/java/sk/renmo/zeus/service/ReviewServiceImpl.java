package sk.renmo.zeus.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sk.renmo.zeus.model.Review;
import sk.renmo.zeus.repository.ReviewRepository;
import sk.renmo.zeus.util.IterableUtils;

import java.util.Collection;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository repository;

    @Override
    public Collection<Review> getReviewsByUser(long userId) {
        Iterable<Review> reviews = this.repository.findAllByCreatorId(userId);
        return IterableUtils.toSet(reviews);
    }

    @Override
    public Collection<Review> getReviewsForBusiness(long businessId) {
        Iterable<Review> reviews = this.repository.findAllByBusinessId(businessId);
        return IterableUtils.toSet(reviews);
    }

}
