package com.inventory.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String sku;
    private int quantity;
    private double price;
    private int reorderLevel;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @JsonBackReference // ✅ Fix recursion error (was @JsonManagedReference before)
    private User user;

    public Product() {}

    public Product(String name, String sku, int quantity, double price, int reorderLevel, User user) {
        this.name = name;
        this.sku = sku;
        this.quantity = quantity;
        this.price = price;
        this.reorderLevel = reorderLevel;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSku() {
        return sku;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getReorderLevel() {
        return reorderLevel;
    }

    public void setReorderLevel(int reorderLevel) {
        this.reorderLevel = reorderLevel;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
