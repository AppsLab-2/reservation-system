package sk.renmo.zeus.dto;

import lombok.Data;

import java.time.LocalTime;

@Data
public class OfferDto {
    private long id;
    private long businessId;
    private String name;
    private String description;
    private float price;
    private LocalTime duration;
}
