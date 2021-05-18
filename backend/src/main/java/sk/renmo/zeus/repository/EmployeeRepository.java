package sk.renmo.zeus.repository;

import org.springframework.data.repository.CrudRepository;
import sk.renmo.zeus.model.Employee;

import java.util.Optional;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {
    Iterable<Employee> findAllByUserId(long userId);
    Optional<Employee> findByUserIdAndBusinessId(long userId, long businessId);
}
