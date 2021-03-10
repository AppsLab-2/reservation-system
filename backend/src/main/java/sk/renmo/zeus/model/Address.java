package sk.renmo.zeus.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;
import javax.validation.constraints.NotBlank;

@Data
@Embeddable
@NoArgsConstructor
@AllArgsConstructor
public class Address {

    @NotBlank
    private String street;

    @NotBlank
    private String town;

    @NotBlank
    private String postalCode;

    @NotBlank
    private String country;

}
