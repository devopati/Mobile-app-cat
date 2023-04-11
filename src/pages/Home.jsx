import React from "react";
import { PatientsData } from "../Data/PatientsData";
import { employeeData } from "../Data/employeeData";
import { FaRegEye } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="default-main">
      <div className="default-cards">
        <div className="d-card">
          <h3>PATIENTS</h3>
          <div
            style={{
              marginTop: "3rem",
              color: "#E0115F",
              marginBottom: "1.8rem",
            }}
          >
            <h2>{PatientsData.length}</h2>
          </div>
          <Link to="../employees">
            <FaRegEye size="2rem" />
          </Link>
        </div>
        <div className="d-card">
          <h3>EMPLOYEES</h3>
          <div style={{ marginTop: "3rem", marginBottom: "1.8rem" }}>
            <h2>{employeeData.length}</h2>
          </div>
          <Link to="../employees">
            <FaRegEye size="2rem" />
          </Link>
        </div>
        <div className="d-card">
          <h3>ASSETS</h3>
          <div
            style={{
              marginTop: "3rem",
              color: " #FFD700",
              marginBottom: "1.8rem",
            }}
          >
            <h2>$ 45,687</h2>
          </div>
          <GrMoney size="2rem" color="white" />
        </div>
      </div>
    </div>
  );
};

export default Home;
