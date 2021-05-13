package sk.renmo.zeus.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sk.renmo.zeus.model.Offer;
import sk.renmo.zeus.repository.OfferRepository;
import sk.renmo.zeus.service.OfferService;
import sk.renmo.zeus.util.IterableUtils;

import java.util.Collection;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OfferServiceImpl implements OfferService {

    private final OfferRepository repository;

    @Override
    public Optional<Offer> getOfferById(long id) {
        return this.repository.findById(id);
    }

    @Override
    public Collection<Offer> getOffersByBusiness(long businessId) {
        Iterable<Offer> offers = this.repository.findAllByBusinessId(businessId);
        return IterableUtils.toSet(offers);
    }

}
