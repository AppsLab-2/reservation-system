package sk.renmo.zeus.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sk.renmo.zeus.dto.BusinessDto;
import sk.renmo.zeus.service.FavoriteService;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user/favorites")
public class FavoriteController {

    private final FavoriteService favoriteService;

    @GetMapping()
    public Collection<BusinessDto> getFavorites() {
        return this.favoriteService
                .getFavorites()
                .stream()
                .map(BusinessController::toDto)
                .collect(Collectors.toSet());
    }

    @PostMapping("{id}")
    public ResponseEntity<?> addBusinessToFavorites(@PathVariable long id) {
        return this.favoriteService.addBusinessToFavorites(id);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> removeBusinessFromFavorites(@PathVariable long id) {
        return this.favoriteService.removeBusinessFromFavorites(id);
    }
}
