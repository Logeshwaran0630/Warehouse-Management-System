package com.inventory.service;

import com.inventory.model.Product;
import com.inventory.model.User;
import com.inventory.repository.ProductRepository;
import com.inventory.repository.UserRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    // ✅ Add a product for the logged-in user
    public Product addProductForUser(Long userId, Product product) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        product.setUser(user);
        return productRepository.save(product);
    }

    // ✅ Get product by ID (only if it belongs to the logged-in user)
    public Product getProductById(Long id, Long userId) throws Exception {
        return productRepository.findById(id)
                .filter(product -> product.getUser().getId().equals(userId))
                .orElseThrow(() -> new Exception("Product not found or unauthorized access."));
    }

    // ✅ Update product
    public Product updateProduct(Long id, Product productDetails, Long userId) throws Exception {
        Product product = getProductById(id, userId);
        product.setName(productDetails.getName());
        product.setQuantity(productDetails.getQuantity());
        product.setPrice(productDetails.getPrice());
        return productRepository.save(product);
    }

    // ✅ Delete product
    public void deleteProduct(Long id, Long userId) throws Exception {
        Product product = getProductById(id, userId);
        productRepository.delete(product);
    }

    // ✅ Get all products for a user
    public List<Product> getUserProducts(Long userId) {
        return productRepository.findByUserId(userId);
    }
}
