package sk.renmo.zeus.dto;

import lombok.Data;

@Data
public class ReviewDto {
    private long id;
    private long creatorId;
    private long businessId;
    private String title;
    private String content;
    private long rating;
}
