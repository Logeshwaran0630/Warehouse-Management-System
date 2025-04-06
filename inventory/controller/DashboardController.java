package com.inventory.controller;

import com.inventory.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    @GetMapping("/welcome")
    public ResponseEntity<String> getBusinessName(@RequestParam String email) {
        try {
            String businessName = dashboardService.getBusinessName(email);
            if ("No Business Found for this Email".equals(businessName)) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User Not Found");
            }
            return ResponseEntity.ok("Welcome " + businessName);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + e.getMessage());
        }
    }
}

