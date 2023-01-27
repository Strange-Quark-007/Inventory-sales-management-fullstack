import React, { useState } from 'react'
import axios from 'axios'

export default function DeleteStockAccordion(props) {

    const [title, setTitle] = useState("collapsedAccordion");

    const [productId, setProductId] = useState("Z001");


    const [spinner, setSpinner] = useState(true);

    const changeColor = () => {
        setTitle(title === "expandedAccordion" ? "collapsedAccordion" : "expandedAccordion");
    }

    const onChangeHandler = (e) => setProductId(e.target.value);




    const submitDeleteData = (e) => {
        e.preventDefault();
        setSpinner(false);
        let alertData;

        axios.delete('http://localhost:8080/InvSlsMgmt/deleteStock/'+productId)

            .then(response => {

                alertData = {
                    alertType: 'success',
                    alertStatus: response.status,
                    alertMessage: "Success"
                }
                props.getAlertData(alertData);
                setSpinner(true);
            })

            .catch(error => {    
                
                alertData = {
                    alertType: 'danger',
                    alertStatus: error.response? error.response.data.status : error.code,
                    alertMessage: error.response? error.response.data.message : error.message
                }
                props.getAlertData(alertData);
                setSpinner(true);

            })

    }


    return (
        <>
            <div className="accordion" id="accordion3">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" onClick={changeColor} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <h4 className={title}><b><u>Delete Stock</u></b></h4>
                        </button>
                    </h2>
                    <form onSubmit={submitDeleteData}>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion3">
                            <div className="accordion-body">
                                <div className="container mt-3 mb-2 ">
                                    <div className="mb-2 my-3 ">
                                        <label htmlFor="exampleFormControlInput1" className="form-label"><b>Product Id</b></label>
                                        <input className="form-control form-control-sm" id="exampleFormControlInput3" name="productId" onChange={onChangeHandler} value={productId} />
                                    </div>
                                    <div className="container d-flex align-items-center">
                                        <button type="submit" className="btn btn-info mt-3">Delete Stock</button>
                                        <div className="container spinner-border text-light mt-3" role="status" hidden={spinner}>
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

    )
}
