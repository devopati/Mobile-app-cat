import React from "react";
import { menuData } from "../Data/sideBarData";
import { Link } from "react-router-dom";
import { GiHealthNormal } from "react-icons/gi";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="side-top">
        <GiHealthNormal style={{ color: "red" }} />{" "}
        <h2>
          <span style={{ color: "blue" }}>HEALTH</span>&
          <span style={{ color: "green" }}>CARE</span>
        </h2>
      </div>
      <div className="sidebar-top">
        <h2>Dashboard</h2>
      </div>
      <div className="sidebar-menu">
        <h3 id="menu">menu</h3>
        {menuData.map((data) => {
          return (
            <Link key={data.id} to={data.path}>
              <li className="menu-items">
                <data.icon />
                <h3>{data.name}</h3>
              </li>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
