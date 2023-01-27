package com.strangequark.inventorysalesmanagement.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Immutable;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Immutable
public class SalesReport {

    @Id
    private String salesId;
    private String salesDate;
    private String productId;
    private String productName;
    private Integer quantitySold;
    private Double productUnitPrice;
    private Double salesPricePerUnit;
    private Double profitAmount;
}
