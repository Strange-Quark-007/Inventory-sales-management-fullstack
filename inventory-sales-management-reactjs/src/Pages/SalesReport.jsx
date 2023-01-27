import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Alert from "../Components/Alert";
import { useLocation } from "react-router-dom";

export default function SalesReport() {
  const [alert, setAlert] = useState();
  const [salesReport, setSalesReport] = useState([]);

  const loc = useLocation();

  useEffect(() => {
    axios
      .get("http://localhost:8080/InvSlsMgmt/getSalesReport")

      .then((response) => {
        setSalesReport(response.data);
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
  }, [loc.key]);

  return (
    <>
      <Alert alert={alert} />
      <hr className="hr mt-4" />
      <div className="container text-center">
        <h1>
          <strong style={{fontFamily: 'Itim', fontSize:'50px', color:'#0a0155'}}>Sales Report</strong>
        </h1>
      </div>
      <hr className="hr mb-4" />
      <div className="container py-4 d-flex flex-column vh-100">
        <table className="table table-dark table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Sales ID</th>
              <th scope="col">Sales Date</th>
              <th scope="col">Product ID</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Quantity Sold</th>
              <th scope="col">Product Price</th>
              <th scope="col">Sales Price per Unit</th>
              <th scope="col">Profit Amount</th>
            </tr>
          </thead>
          <tbody>
            {salesReport.map((sales) => (
              <tr key={sales.salesId}>
                <th scope="row">{sales.salesId}</th>
                <td>{sales.salesDate}</td>
                <td>{sales.productId}</td>
                <td>{sales.productName}</td>
                <td>{sales.quantitySold}</td>
                <td>{sales.productUnitPrice}</td>
                <td>{sales.salesPricePerUnit}</td>
                <td>{sales.profitAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
