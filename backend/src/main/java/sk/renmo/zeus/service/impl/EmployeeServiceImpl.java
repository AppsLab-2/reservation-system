package sk.renmo.zeus.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sk.renmo.zeus.model.Employee;
import sk.renmo.zeus.repository.EmployeeRepository;
import sk.renmo.zeus.service.EmployeeService;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository repository;

    @Override
    public Optional<Employee> getEmployeeByUserIdAndBusinessId(long userId, long businessId) {
        return this.repository.findByUserIdAndBusinessId(userId, businessId);
    }

}
