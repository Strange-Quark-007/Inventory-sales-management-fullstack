import React, { useState } from "react";
import axios from "axios";

export default function AddSalesAccordion(props) {
  const [title, setTitle] = useState("collapsedAccordion");

  const [spinner, setSpinner] = useState(true);

  const changeColor = () =>
    setTitle(
      title === "expandedAccordion" ? "collapsedAccordion" : "expandedAccordion"
    );

  const [formData, setFormData] = useState({
    salesId: "SZ001",
    salesDate: new Date().toJSON().slice(0, 10),
    productId: "Z001",
    quantitySold: 0,
    salesPricePerUnit: 0,
  });

  const onChangeHandler = (e) => {
    setFormData(() => ({ ...formData, [e.target.name]: e.target.value }));
  };

  const submitAddData = (e) => {
    e.preventDefault();
    setSpinner(false);
    let alertData;

    axios
      .post("http://localhost:8080/InvSlsMgmt/addSales", formData)

      .then((response) => {
        alertData = {
          alertType: "success",
          alertStatus: response.status,
          alertMessage: "Success",
        };
        props.getAlertData(alertData);
        setSpinner(true);
      })

      .catch((error) => {
        alertData = {
          alertType: "danger",
          alertStatus: error.response ? error.response.data.status : error.code,
          alertMessage: error.response
            ? error.response.data.message
            : error.message,
        };
        props.getAlertData(alertData);
        setSpinner(true);
      });
  };

  return (
    <>
      <div className="accordion" id="accordion1">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              onClick={changeColor}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <h4 className={title}>
                <b>
                  <u>Add Sales</u>
                </b>
              </h4>
            </button>
          </h2>
          <form onSubmit={submitAddData}>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordion1"
            >
              <div className="accordion-body">
                <div className="container mt-3 mb-2 ">
                  <div className="mb-2">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      <b>Sales Id</b>
                    </label>
                    <input
                      className="form-control form-control-sm"
                      name="salesId"
                      onChange={onChangeHandler}
                      value={formData.salesId}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      <b>Sales Date</b>
                    </label>
                    <input
                      className="form-control form-control-sm"
                      name="salesDate"
                      type="date"
                      onChange={onChangeHandler}
                      value={formData.salesDate}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      <b>Product ID</b>
                    </label>
                    <input
                      className="form-control form-control-sm"
                      name="productId"
                      onChange={onChangeHandler}
                      value={formData.productId}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      <b>Quantity Sold</b>
                    </label>
                    <input
                      className="form-control"
                      type="number"
                      min="0"
                      inputMode="numeric"
                      name="quantitySold"
                      onChange={onChangeHandler}
                      value={formData.quantitySold}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      <b>Sales price per Unit</b>
                    </label>
                    <input
                      className="form-control"
                      type="number"
                      min="0"
                      inputMode="numeric"
                      name="salesPricePerUnit"
                      onChange={onChangeHandler}
                      value={formData.salesPricePerUnit}
                    />
                  </div>

                  <div className="container d-flex align-items-center">
                    <button type="submit" className="btn btn-info mt-3">
                      Add Sales
                    </button>
                    <div
                      className="container spinner-border text-light mt-3"
                      role="status"
                      hidden={spinner}
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
