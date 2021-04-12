package sk.renmo.zeus.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import sk.renmo.zeus.dto.LoginDto;
import sk.renmo.zeus.dto.RegisterDto;
import sk.renmo.zeus.model.Address;
import sk.renmo.zeus.model.User;
import sk.renmo.zeus.service.JwtService;
import sk.renmo.zeus.service.UserService;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class AuthenticationController {

    private final UserService userService;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @NotNull @Valid LoginDto loginInfo) {
        Optional<User> optionalUser = this.userService.getUserByUsername(loginInfo.getUsername());

        if (optionalUser.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        User user = optionalUser.get();

        if (!this.passwordEncoder.matches(loginInfo.getPassword(), user.getPassword())) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        String jwt = this.jwtService.createJwtForUser(user);
        return ResponseEntity.ok()
                .header("Authorization", "Bearer " + jwt)
                .build();
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody @NotNull @Valid RegisterDto registerInfo) {
        if (this.isRegistrationInfoConflicting(registerInfo)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }

        User user = new User();
        user.setUsername(registerInfo.getUsername());
        user.setMailAddress(registerInfo.getMailAddress());
        user.setPassword(this.passwordEncoder.encode(registerInfo.getPassword()));

        // TODO: replace with proper address saving / rethink the need of an address
        user.setAddress(new Address("Mock Street", "Mock Town", "00000", "Mock Country"));

        this.userService.createUser(user);

        return ResponseEntity.ok().build();
    }

    private boolean isRegistrationInfoConflicting(RegisterDto registerInfo) {
        return this.userService.existsByUsername(registerInfo.getUsername())
                || this.userService.existsByMailAddress(registerInfo.getMailAddress());
    }

}
