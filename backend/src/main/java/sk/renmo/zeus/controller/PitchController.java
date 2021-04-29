package sk.renmo.zeus.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;
import sk.renmo.zeus.dto.PitchDto;
import sk.renmo.zeus.model.Pitch;
import sk.renmo.zeus.service.PitchService;

import java.time.LocalDate;
import java.util.Collection;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/offer/{id}/pitch")
@RequiredArgsConstructor
public class PitchController {

    private final PitchService pitchService;

    @GetMapping
    public Collection<LocalDate> getAvailableDates(@PathVariable("id") long offerId) {
        return this.pitchService.getDatesWithPitches(offerId);
    }

    @GetMapping("date")
    public Collection<PitchDto> getPitchesByOfferId(
            @PathVariable("id") long offerId,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date
    ) {
        return this.pitchService.getPitchesByOfferIdAndDate(offerId, date).stream()
                .map(PitchController::toDto)
                .collect(Collectors.toSet());
    }

    private static PitchDto toDto(Pitch pitch) {
        PitchDto dto = new PitchDto();
        dto.setId(pitch.getId());
        dto.setOfferId(pitch.getOfferId());
        dto.setStartDateTime(pitch.getStartDateTime());
        return dto;
    }

}
