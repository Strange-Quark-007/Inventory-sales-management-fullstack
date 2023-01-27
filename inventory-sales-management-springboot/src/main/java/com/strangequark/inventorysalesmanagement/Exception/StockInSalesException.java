package com.strangequark.inventorysalesmanagement.Exception;


public class StockInSalesException extends RuntimeException {

    private String message;

    public StockInSalesException() {
    }

    public StockInSalesException(String message) {
        super(message);
        this.message = message;
    }
}
