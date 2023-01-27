package com.strangequark.inventorysalesmanagement.Exception;

public class StockExistsException extends RuntimeException {

    String message;

    public StockExistsException() {

    }

    public StockExistsException (String message){
        super(message);
        this.message = message;
    }

}
