package sk.renmo.zeus.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ReservationDto {
    private long id;
    private long recipientId;
    private OfferDto offer;
    private LocalDateTime startDateTime;
}
