package com.inventory.service;

import com.inventory.model.User;
import com.inventory.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class AuthService {

    private static final Logger logger = LoggerFactory.getLogger(AuthService.class);

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    /**
     * ✅ Authenticate a user and return the user object if successful.
     * Throws an exception if authentication fails.
     */
    public User authenticateUser(String email, String rawPassword) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));

        if (!passwordEncoder.matches(rawPassword, user.getPassword())) {
            throw new IllegalArgumentException("Invalid email or password.");
        }

        return user; // ✅ Return the User object instead of boolean
    }

    /**
     * ✅ Register a new user, ensuring the email is unique.
     */
    public User registerUser(User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            logger.warn("Registration attempt with existing email: {}", user.getEmail());
            throw new IllegalArgumentException("Email is already in use.");
        }

        // ✅ Encode password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // ✅ Save and return user
        User savedUser = userRepository.save(user);
        logger.info("User registered successfully: {}", savedUser.getEmail());
        return savedUser;
    }
}
