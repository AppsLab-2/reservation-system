package sk.renmo.zeus.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.time.LocalTime;
import java.util.Set;

@Entity
@Getter
@Setter
public class Offer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "business_id", nullable = false, insertable = false, updatable = false)
    private Business business;

    @Column(name = "business_id", nullable = false)
    private long businessId;

    @OneToMany(mappedBy = "offer", cascade = CascadeType.ALL)
    private Set<Pitch> pitches;

    @OneToMany(mappedBy = "offer")
    private Set<Reservation> reservations;

    @NotBlank
    private String name;

    @NotBlank
    private String description;

    @Positive
    private float price;

    @NotNull
    private LocalTime duration;

    public void setBusiness(Business business) {
        this.business = business;
        this.businessId = business.getId();
    }

}
