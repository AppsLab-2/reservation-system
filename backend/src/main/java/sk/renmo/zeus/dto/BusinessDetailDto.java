package sk.renmo.zeus.dto;

import lombok.Data;
import sk.renmo.zeus.model.Address;

import java.util.Collection;

@Data
public class BusinessDetailDto {
    private long id;
    private String name;
    private String description;
    private Address address;
    private String headerImage;
    private Collection<OfferDto> offers;
    private WeeklyHoursDto openingHours;
    private WeeklyHoursDto closingHours;
}
