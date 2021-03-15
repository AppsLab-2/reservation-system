package sk.renmo.zeus.dto;

import lombok.Data;

import java.time.LocalTime;

@Data
public class WeeklyHoursDto {
    private LocalTime monday;
    private LocalTime tuesday;
    private LocalTime wednesday;
    private LocalTime thursday;
    private LocalTime friday;
    private LocalTime saturday;
    private LocalTime sunday;
}
