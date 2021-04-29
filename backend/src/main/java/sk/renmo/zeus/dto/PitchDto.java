package sk.renmo.zeus.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class PitchDto {
    private long id;
    private long offerId;
    private LocalDateTime startDateTime;
}
