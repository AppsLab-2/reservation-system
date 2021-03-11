package sk.renmo.zeus.model;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.URL;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Entity
@Getter
@Setter
public class Business {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank
    private String name;

    @NotBlank
    private String description;

    @NotNull
    @OneToMany(mappedBy = "business", cascade = CascadeType.ALL)
    private Set<Offer> offers;

    @OneToMany(mappedBy = "business", cascade = CascadeType.ALL)
    private Set<Review> reviews;

    @NotNull
    private Address address;

    @OneToOne(fetch = FetchType.LAZY, optional = false, cascade = CascadeType.ALL)
    private WeeklyHours openingHours;

    @OneToOne(fetch = FetchType.LAZY, optional = false, cascade = CascadeType.ALL)
    private WeeklyHours closingHours;

    @NotNull
    private Contact contact;

    @NotNull
    @Enumerated(EnumType.ORDINAL)
    private Tag tag;

    @URL
    @NotBlank
    private String headerImage;

}
