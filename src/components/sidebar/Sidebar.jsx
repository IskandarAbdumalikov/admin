import React, { memo } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.scss";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import logOut from "../../assets/logOut.svg";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="sidebar">
      <h2 className="sidebar__logo">
        <Link to={"/"}>
          <FaArrowAltCircleLeft />
        </Link>
        <span>Dashboard</span>
      </h2>
      <ul className="sidebar__collection">
        <li className="sidebar__item">
          <NavLink className={"sidebar__link"} to={"create"}>
            <IoCreateOutline />
            <span>Create Product</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className={"sidebar__link"} to={"manage"}>
            <MdManageAccounts />
            <span>Manage Product</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className={"sidebar__link"} to={"userCreate"}>
            <IoCreateOutline />
            <span>Create User</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className={"sidebar__link"} to={"userManage"}>
            <MdManageAccounts />
            <span>Manage User</span>
          </NavLink>
        </li>
      </ul>
      <li onClick={handleLogOut} className="sidebar__item">
        <NavLink
          style={{ gap: "25px" }}
          className={"sidebar__link"}
          to={"register"}
        >
          <img style={{ color: "white" }} width={25} src={logOut} alt="" />
          <span style={{ color: "white" }}>Log Out</span>
        </NavLink>
      </li>
      <li className="sidebar__item">
        <NavLink style={{ gap: "25px" }} className={"sidebar__link"} to={"/"}>
          <FaHome width={30} />
          <span style={{ color: "white" }}>Home</span>
        </NavLink>
      </li>
    </div>
  );
};

export default memo(Sidebar);
