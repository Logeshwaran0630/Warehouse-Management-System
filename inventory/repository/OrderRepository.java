package com.inventory.repository;

import com.inventory.dto.OrderStatusCountDTO;
import com.inventory.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query("SELECT new com.inventory.dto.OrderStatusCountDTO(o.status, COUNT(o)) FROM Order o GROUP BY o.status")
    List<OrderStatusCountDTO> countOrdersByStatus();
}
