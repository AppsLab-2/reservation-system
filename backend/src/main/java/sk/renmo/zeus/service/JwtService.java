package sk.renmo.zeus.service;

import org.springframework.security.core.Authentication;
import sk.renmo.zeus.model.User;

public interface JwtService {
    String createJwtForUser(User user);
    Authentication createAuthentication(String jwt);
}
