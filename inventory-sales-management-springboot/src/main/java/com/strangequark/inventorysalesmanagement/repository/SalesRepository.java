package com.strangequark.inventorysalesmanagement.repository;

import com.strangequark.inventorysalesmanagement.entity.Sales;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SalesRepository extends JpaRepository<Sales, String> {

    List<Sales> findByProductId(String productId);
}
