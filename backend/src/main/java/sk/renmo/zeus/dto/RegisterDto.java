package sk.renmo.zeus.dto;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
public class RegisterDto {

    @NotBlank
    @NotNull
    private String username;

    @Email
    @NotBlank
    @NotNull
    private String mailAddress;

    @NotBlank
    @NotNull
    private String password;

}
