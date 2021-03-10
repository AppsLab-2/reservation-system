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
public class Contact {

    @NotBlank
    private String phoneNumber;

    @NotBlank
    private String mailAddress;

}
