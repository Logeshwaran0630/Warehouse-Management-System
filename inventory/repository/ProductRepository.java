package com.inventory.repository;

import com.inventory.model.Product;
import com.inventory.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByQuantityLessThan(int reorderLevel);
    List<Product> findByUserId(Long userId);
    List<Product> findByUserIdAndQuantityLessThan(Long userId, int quantity);
    List<Product> findByUser(User user);
}
