import React from "react";
import "./components.css";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-cards">
      <div className="dashboard-card" style={{ position: "fixed" }}>
        <SideBar />
      </div>
      <div className="dashboard-card" style={{ marginLeft: "15rem" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
