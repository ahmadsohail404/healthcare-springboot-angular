import javax.validation.constraints.NotBlank;

public class HospitalDTO {
    private Long id;

    @NotBlank(message = "Name is required")
    private String name;

    // Getters and setters
    // ...

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
