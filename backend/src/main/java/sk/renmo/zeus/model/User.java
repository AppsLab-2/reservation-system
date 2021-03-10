package sk.renmo.zeus.model;

import lombok.Data;
import org.hibernate.validator.constraints.URL;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Data
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank
    private String username;

    @Email
    @NotBlank
    private String mailAddress;

    @NotBlank
    private String password;

    @URL
    private String icon;

    @NotNull
    private Address address;

    @OneToMany(mappedBy = "creator", cascade = CascadeType.ALL)
    private Set<Review> reviews;

    @ManyToMany
    @JoinTable(
            name = "favorite_user_business",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "service_id")
    )
    private Set<Business> favoriteBusinesses;

}
