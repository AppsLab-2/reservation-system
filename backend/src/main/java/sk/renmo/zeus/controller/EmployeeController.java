package sk.renmo.zeus.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sk.renmo.zeus.dto.BusinessDto;
import sk.renmo.zeus.dto.EmployeeDto;
import sk.renmo.zeus.model.Employee;
import sk.renmo.zeus.model.User;
import sk.renmo.zeus.service.EmployeeService;
import sk.renmo.zeus.service.UserService;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/employee")
@RequiredArgsConstructor
public class EmployeeController {

    private final EmployeeService employeeService;
    private final UserService userService;

    @GetMapping
    public Collection<BusinessDto> getBusinessesWhereEmployed() {
        User user = this.userService.getCurrentAuthenticatedUser();

        return this.employeeService.getBusinessesOfEmployeesByUserId(user.getId()).stream()
                .map(BusinessController::toDto)
                .collect(Collectors.toSet());
    }

    @GetMapping("/business/{id}")
    public Collection<EmployeeDto> getEmployeesOfBusiness(@PathVariable("id") long businessId) {
        User user = this.userService.getCurrentAuthenticatedUser();

        return this.employeeService.getEmployeesOfBusiness(user.getId(), businessId).stream()
                .map(EmployeeController::toDto)
                .collect(Collectors.toSet());
    }

    private static EmployeeDto toDto(Employee employee) {
        EmployeeDto dto = new EmployeeDto();
        dto.setId(employee.getId());
        dto.setUserId(employee.getUserId());
        dto.setBusinessId(employee.getBusinessId());
        dto.setRole(employee.getRole());
        dto.setProfile(ProfileController.toProfile(employee.getUser()));
        return dto;
    }

}
