package sk.renmo.zeus.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import sk.renmo.zeus.dto.ReviewDto;
import sk.renmo.zeus.model.Review;
import sk.renmo.zeus.service.ReviewService;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService reviewService;

    @GetMapping("/business/{id}/review")
    public Collection<ReviewDto> getReviewsForBusiness(@PathVariable("id") long businessId) {
        return this.reviewService
                .getReviewsForBusiness(businessId)
                .stream()
                .map(ReviewController::toDto)
                .collect(Collectors.toSet());
    }

    @GetMapping("/user/{id}/review")
    public Collection<ReviewDto> getReviewsByUser(@PathVariable("id") long userId) {
        return this.reviewService
                .getReviewsByUser(userId)
                .stream()
                .map(ReviewController::toDto)
                .collect(Collectors.toSet());
    }

    private static ReviewDto toDto(Review review) {
        ReviewDto dto = new ReviewDto();
        dto.setId(review.getId());
        dto.setCreatorId(review.getCreatorId());
        dto.setBusinessId(review.getBusinessId());
        dto.setTitle(review.getTitle());
        dto.setContent(review.getContent());
        dto.setRating(review.getRating());
        return dto;
    }

}
