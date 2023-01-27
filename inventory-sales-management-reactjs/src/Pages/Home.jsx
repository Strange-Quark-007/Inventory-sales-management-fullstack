import React from "react";

const Home = () => {
  return (
    <>
      <div>
        <div style={{ height: "85px" }}></div>
        <div className="d-flex flex-column vh-100">
          <hr className="hr mt-4" />
          <div className="container text-center">
            <h1>
              <strong
                style={{
                  fontFamily: "Itim",
                  fontSize: "60px",
                  color: "#0a0155",
                }}
              >
                Inventory & Sales Management System
              </strong>
            </h1>
          </div>
          <hr className="hr mb-4" />
          <div
            className="container mt-5 text-center"
            style={{
              fontSize: "25px",
              color: "#56e2ff",
              fontFamily: "Fira Code",
            }}
          >
            <ul>
              <li className="mt-2">
                <span>
                  A simple Full Stack Application to Demonstrate CRUD operations.
                </span>
              </li>
              <li className="mt-3">
                <span>CRUD Operations with REST API.</span>
              </li>
              <li className="mt-3">
                <span>Frontend in React JS with BootStrap.</span>
              </li>
              <li className="mt-3">
                <span>Backend using SpringBoot with MySQL as DataBase.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
