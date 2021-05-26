package sk.renmo.zeus.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import sk.renmo.zeus.model.Business;

public interface BusinessRepository extends CrudRepository<Business, Long> {
    @Query("select b from Business b where b.name like %?1% or b.description like %?1%")
    Iterable<Business> findByNameOrDescriptionContaining(String query);
}
