package com.strangequark.inventorysalesmanagement.service;

import com.strangequark.inventorysalesmanagement.Exception.BadRequestException;
import com.strangequark.inventorysalesmanagement.Exception.NotFoundException;
import com.strangequark.inventorysalesmanagement.Exception.StockExistsException;
import com.strangequark.inventorysalesmanagement.Exception.StockInSalesException;
import com.strangequark.inventorysalesmanagement.entity.Sales;
import com.strangequark.inventorysalesmanagement.entity.SalesReport;
import com.strangequark.inventorysalesmanagement.entity.Stock;
import com.strangequark.inventorysalesmanagement.repository.SalesReportRepository;
import com.strangequark.inventorysalesmanagement.repository.SalesRepository;
import com.strangequark.inventorysalesmanagement.repository.StockRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class AppService {

    @Autowired
    StockRepository stockRepository;
    @Autowired
    SalesRepository salesRepository;
    @Autowired
    SalesReportRepository salesReportRepository;

    public void addStock(Stock stock) {
        if(stockRepository.findById(stock.getProductId()).isPresent())
            throw new StockExistsException("Stock already exists for Id "+stock.getProductId());
        stockRepository.save(stock);
    }

    public List<Stock> getStock() {
        return stockRepository.findAll();
    }

    public Stock getStock(String productId) {
        if (stockRepository.findById(productId).isPresent())
            return stockRepository.findById(productId).get();
        else
            throw new NotFoundException("Stock not found by " + productId);
    }

    public void deleteStock(String productId) {

        if (stockRepository.findById(productId).isEmpty())
            throw new NotFoundException("Cannot Delete Stock. Stock not found by " + productId);

        if (salesRepository.findByProductId(productId).isEmpty())
            stockRepository.deleteById(productId);
        else
            throw new StockInSalesException("Stock exists in Sales. Cannot Delete Stock.");
    }

    public void updateStock(Stock stock) {

        if (stockRepository.findById(stock.getProductId()).isEmpty())
            throw new NotFoundException("Stock not found by " + stock.getProductId());

        Stock s = stockRepository.findById(stock.getProductId()).get();

        if(!stock.getProductName().isEmpty())
            s.setProductName(stock.getProductName());

        if(stock.getQuantityOnHand() != 0)
            s.setQuantityOnHand(stock.getQuantityOnHand());

        if(stock.getProductUnitPrice() !=0)
            s.setProductUnitPrice(stock.getProductUnitPrice());

        stockRepository.save(s);
    }

    public List<Sales> getSalesByProductID(String productId) {
        if(!salesRepository.findByProductId(productId).isEmpty())
            return salesRepository.findByProductId(productId);
        throw new NotFoundException("Sales not found by "+productId);
    }


    public void addSales(@NotNull Sales sales) {
        if (stockRepository.findById(sales.getProductId()).isEmpty())
            throw new NotFoundException("Stock not found by " + sales.getProductId());

        Stock stock = stockRepository.findById(sales.getProductId()).get();

        if ( (stock.getQuantityOnHand() - sales.getQuantitySold() ) < 0)
            throw new BadRequestException("BAD Request. Cannot have negative stock. Sales qty > current stock qty.");

        salesRepository.save(sales);
        stock.setQuantityOnHand(stock.getQuantityOnHand() - sales.getQuantitySold());
        stockRepository.save(stock);
    }


    public List<SalesReport> getSalesReport() {
        return salesReportRepository.findAll();
    }

}
