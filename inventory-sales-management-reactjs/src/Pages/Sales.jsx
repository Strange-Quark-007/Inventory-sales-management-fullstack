import React, { useState } from "react";

import Alert from "../Components/Alert";
import AddSalesAccordion from "../Sales/AddSalesAccordion";
import GetSalesListAccordion from "../Sales/GetSalesListAccordion";

export default function Sales() {
  const [alert, setAlert] = useState();

  const [salesList, setSalesList] = useState();

  const getSalesList = (listData) => {
    listData.length > 0 ? setSalesList(listData) : setSalesList();
  };

  const close = () => {
    setSalesList();
    setAlert();
  };
  const getData = (data) => {
    let icon = "";
    if (data.alertType === "success") icon = "#check-circle-fill";
    if (data.alertType === "danger") icon = "#exclamation-triangle-fill";

    setAlert({
      alertType: data.alertType,
      alertStatus: data.alertStatus,
      alertMessage: data.alertMessage,
      alertIcon: icon,
    });

    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <>
      <Alert alert={alert} />
      <hr className="hr mt-4" />
      <div className="container text-center">
        <h1>
          <strong
            style={{ fontFamily: "Itim", fontSize: "50px", color: "#0a0155" }}
          >
            Sales Operations
          </strong>
        </h1>
      </div>
      <hr className="hr mb-4" />
      <div className="container d-flex flex-column vh-100">
        <div className="container">
          <div className="row">
            <div className="col">
              <AddSalesAccordion getAlertData={getData} />
            </div>

            <div className="col">
              <GetSalesListAccordion
                getAlertData={getData}
                list={getSalesList}
              />
            </div>
          </div>
        </div>
        <div className="container mt-5">
          {salesList && (
            <div>
              <div className="d-flex justify-content-end position-relative">
                <button
                  type="button"
                  className="btn-close btn-light bg-light position-absolute top-0 start-100 translate-middle rounded rounded-5"
                  aria-label="Close"
                  onClick={close}
                />

                <table className="table table-dark table-striped table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Sales ID</th>
                      <th scope="col">Sales Date</th>
                      <th scope="col">Product ID</th>
                      <th scope="col">Product Quantity Sold</th>
                      <th scope="col">Sales Price per Unit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salesList.map((sales) => (
                      <tr key={sales.salesId}>
                        <th scope="row">{sales.salesId}</th>
                        <td>{sales.salesDate}</td>
                        <td>{sales.productId}</td>
                        <td>{sales.quantitySold}</td>
                        <td>{sales.salesPricePerUnit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
