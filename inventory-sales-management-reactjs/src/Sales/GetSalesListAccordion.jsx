import React, { useState } from "react";
import axios from "axios";

export default function GetSalesListAccordion(props) {
  const [title, setTitle] = useState("collapsedAccordion");

  const [productId, setProductId] = useState("A001");


  const [spinner, setSpinner] = useState(true);

  const changeColor = () => {
    setTitle(
      title === "expandedAccordion" ? "collapsedAccordion" : "expandedAccordion"
    );
  };

  const onChangeHandler = (e) => setProductId(e.target.value);

  const submitGetData = (e) => {
    e.preventDefault();
    setSpinner(false);
    let alertData;

    axios
      .get("http://localhost:8080/InvSlsMgmt/getSales/" + productId)

      .then((response) => {

        props.list(response.data);

        alertData = {
          alertType: "success",
          alertStatus: response.status,
          alertMessage: "Success",
        };
        props.getAlertData(alertData);
        setSpinner(true);
      })

      .catch((error) => {
        props.list([]);
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
      <div className="accordion" id="accordion4">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              onClick={changeColor}
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h4 className={title}>
                <b>
                  <u>Get Sales </u>
                </b>
              </h4>
            </button>
          </h2>
          <form onSubmit={submitGetData}>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordion4"
            >
              <div className="accordion-body">
                <div className="container mt-4 mb-2 ">
                  <div className="mb-2 my-3 ">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      <b>Product Id</b>
                    </label>
                    <input
                      className="form-control form-control-sm"
                      name="productId"
                      onChange={onChangeHandler}
                      value={productId}
                    />
                  </div>
                  <div className="container d-flex align-items-center">
                    <button
                      type="submit"
                      className="btn btn-info mt-3"
                    >
                      Get Stock
                    </button>
                    {/* <button type="submit" className="btn btn-info mt-3"  data-bs-toggle="modal" data-bs-target="#ProductDataModal">Get Stock</button> */}
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
