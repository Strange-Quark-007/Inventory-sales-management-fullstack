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
public class Sales {
    @Id
    private String salesId;
    private String salesDate;
    private String productId;
    private Integer quantitySold;
    private Double salesPricePerUnit;
}
