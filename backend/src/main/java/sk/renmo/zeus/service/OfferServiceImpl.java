package sk.renmo.zeus.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sk.renmo.zeus.model.Offer;
import sk.renmo.zeus.repository.OfferRepository;
import sk.renmo.zeus.util.IterableUtils;

import java.util.Collection;

@Service
@RequiredArgsConstructor
public class OfferServiceImpl implements OfferService {

    private final OfferRepository repository;

    @Override
    public Collection<Offer> getOffersByBusiness(long businessId) {
        Iterable<Offer> offers = this.repository.findAllByBusinessId(businessId);
        return IterableUtils.toSet(offers);
    }

}
