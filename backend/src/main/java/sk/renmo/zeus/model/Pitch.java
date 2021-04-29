package sk.renmo.zeus.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Pitch {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "offer_id", nullable = false, insertable = false, updatable = false)
    private Offer offer;

    @Column(name = "offer_id", nullable = false)
    private long offerId;

    @NotNull
    private LocalDateTime startDateTime;

    @Nullable
    private LocalDateTime expireDateTime;

    public boolean hasNotExpired() {
        LocalDateTime expiry = this.getExpireDateTime();
        return expiry == null || LocalDateTime.now().isBefore(expiry);
    }

}
