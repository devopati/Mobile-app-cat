import React from "react";
const patientData = [
  {
    label: "Patient Name",
  },
  {
    label: "PID Number",
  },
  {
    label: "Gender",
  },
  {
    label: "Date of Birth",
  },
  {
    label: "Country",
  },
  {
    label: "Street Address",
  },
];
const PatientForm = () => {
  return (
    <div
      className="empform-main"
      style={{ border: "2px solid black", padding: "1rem" }}
    >
      <div className="empform-head" style={{ textAlign: "center" }}>
        <h3>Patient Registration Form</h3>
      </div>
      <div
        className="emp-data"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "1.6rem",

          padding: "1rem",
          justifyItems: "center",
          textAlign: "center",
        }}
      >
        {patientData.map((data, index) => {
          return (
            <div className="inputs" key={index}>
              <label>
                {data.label}
                <input
                  type="text"
                  style={{ marginLeft: "1rem", marginTop: "2rem" }}
                />
              </label>
            </div>
          );
        })}
      </div>
      <div className="btn" style={{ textAlign: "center" }}>
        <button
          style={{
            padding: ".4rem",
            borderRadius: ".4rem",
            border: "none",
            background: "#009879",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default PatientForm;
