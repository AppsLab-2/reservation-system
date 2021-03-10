package sk.renmo.zeus.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.time.LocalTime;

@Data
@Entity
public class WeeklyHours {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    private LocalTime monday;

    @NotNull
    private LocalTime tuesday;

    @NotNull
    private LocalTime wednesday;

    @NotNull
    private LocalTime thursday;

    @NotNull
    private LocalTime friday;

    @NotNull
    private LocalTime saturday;

    @NotNull
    private LocalTime sunday;

}
