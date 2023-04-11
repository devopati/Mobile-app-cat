import React from "react";
import { Outlet } from "react-router";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Forms = () => {
  return (
    <div className="forms-main">
      <div className="form-cards">
        <div className="card">
          <h1>Add Patient Form</h1>
          <Link to="patientform">
            <AiOutlinePlusCircle id="form-icon" />
          </Link>
        </div>
        <div className="card">
          <h1>Add Employee Form</h1>
          <Link to="employeeform">
            <AiOutlinePlusCircle id="form-icon" />
          </Link>
        </div>
      </div>
      <div className="form">
        <Outlet />
      </div>
    </div>
  );
};

export default Forms;
