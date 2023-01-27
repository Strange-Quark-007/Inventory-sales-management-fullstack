package com.strangequark.inventorysalesmanagement.repository;

import com.strangequark.inventorysalesmanagement.entity.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockRepository extends JpaRepository<Stock, String> {
}
