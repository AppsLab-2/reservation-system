package sk.renmo.zeus.service;

import sk.renmo.zeus.model.Business;
import sk.renmo.zeus.model.Employee;

import java.util.Collection;
import java.util.Optional;

public interface EmployeeService {
    Collection<Business> getBusinessesOfEmployeesByUserId(long userId);
    Optional<Employee> getEmployeeByUserIdAndBusinessId(long userId, long businessId);
    Collection<Employee> getEmployeesOfBusiness(long userId, long businessId);
}
