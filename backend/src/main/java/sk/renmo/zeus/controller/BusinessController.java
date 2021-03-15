package sk.renmo.zeus.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sk.renmo.zeus.dto.BusinessDetailDto;
import sk.renmo.zeus.dto.BusinessDto;
import sk.renmo.zeus.dto.WeeklyHoursDto;
import sk.renmo.zeus.model.Business;
import sk.renmo.zeus.model.WeeklyHours;
import sk.renmo.zeus.service.BusinessService;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/business")
@RequiredArgsConstructor
public class BusinessController {

    private final BusinessService businessService;

    @GetMapping
    public Collection<BusinessDto> getAllBusinesses() {
        return this.businessService
                .getAllBusinesses()
                .stream()
                .map(BusinessController::toDto)
                .collect(Collectors.toSet());
    }

    @GetMapping("{id}")
    public ResponseEntity<BusinessDetailDto> getBusinessDetail(@PathVariable long id) {
        return ResponseEntity.of(
                this.businessService
                        .getBusinessById(id)
                        .map(BusinessController::toDetailDto)
        );
    }

    private static BusinessDto toDto(Business business) {
        BusinessDto dto = new BusinessDto();
        dto.setId(business.getId());
        dto.setName(business.getName());
        dto.setAddress(business.getAddress());
        dto.setHeaderImage(business.getHeaderImage());
        return dto;
    }

    private static BusinessDetailDto toDetailDto(Business business) {
        BusinessDetailDto dto = new BusinessDetailDto();

        dto.setId(business.getId());
        dto.setName(business.getName());
        dto.setDescription(business.getDescription());
        dto.setAddress(business.getAddress());
        dto.setHeaderImage(business.getHeaderImage());
        dto.setOpeningHours(toDto(business.getOpeningHours()));
        dto.setClosingHours(toDto(business.getClosingHours()));

        dto.setOffers(
                business.getOffers()
                        .stream()
                        .map(OfferController::toDto) // TODO: replace me
                        .collect(Collectors.toSet())
        );

        return dto;
    }

    private static WeeklyHoursDto toDto(WeeklyHours weeklyHours) {
        WeeklyHoursDto dto = new WeeklyHoursDto();
        dto.setMonday(weeklyHours.getMonday());
        dto.setTuesday(weeklyHours.getTuesday());
        dto.setWednesday(weeklyHours.getWednesday());
        dto.setThursday(weeklyHours.getThursday());
        dto.setFriday(weeklyHours.getFriday());
        dto.setSaturday(weeklyHours.getSaturday());
        dto.setSunday(weeklyHours.getSunday());
        return dto;
    }

}
