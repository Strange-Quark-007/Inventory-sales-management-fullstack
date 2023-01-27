import React, { useState } from "react";
import axios from "axios";

export default function UpdateStockAccordion(props) {
  const [title, setTitle] = useState("collapsedAccordion");

  const [spinner, setSpinner] = useState(true);

  const changeColor = () => {
    setTitle(
      title === "expandedAccordion" ? "collapsedAccordion" : "expandedAccordion"
    );
  };

  const [formData, setFormData] = useState({
    productId: "Z001",
    productName: "Zz001",
    productUnitPrice: 0,
    quantityOnHand: 0,
  });

  const onChangeHandler = (e) => {
    setFormData(() => ({ ...formData, [e.target.name]: e.target.value }));
  };

  const submitUpdateData = (e) => {
    e.preventDefault();
    setSpinner(false);
    let alertData;

    axios
      .put("http://localhost:8080/InvSlsMgmt/updateStock", formData)

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
      <div className="accordion" id="accordion2">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              onClick={changeColor}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <h4 className={title}>
                <b>
                  <u>Update Stock</u>
                </b>
              </h4>
            </button>
          </h2>
          <form onSubmit={submitUpdateData}>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordion2"
            >
              <div className="accordion-body">
                <div className="container mt-3 mb-2 ">
                  <div className="mb-2">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      <b>Product Id</b>
                    </label>
                    <input
                      className="form-control form-control-sm"
                      id="exampleFormControlInput2"
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
                      <b>Product Name</b>
                    </label>
                    <input
                      className="form-control form-control-sm"
                      name="productName"
                      onChange={onChangeHandler}
                      value={formData.productName}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      <b>Product Price</b>
                    </label>
                    <input
                      className="form-control form-control-sm"
                      name="productUnitPrice"
                      type="number"
                      min="0"
                      inputMode="numeric"
                      onChange={onChangeHandler}
                      value={formData.productUnitPrice}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      <b>Product Quantity</b>
                    </label>
                    <input
                      className="form-control"
                      id="exampleFormControlInput2"
                      type="number"
                      min="0"
                      inputMode="numeric"
                      name="quantityOnHand"
                      onChange={onChangeHandler}
                      value={formData.quantityOnHand}
                    />
                  </div>
                  <div className="container d-flex align-items-center">
                    <button type="submit" className="btn btn-info mt-3">
                      Update Stock
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
