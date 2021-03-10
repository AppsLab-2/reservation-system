package sk.renmo.zeus.dto;

import lombok.Data;
import sk.renmo.zeus.model.Address;

// TODO: include what is needed here

@Data
public class BusinessDto {
    private long id;
    private String name;
    private Address address;
}
