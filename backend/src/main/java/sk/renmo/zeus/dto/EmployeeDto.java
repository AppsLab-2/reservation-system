package sk.renmo.zeus.dto;

import lombok.Data;
import sk.renmo.zeus.model.EmployeeRole;

@Data
public class EmployeeDto {
    private long id;
    private long userId;
    private long businessId;
    private EmployeeRole role;
    private ProfileDto profile;
}
