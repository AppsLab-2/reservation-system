package sk.renmo.zeus.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.time.LocalTime;

@Data
@Entity
public class Offer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    private Business business;

    @NotBlank
    private String name;

    @NotBlank
    private String description;

    @Positive
    private float price;

    @NotNull
    private LocalTime duration;

}
