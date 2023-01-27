import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Alert from "../Components/Alert";
import { useLocation } from "react-router-dom";

export default function StockList() {
  const [alert, setAlert] = useState();
  const [stockList, setStockList] = useState([]);

  const loc = useLocation();

  useEffect(() => {

    

    axios
      .get("http://localhost:8080/InvSlsMgmt/getStock")

      .then((response) => {
        setStockList(response.data);
        setAlert({
          alertType: "success",
          alertStatus: response.status,
          alertMessage: "Success",
          alertIcon: "#check-circle-fill",
        });
      })

      .catch((error) => {
        setAlert({
          alertType: "danger",
          alertStatus: error.response ? error.response.data.status : error.code,
          alertMessage: error.response
            ? error.response.data.message
            : error.message,
          alertIcon: "#exclamation-triangle-fill",
        });
      });

    setTimeout(() => setAlert(null), 5000);
  }, [loc]);

  return (
    <>
      <Alert alert={alert} />
      <hr className="hr mt-4" />
      <div className="container text-center">
        <h1>
          <strong style={{fontFamily: 'Itim', fontSize:'50px', color:'#0a0155'}}>Stock List</strong>
        </h1>
      </div>
      <hr className="hr mb-4" />
    <div className="container py-4 d-flex flex-column vh-100">
      <table className="table table-dark table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product Quantity</th>
          </tr>
        </thead>
        <tbody>
          {stockList.map((stock) => (
            <tr key={stock.productId}>
              <th scope="row">{stock.productId}</th>
              <td>{stock.productName}</td>
              <td>{stock.productUnitPrice}</td>
              <td>{stock.quantityOnHand}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}
