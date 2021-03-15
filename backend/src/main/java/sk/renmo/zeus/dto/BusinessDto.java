package sk.renmo.zeus.dto;

import lombok.Data;
import sk.renmo.zeus.model.Address;

@Data
public class BusinessDto {
    private long id;
    private String name;
    private Address address;
    private String headerImage;
}
