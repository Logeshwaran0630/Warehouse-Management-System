package com.inventory.controller;

import com.inventory.dto.LoginRequest;
import com.inventory.model.User;
import com.inventory.service.AuthService;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;

@RestController
@RequestMapping("/api/auth") // Base path for authentication APIs
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend to access backend
public class AuthController {

    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    /**
     * ✅ Register a new user
     */
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            User newUser = authService.registerUser(user);
            logger.info("User registered successfully: {}", newUser.getEmail());
            return ResponseEntity.status(HttpStatus.CREATED).body(Map.of(
                    "message", "User registered successfully",
                    "userId", newUser.getId()
            ));
        } catch (IllegalArgumentException e) {
            logger.warn("Registration failed: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error", e.getMessage()));
        } catch (Exception e) {
            logger.error("Unexpected error during registration", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of(
                    "error", "An unexpected error occurred. Please try again."
            ));
        }
    }

    /**
     * ✅ Login and create session
     */
    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@Validated @RequestBody LoginRequest loginRequest) {
        try {
            User user = authService.authenticateUser(loginRequest.getEmail(), loginRequest.getPassword());

            Map<String, Object> response = Map.of(
                    "message", "Login successful",
                    "userId", user.getId(),
                    "businessName", user.getBusinessName()
            );

            logger.info("User logged in successfully: {}", user.getEmail());
            return ResponseEntity.ok(response);

        } catch (IllegalArgumentException e) {
            logger.warn("Login failed: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", e.getMessage()));

        } catch (Exception e) {
            logger.error("Unexpected error during login: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of(
                    "error", "An unexpected error occurred. Please try again later."
            ));
        }
    }

    /**
     * ✅ Logout and destroy session
     */
    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpSession session) {
        session.invalidate();
        logger.info("User logged out.");
        return ResponseEntity.ok(Map.of("message", "Logged out successfully"));
    }

    /**
     * ✅ Check if session is active
     */
    @GetMapping("/check-session")
    public ResponseEntity<?> checkSession(HttpSession session) {
        Long userId = (Long) session.getAttribute("userId");

        if (userId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "Unauthorized"));
        }

        String businessName = (String) session.getAttribute("businessName");

        return ResponseEntity.ok(Map.of(
                "message", "Session is active",
                "userId", userId,
                "businessName", businessName
        ));
    }
}
