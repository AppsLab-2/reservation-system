package sk.renmo.zeus.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import sk.renmo.zeus.model.Business;
import sk.renmo.zeus.model.User;
import sk.renmo.zeus.repository.UserRepository;
import sk.renmo.zeus.service.BusinessService;
import sk.renmo.zeus.service.FavoriteService;
import sk.renmo.zeus.service.UserService;

import java.util.Collection;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FavoriteServiceImpl implements FavoriteService {

    private final UserService userService;
    private final UserRepository userRepository;
    private final BusinessService businessService;

    @Override
    public Collection<Business> getFavorites() {
        return userService.getCurrentAuthenticatedUser().getFavoriteBusinesses();
    }

    @Override
    public ResponseEntity<?> addBusinessToFavorites(long businessId) {
        Optional<Business> optionalBusiness = businessService.getBusinessById(businessId);

        if (optionalBusiness.isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        Business business = optionalBusiness.get();
        User user = userService.getCurrentAuthenticatedUser();

        user.getFavoriteBusinesses()
                .add(business);

        userRepository.save(user);
        return ResponseEntity.ok().build();
    }

    @Override
    public ResponseEntity<?> removeBusinessFromFavorites(long businessId) {
        Optional<Business> optionalBusiness = businessService.getBusinessById(businessId);

        if (optionalBusiness.isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        Business business = optionalBusiness.get();
        User user = userService.getCurrentAuthenticatedUser();

        user.getFavoriteBusinesses()
                .remove(business);

        userRepository.save(user);
        return ResponseEntity.ok().build();
    }
}
