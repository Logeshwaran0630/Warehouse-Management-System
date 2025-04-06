package com.inventory.service;

import com.inventory.model.User;
import com.inventory.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class DashboardService {

    @Autowired
    private UserRepository userRepository;

    public String getBusinessName(String email) {
        return userRepository.findByEmail(email)
                .map(User::getBusinessName)
                .orElse("No Business Found for this Email"); // Avoid Exception
    }
}
