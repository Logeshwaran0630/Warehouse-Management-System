package com.inventory.controller;

import com.inventory.dto.LoginRequest;
import com.inventory.model.User;
import com.inventory.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class UserController {

    private final AuthService authService;

    public UserController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/user/login") // ✅ Fixed duplicate "/api/user/login" (it should be "/api/auth/user/login")
    public ResponseEntity<Map<String, Object>> login(@Validated @RequestBody LoginRequest loginRequest) {
        try {
            // ✅ Authenticate and return User object instead of boolean
            User user = authService.authenticateUser(loginRequest.getEmail(), loginRequest.getPassword());

            return ResponseEntity.ok(Map.of(
                    "message", "Login successful!",
                    "userId", user.getId(),
                    "email", user.getEmail(),
                    "businessName", user.getBusinessName()
            ));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", e.getMessage()));
        }
    }
}
