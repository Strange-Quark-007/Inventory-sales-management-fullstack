package com.strangequark.inventorysalesmanagement.repository;

import com.strangequark.inventorysalesmanagement.entity.Sales;
import com.strangequark.inventorysalesmanagement.entity.SalesReport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SalesReportRepository extends JpaRepository<SalesReport, String> {

}
