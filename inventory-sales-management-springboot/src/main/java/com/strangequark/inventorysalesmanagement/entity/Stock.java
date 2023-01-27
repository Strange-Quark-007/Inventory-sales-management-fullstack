package com.strangequark.inventorysalesmanagement.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Stock {
    @Id
    private String productId;
    private String productName;
    private Double productUnitPrice;
    private Integer quantityOnHand;
}
