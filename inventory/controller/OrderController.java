package com.inventory.controller;

import com.inventory.model.Order;
import com.inventory.repository.OrderRepository;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "*")
public class OrderController {

    private final OrderRepository orderRepository;

    public OrderController(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Order> getOrderById(@PathVariable Long id) {
        return orderRepository.findById(id);
    }

    @PostMapping
    public Order createOrder(@RequestBody Order order) {
        order.setCreatedAt(LocalDateTime.now()); // Set the created time
        return orderRepository.save(order);
    }

    @PutMapping("/{id}")
    public Order updateOrder(@PathVariable Long id, @RequestBody Order orderDetails) {
        return orderRepository.findById(id).map(order -> {
            order.setOrderId(orderDetails.getOrderId());
            order.setStatus(orderDetails.getStatus());
            order.setCustomerName(orderDetails.getCustomerName());
            order.setTotalPrice(orderDetails.getTotalPrice());
            return orderRepository.save(order);
        }).orElseThrow(() -> new RuntimeException("Order not found"));
    }

    @DeleteMapping("/{id}")
    public String deleteOrder(@PathVariable Long id) {
        orderRepository.deleteById(id);
        return "Order deleted successfully";
    }
}
