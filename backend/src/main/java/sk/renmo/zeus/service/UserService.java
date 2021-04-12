package sk.renmo.zeus.service;

import sk.renmo.zeus.model.User;

import java.util.Optional;

public interface UserService {
    User createUser(User user);
    boolean existsByUsername(String username);
    boolean existsByMailAddress(String mailAddress);
    User getCurrentAuthenticatedUser();
    Optional<User> getUserByUsername(String username);
}
