package sk.renmo.zeus.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sk.renmo.zeus.dto.ProfileDto;
import sk.renmo.zeus.model.User;
import sk.renmo.zeus.service.UserService;

@RestController
@RequestMapping("/profile")
@RequiredArgsConstructor
public class ProfileController {

    private final UserService userService;

    @GetMapping
    public ProfileDto getProfile() {
        User user = this.userService.getCurrentAuthenticatedUser();
        return new ProfileDto(user.getUsername(), user.getIcon());
    }

}
