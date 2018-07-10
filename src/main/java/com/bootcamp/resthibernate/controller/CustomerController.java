package com.bootcamp.resthibernate.controller;

import com.bootcamp.resthibernate.model.Customer;
import com.bootcamp.resthibernate.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/customer")
public class CustomerController {
    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping("/all")
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    @GetMapping("/{id}")
    public Customer getCustomerById(@PathVariable Long id) {
        return customerRepository.findById(id).get();
    }

    @GetMapping("/lastname/{lastName}")
    public List<Customer> getCustomerByLastName(@PathVariable("lastName") String lastName) {
        return customerRepository.findByLastNameAllIgnoringCase(lastName);
    }

//    Adding customer now belongs to store.
//    @PostMapping("/add")
//    public String addCustomer(@RequestBody Customer customer) {
//        customerRepository.save(customer);
//        return "Customer " + customer.getFirstName() + " was added.";
//    }

    @PutMapping("/update")
    public String updateCustomer(@RequestBody Customer customer) {
        if (customer.getId() != null && customerRepository.existsById(customer.getId())) {
            customerRepository.save(customer);
            return "Customer " + customer.getFirstName() + " was updated.";
        } else {
            return "Customer does not exist or invalid id";
        }
    }

    @DeleteMapping("/{id}")
    public String deleteCustomer(@PathVariable("id") Long id) {
        customerRepository.deleteById(id);
        return "Customer was deleted.";
    }
}
