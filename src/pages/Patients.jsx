import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { BsFillInfoCircleFill, BsThreeDots } from "react-icons/bs";
import { PatientsData } from "../Data/PatientsData";
import { AiOutlinePlus } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

const Patients = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="patients-container">
      <div
        className="employee-header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <div className="emp-no">
          <h2>Total Patients -{PatientsData.length}-</h2>
        </div>
        <div className="search-bar" style={{ display: "flex", gap: "1rem" }}>
          <input type="text" />

          <button
            style={{
              padding: ".2rem",
              background: "#009879",
              color: "white",
              borderRadius: ".3rem",
              fontSize: "normal",
              fontWeight: "bold",
              border: "none",
              height: "1.7rem",
            }}
          >
            Search
          </button>
        </div>
        <Link to="../forms/patientform">
          <div className="add-emp">
            <AiOutlinePlus style={{ fontSize: "1rem", fontWeight: "bold" }} />
            <h3>Add Patient</h3>
          </div>
        </Link>
      </div>
      <div className="patients-table">
        <table class="styled-table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>PID Number</th>
              <th>Gender</th>
              <th>Date Of Birth</th>
              <th>Country</th>
              <th>Street Address</th>
              <th>Date In</th>
              <th>Patient Info</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {PatientsData.map((data) => {
              return (
                <tr
                  // className={active && "active-row"}
                  key={data.id}
                  // onClick={() => setActive(!active)}
                >
                  <td>{data.name}</td>
                  <td>{data.pid}</td>
                  <td>{data.gender}</td>
                  <td>{data.dob}</td>
                  <td>{data.country}</td>
                  <td>{data.address}</td>
                  <td>{data.in}</td>
                  <td style={{ textAlign: "center", color: "blue" }}>
                    <BsFillInfoCircleFill />
                  </td>
                  <td id="actions">
                    <MdDelete id="action-icon" style={{ color: "red" }} />
                    <BiEdit color="blue" id="action-icon" />
                    <BsThreeDots id="action-icon" />
                  </td>
                </tr>
              );
            })}

            {/* <tr class="active-row">
              <td>Melissa</td>
              <td>5150</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patients;
