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
			customer1.setStore(store1);
			customer2.setStore(store1);
			customer3.setStore(store1);
			List<Customer> customers = new ArrayList<>();
			customers.add(customer1);
			customers.add(customer2);
			customers.add(customer3);
			store1.setCustomers(customers);
			storeRepository.save(store1);

			Store store2 = new Store("Walmart", "Retail");
			Customer customer4 = new Customer("John", "Wayne", "Western");
			Customer customer5 = new Customer("Clint", "Eastwood", "Dirty Harry");
			Customer customer6 = new Customer("Peter", "Gregory");
			customer4.setStore(store2);
			customer5.setStore(store2);
			customer6.setStore(store2);
			List<Customer> customers2 = new ArrayList<>();
			customers2.add(customer4);
			customers2.add(customer5);
			customers2.add(customer6);
			store2.setCustomers(customers2);
			storeRepository.save(store2);
		};
	}
 }
