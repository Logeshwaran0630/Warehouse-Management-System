package com.inventory.service;

import com.inventory.model.User;
import com.inventory.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // ✅ Get user by ID (throws exception if not found)
    public User getUserById(Long userId) throws Exception {
        return userRepository.findById(userId)
                .orElseThrow(() -> new Exception("User not found with ID: " + userId));
    }

    // ✅ Get all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // ✅ Get user by email (returns User or null)
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }
}
