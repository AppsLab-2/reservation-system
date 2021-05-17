package sk.renmo.zeus.service;

import sk.renmo.zeus.model.Employee;

import java.util.Optional;

public interface EmployeeService {
    Optional<Employee> getEmployeeByUserIdAndBusinessId(long userId, long businessId);
}
