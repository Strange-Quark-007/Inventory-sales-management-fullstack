import React, { useState } from "react";
import GetStockAccordion from "../Stock/GetStockAccordion";
import AddStockAccordion from "../Stock/AddStockAccordion";
import UpdateStockAccordion from "../Stock/UpdateStockAccordion";
import DeleteStockAccordion from "../Stock/DeleteStockAccordion";
import Alert from "../Components/Alert";

export default function Stock() {
  const [alert, setAlert] = useState();

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
            Stock Operations
          </strong>
        </h1>
      </div>
      <hr className="hr mb-4" />

      <div className="container d-flex flex-column vh-100">
        <div className="row">
          <div className="col">
            <GetStockAccordion getAlertData={getData} />
          </div>
          <div className="col">
            <AddStockAccordion getAlertData={getData} />
          </div>
          <div className="col">
            <UpdateStockAccordion getAlertData={getData} />
          </div>
          <div className="col">
            <DeleteStockAccordion getAlertData={getData} />
          </div>
        </div>
      </div>
    </>
  );
}
