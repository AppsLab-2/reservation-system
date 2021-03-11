package sk.renmo.zeus.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sk.renmo.zeus.model.Business;
import sk.renmo.zeus.repository.BusinessRepository;
import sk.renmo.zeus.util.IterableUtils;

import java.util.Collection;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BusinessServiceImpl implements BusinessService {

    private final BusinessRepository repository;

    @Override
    public Collection<Business> getAllBusinesses() {
        Iterable<Business> businesses = this.repository.findAll();
        return IterableUtils.toSet(businesses);
    }

    @Override
    public Optional<Business> getBusinessById(long id) {
        return this.repository.findById(id);
    }

}
