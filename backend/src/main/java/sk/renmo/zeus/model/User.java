package sk.renmo.zeus.model;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.URL;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Entity
@Getter
@Setter
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

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private Set<Employee> employees;

    @OneToMany(mappedBy = "creator", cascade = CascadeType.ALL)
    private Set<Review> reviews;

    @OneToMany(mappedBy = "recipient")
    private Set<Reservation> reservations;

    @ManyToMany
    @JoinTable(
            name = "favorite_user_business",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "service_id")
    )
    private Set<Business> favoriteBusinesses;

}
