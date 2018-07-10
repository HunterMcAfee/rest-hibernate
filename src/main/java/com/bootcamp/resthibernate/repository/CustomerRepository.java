package com.bootcamp.resthibernate.repository;

import com.bootcamp.resthibernate.model.Customer;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CustomerRepository extends CrudRepository<Customer, Long> {
    List<Customer> findAll();
    List<Customer> findByLastNameAllIgnoringCase(String lastName);
}
