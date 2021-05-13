package sk.renmo.zeus.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import sk.renmo.zeus.model.User;
import sk.renmo.zeus.repository.UserRepository;
import sk.renmo.zeus.service.UserService;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository repository;

    @Override
    public User createUser(User user) {
        user.setId(0);
        return this.repository.save(user);
    }

    @Override
    public boolean existsByUsername(String username) {
        return this.repository.existsByUsername(username);
    }

    @Override
    public boolean existsByMailAddress(String mailAddress) {
        return this.repository.existsByMailAddress(mailAddress);
    }

    @Override
    public User getCurrentAuthenticatedUser() {
        String username = (String) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        return this.getUserByUsername(username)
                .orElseThrow(IllegalStateException::new);
    }

    @Override
    public Optional<User> getUserByUsername(String username) {
        return this.repository.findByUsername(username);
    }

}
