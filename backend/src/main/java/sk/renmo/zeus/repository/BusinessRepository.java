package sk.renmo.zeus.repository;

import org.springframework.data.repository.CrudRepository;
import sk.renmo.zeus.model.Business;

public interface BusinessRepository extends CrudRepository<Business, Long> {
}
