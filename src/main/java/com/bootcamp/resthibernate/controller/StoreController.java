package com.bootcamp.resthibernate.controller;

import com.bootcamp.resthibernate.model.Customer;
import com.bootcamp.resthibernate.model.Store;
import com.bootcamp.resthibernate.repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @PostMapping("/{id}/addCustomer")
    public String addCustomerToStore(@PathVariable("id") Long id, @RequestBody Customer customer) {
        if (storeRepository.existsById(id)) {
            Store store = storeRepository.findById(id).get();
            customer.setStore(store);
            store.getCustomers().add(customer);
            storeRepository.save(store);
            return "Customer added to store";
        } else {
            return "Unable to add customer to store.";
        }
    }

    @PostMapping("/add")
    public String addStore(@RequestBody Store store) {
        storeRepository.save(store);
        return "Store was added.";
    }

    @PutMapping("/update")
    public String updateStore(@RequestBody Store store) {
        if (store.getId() != null && storeRepository.existsById(store.getId())) {
            storeRepository.save(store);
            return "Store was updated";
        } else {
            return "Invalid store id or update information.";
        }
    }

    @DeleteMapping("/{id}")
    public String deleteStore(@PathVariable("id") Long id) {
        if (storeRepository.existsById(id)) {
            storeRepository.deleteById(id);
            return "Store was deleted.";
        } else {
            return "Invalid store id.";
        }
    }
}
