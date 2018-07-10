package com.bootcamp.resthibernate;

import com.bootcamp.resthibernate.model.Customer;
import com.bootcamp.resthibernate.model.Store;
import com.bootcamp.resthibernate.repository.CustomerRepository;
import com.bootcamp.resthibernate.repository.StoreRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class RestHibernateApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestHibernateApplication.class, args);
	}

	@Bean
	public CommandLineRunner seedData(CustomerRepository customerRepository, StoreRepository storeRepository) {
		return (args) -> {
			Store store1 = new Store("Home Depot", "Home improvement");
			Customer customer1 = new Customer("Jeff", "Bridges", "Tron");
			Customer customer2 = new Customer("Jeff", "Goldblum", "Jurassic Park");
			Customer customer3 = new Customer("Tommy", "Jones");
			List<Customer> customers = new ArrayList<>();
			customers.add(customer1);
			customers.add(customer2);
			customers.add(customer3);
			store1.setCustomers(customers);
			storeRepository.save(store1);
		};
	}
 }
