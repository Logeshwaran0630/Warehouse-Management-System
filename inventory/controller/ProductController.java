package com.inventory.controller;

import com.inventory.model.Product;
import com.inventory.model.User;
import com.inventory.service.ProductService;
import com.inventory.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private UserService userService;

    // ✅ Get authenticated user from session
    private User getAuthenticatedUser(HttpSession session) throws Exception {
        Long userId = (Long) session.getAttribute("userId");
        if (userId == null) {
            throw new Exception("Unauthorized: User is not logged in.");
        }
        return userService.getUserById(userId);
    }

    // ✅ Get a product by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getProductById(@PathVariable Long id, HttpSession session) {
        try {
            User user = getAuthenticatedUser(session);
            Product product = productService.getProductById(id, user.getId());
            return ResponseEntity.ok(product);
        } catch (Exception e) {
            return ResponseEntity.status(403).body(e.getMessage());
        }
    }

    // ✅ Add a new product
    @PostMapping("/add")
    public ResponseEntity<?> addProduct(@RequestBody Product product, HttpSession session) {
        try {
            User user = getAuthenticatedUser(session);
            Product savedProduct = productService.addProductForUser(user.getId(), product);
            return ResponseEntity.ok(savedProduct);
        } catch (Exception e) {
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    // ✅ Update an existing product
    @PutMapping("/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable Long id, @RequestBody Product productDetails, HttpSession session) {
        try {
            User user = getAuthenticatedUser(session);
            Product updatedProduct = productService.updateProduct(id, productDetails, user.getId());
            return ResponseEntity.ok(updatedProduct);
        } catch (Exception e) {
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    // ✅ Delete a product
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id, HttpSession session) {
        try {
            User user = getAuthenticatedUser(session);
            productService.deleteProduct(id, user.getId());
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    // ✅ Get all products for authenticated user
    @GetMapping("/user")
    public ResponseEntity<?> getUserProducts(HttpSession session) {
        try {
            User user = getAuthenticatedUser(session);
            List<Product> products = productService.getUserProducts(user.getId());
            return ResponseEntity.ok(products);
        } catch (Exception e) {
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }
}
