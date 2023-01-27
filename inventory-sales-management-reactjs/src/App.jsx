import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar";
import Stock from "./Pages/Stock";
import Sales from "./Pages/Sales";
import StockList from "./Pages/StockList";
import SalesReport from "./Pages/SalesReport";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Navbar />
      <div id="mainbody">
        <Routes>
          <Route path="/">
          <Route index element={<Home />} />
            <Route path="stock" element={<Stock />} />
            <Route path="sales" element={<Sales />} />
            <Route path="stocklist" element={<StockList />} />
            <Route path="salesreport" element={<SalesReport />} />
          </Route>
        </Routes>
        </div>
        <Footer/>     
      </BrowserRouter>
    </>
  );
}

export default App;
