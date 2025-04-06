package com.inventory.model;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.inventory.model.Product;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(name = "business_name")
    private String businessName;

    @Email
    @NotBlank
    @Column(name = "email", unique = true)
    private String email;

    @NotBlank
    @Column(name = "warehouse_location")
    private String warehouseLocation;

    @NotBlank
    @Size(min = 6, message = "Password must be at least 6 characters")
    @Column(name = "password")
    private String password;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference // ✅ Prevents infinite recursion
    private List<Product> products;

    public void hashPassword() {
        this.password = new BCryptPasswordEncoder().encode(this.password);
    }
}
