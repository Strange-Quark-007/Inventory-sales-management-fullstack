import React from "react";
import { FaBootstrap, FaReact} from 'react-icons/fa';
import { SiSpringboot} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Footer = () => {
  const cssStyle = { fontSize: "17px" };
  const cssClass = "btn btn-outline-light btn-floating m-2 rounded rounded-5";

  return (
    <footer className="bg-dark text-center text-white mt-auto">
      <div className="container p-2">
        <a className={cssClass} href="https://www.instagram.com/yasinbhimani25" role="button" style={cssStyle}>
          <i className="bi bi-instagram"></i>
        </a>
        <a className={cssClass} href="https://twitter.com/MasterYasin007" role="button" style={cssStyle}>
          <i className="bi bi-twitter"></i>
        </a>

        <a className={cssClass} href="https://www.linkedin.com/in/yasinbhimani25" role="button" style={cssStyle}>
          <i className="bi bi-linkedin"></i>
        </a>

        <a className={cssClass} href="https://github.com/Strange-Quark-007" role="button" style={cssStyle}>
          <i className="bi bi-github"></i>
        </a>
      </div>
      <div
        className="d-flex justify-content-between align-items-center p-2"
        style={{
          backgroundColor: "#0000004d",
          fontFamily: "Itim",
          fontSize: "20px",
          color: "#0a0155",
        }}
      >
          <div className="mx-5 text-center">
            <span className="mx-1 text-white">Made by: </span>
            <a
              className="mx-1"
              href="https://github.com/Strange-Quark-007"
              style={{ textDecoration: "none" }}
            >
              Strange Quark
            </a>
          </div>
          <div className="text-center px-5">
          <span className="mx-1 text-white">Made with: </span>
          <span className="mx-1" style={{color: '#7511f6'}}><FaBootstrap/></span>
          <span className="mx-1" style={{color: '#61DBFB'}}><FaReact/></span>
          <span className="mx-1" style={{color: '#53752c'}}><SiSpringboot/></span>
          <span className="mx-1" style={{color: '#00758F'}}><GrMysql/></span>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
