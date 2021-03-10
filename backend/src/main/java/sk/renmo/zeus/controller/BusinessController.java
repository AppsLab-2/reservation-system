package sk.renmo.zeus.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sk.renmo.zeus.dto.BusinessDetailDto;
import sk.renmo.zeus.dto.BusinessDto;
import sk.renmo.zeus.model.Business;
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
        return dto;
    }

    private static BusinessDetailDto toDetailDto(Business business) {
        BusinessDetailDto dto = new BusinessDetailDto();
        dto.setId(business.getId());
        dto.setName(business.getName());
        dto.setDescription(business.getDescription());
        return dto;
    }

}
