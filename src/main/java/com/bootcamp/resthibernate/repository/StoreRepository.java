package com.bootcamp.resthibernate.repository;

import com.bootcamp.resthibernate.model.Store;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface StoreRepository extends CrudRepository<Store, Long> {
    List<Store> findAll();
    Store findByDescriptionContainsIgnoreCase(String description);
}
