package sk.renmo.zeus.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "offer_id", nullable = false, insertable = false, updatable = false)
    private Offer offer;

    @Column(name = "offer_id", nullable = false)
    private long offerId;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "recipient_id", nullable = false, insertable = false, updatable = false)
    private User recipient;

    @Column(name = "recipient_id", nullable = false)
    private long recipientId;

    @NotNull
    private LocalDateTime startDateTime;

    public void setOffer(Offer offer) {
        this.offer = offer;
        this.offerId = offer.getId();
    }

    public void setRecipient(User recipient) {
        this.recipient = recipient;
        this.recipientId = recipient.getId();
    }

}
