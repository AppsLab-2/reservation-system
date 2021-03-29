package sk.renmo.zeus.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import sk.renmo.zeus.dto.OfferDto;
import sk.renmo.zeus.model.Offer;
import sk.renmo.zeus.service.OfferService;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class OfferController {

    private final OfferService offerService;

    @GetMapping("/offer/{id}")
    public ResponseEntity<OfferDto> getOfferById(@PathVariable long id) {
        return ResponseEntity.of(
                this.offerService
                        .getOfferById(id)
                        .map(OfferController::toDto)
        );
    }

    @GetMapping("/business/{id}/offer")
    public Collection<OfferDto> getOffersByBusiness(@PathVariable("id") long businessId) {
        return this.offerService
                .getOffersByBusiness(businessId)
                .stream()
                .map(OfferController::toDto)
                .collect(Collectors.toSet());
    }

    static OfferDto toDto(Offer offer) {
        OfferDto dto = new OfferDto();
        dto.setId(offer.getId());
        dto.setBusinessId(offer.getBusinessId());
        dto.setName(offer.getName());
        dto.setDescription(offer.getDescription());
        dto.setPrice(offer.getPrice());
        dto.setDuration(offer.getDuration());
        return dto;
    }

}
