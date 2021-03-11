package sk.renmo.zeus.model;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Range;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Getter
@Setter
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "creator_id", nullable = false, insertable = false, updatable = false)
    private User creator;

    @Column(name = "creator_id", nullable = false)
    private long creatorId;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "business_id", nullable = false, insertable = false, updatable = false)
    private Business business;

    @Column(name = "business_id", nullable = false)
    private long businessId;

    @NotBlank
    private String title;

    @NotBlank
    private String content;

    @Range(min = 1, max = 5)
    private int rating;

    public void setCreator(User creator) {
        this.creator = creator;
        this.creatorId = creator.getId();
    }

    public void setBusiness(Business business) {
        this.business = business;
        this.businessId = business.getId();
    }

}
