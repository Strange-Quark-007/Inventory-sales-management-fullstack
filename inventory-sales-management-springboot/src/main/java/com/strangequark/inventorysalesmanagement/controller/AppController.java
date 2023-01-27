package com.strangequark.inventorysalesmanagement.controller;

import com.strangequark.inventorysalesmanagement.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.strangequark.inventorysalesmanagement.service.AppService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/InvSlsMgmt")
public class AppController {

    @Autowired
    AppService appService;


    @GetMapping("/getStock")
    public List<Stock> getStock() {
        return appService.getStock();
    }

    @GetMapping("/getStock/{id}")
    public Stock getStock(@PathVariable("id") String productId) {
        return appService.getStock(productId);
    }

    @DeleteMapping("/deleteStock/{id}")
    public void deleteStock(@PathVariable("id") String productId) {
        appService.deleteStock(productId);
    }

    @PostMapping("/addStock")
    public void addStock(@RequestBody Stock stock) {
        appService.addStock(stock);
    }

    @PutMapping("/updateStock")
    public void updateStock(@RequestBody Stock stock) {
        appService.updateStock(stock);
    }

    @PostMapping("/addSales")
    public void addSales(@RequestBody Sales sales) {
        appService.addSales(sales);
    }

    @GetMapping("/getSales/{id}")
    public List<Sales> getSales(@PathVariable("id") String productId) {
        return appService.getSalesByProductID(productId);
    }

    @GetMapping("/getSalesReport")
    public List<SalesReport> getSalesReport() {
        return appService.getSalesReport();
    }

}
