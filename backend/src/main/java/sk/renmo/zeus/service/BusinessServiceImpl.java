package sk.renmo.zeus.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sk.renmo.zeus.model.Business;
import sk.renmo.zeus.repository.BusinessRepository;

import java.util.Collection;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class BusinessServiceImpl implements BusinessService {

    private final BusinessRepository repository;

    @Override
    public Collection<Business> getAllBusinesses() {
        Iterable<Business> businessIterable = this.repository.findAll();
        Set<Business> businesses = new HashSet<>();
        businessIterable.forEach(businesses::add);
        return businesses;
    }

    @Override
    public Optional<Business> getBusinessById(long id) {
        return this.repository.findById(id);
    }

}
