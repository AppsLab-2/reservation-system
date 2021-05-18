package sk.renmo.zeus.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sk.renmo.zeus.model.Business;
import sk.renmo.zeus.model.Employee;
import sk.renmo.zeus.repository.EmployeeRepository;
import sk.renmo.zeus.service.EmployeeService;
import sk.renmo.zeus.util.IterableUtils;

import java.util.Collection;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository repository;

    @Override
    public Optional<Employee> getEmployeeByUserIdAndBusinessId(long userId, long businessId) {
        return this.repository.findByUserIdAndBusinessId(userId, businessId);
    }

    @Override
    public Collection<Business> getBusinessesOfEmployeesByUserId(long userId) {
        Iterable<Employee> employees = this.repository.findAllByUserId(userId);

        return IterableUtils.toStream(employees)
                .map(Employee::getBusiness)
                .collect(Collectors.toSet());
    }

}
