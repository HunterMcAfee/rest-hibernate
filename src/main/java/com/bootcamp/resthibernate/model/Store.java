package com.bootcamp.resthibernate.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Store {

    @Id
    @GeneratedValue
    private Long id;

    @OneToMany(mappedBy = "store", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Customer> customers;

    @Column(nullable = false)
    private String storeName;

    @Column(nullable = true)
    private String description;

    protected Store() {}

    public Store(String storeName, String description) {
        this.storeName = storeName;
        this.description = description;
    }

    public Store(List<Customer> customers, String storeName, String description) {
        this.customers = customers;
        this.storeName = storeName;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public List<Customer> getCustomers() {
        return customers;
    }

    public void setCustomers(List<Customer> customers) {
        this.customers = customers;
    }

    public String getStoreName() {
        return storeName;
    }

    public void setStoreName(String storeName) {
        this.storeName = storeName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
