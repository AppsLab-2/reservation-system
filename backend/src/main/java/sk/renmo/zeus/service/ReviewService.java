package sk.renmo.zeus.service;

import sk.renmo.zeus.model.Review;

import java.util.Collection;

public interface ReviewService {
    Collection<Review> getReviewsByUser(long userId);
    Collection<Review> getReviewsForBusiness(long businessId);
}
