import React, { useState } from "react";
import { employeeData } from "../Data/employeeData";
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { BiEdit, BiSearchAlt2 } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  BsFillInfoCircleFill,
  BsThreeDots,
  BsCircle,
  BsCircleFill,
  BsDot,
} from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const Employees = () => {
  const [fill, setFill] = useState(false);
  return (
    <div className="employees-container">
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
          <h2>Total Employees -{employeeData.length}-</h2>
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
        <Link to="../forms/employeeform">
          <div className="add-emp">
            <AiOutlinePlus style={{ fontSize: "1rem", fontWeight: "bold" }} />
            <h3>Add Employee</h3>
          </div>
        </Link>
      </div>
      <div className="patients-table">
        <table class="styled-table">
          <thead>
            <tr>
              <th id="emp-drp">
                Employee Name <RiArrowDropDownLine id="table-icon" />
              </th>
              <th>EID Number</th>
              <th>Gender</th>
              <th>Policy</th>
              <th>Policy Status</th>
              <th>Destination</th>
              <th>Status</th>
              <th>Progress</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((data) => {
              return (
                <tr
                  // className={active && "active-row"}
                  key={data.id}

                  // onClick={() => setActive(!active)}
                >
                  <td id="emp-circle">
                    {" "}
                    {fill ? (
                      <BsCircleFill id="circle-icon" />
                    ) : (
                      <BsCircle id="circle-icon" />
                    )}
                    {data.name}
                  </td>
                  <td>{data.eid}</td>
                  <td>{data.gender}</td>
                  <td id="policy">
                    $ {data.policyKsh}{" "}
                    <small style={{ color: "grey" }}>{data.policy}</small>
                  </td>
                  <td>
                    <BsDot />
                    {data.pstatus}
                  </td>
                  <td>{data.destination}</td>
                  <td>{data.status}</td>
                  <td>{data.progress}</td>
                  <td id="actions">
                    <MdDelete id="action-icon" style={{ color: "red" }} />
                    <BiEdit style={{ color: "blue" }} id="action-icon" />
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

export default Employees;
