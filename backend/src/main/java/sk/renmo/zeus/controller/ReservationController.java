package sk.renmo.zeus.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sk.renmo.zeus.dto.ReservationDto;
import sk.renmo.zeus.model.Reservation;
import sk.renmo.zeus.model.User;
import sk.renmo.zeus.service.ReservationService;
import sk.renmo.zeus.service.UserService;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/reservation")
@RequiredArgsConstructor
public class ReservationController {

    private final UserService userService;
    private final ReservationService reservationService;

    @GetMapping
    public Collection<ReservationDto> getReservationsByUser() {
        User user = this.userService.getCurrentAuthenticatedUser();
        return this.reservationService.getReservationsByRecipientId(user.getId()).stream()
                .map(ReservationController::toDto)
                .collect(Collectors.toSet());
    }

    @GetMapping("/business/{id}")
    public Collection<ReservationDto> getReservationsByBusiness(@PathVariable("id") long businessId) {
        User user = this.userService.getCurrentAuthenticatedUser();
        return this.reservationService.getReservationsByBusiness(user.getId(), businessId).stream()
                .map(ReservationController::toDto)
                .collect(Collectors.toSet());
    }

    @PostMapping
    public ResponseEntity<ReservationDto> createReservation(@RequestParam long pitchId) {
        User user = this.userService.getCurrentAuthenticatedUser();
        return ResponseEntity.of(
                this.reservationService.createReservationForUser(user, pitchId)
                        .map(ReservationController::toDto)
        );
    }

    private static ReservationDto toDto(Reservation reservation) {
        ReservationDto dto = new ReservationDto();
        dto.setId(reservation.getId());
        dto.setRecipientId(reservation.getOfferId());
        dto.setOffer(OfferController.toDto(reservation.getOffer()));
        dto.setStartDateTime(reservation.getStartDateTime());
        return dto;
    }

}
