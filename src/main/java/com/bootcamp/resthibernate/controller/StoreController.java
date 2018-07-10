package com.bootcamp.resthibernate.controller;

import com.bootcamp.resthibernate.model.Customer;
import com.bootcamp.resthibernate.model.Store;
import com.bootcamp.resthibernate.repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/store")
public class StoreController {
    @Autowired
    StoreRepository storeRepository;

    @GetMapping("/all")
    public List<Store> getAllStores() {
        return storeRepository.findAll();
    }

    @GetMapping("/{id}")
    public Store getStoreById(@PathVariable("id") Long id) {
        if (storeRepository.findById(id).isPresent()) {
            return storeRepository.findById(id).get();
        } else {
            return new Store(null, null);
        }
    }

    @GetMapping("/{id}/customers")
    public List<Customer> getCustomersByStore(@PathVariable("id") Long id) {
        if (storeRepository.findById(id).isPresent()) {
            return storeRepository.findById(id).get().getCustomers();
        } else {
            return null;
        }
    }

}
