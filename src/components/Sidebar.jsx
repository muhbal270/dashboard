import React from "react";
import { Link } from 'react-router-dom'

import 'bootstrap-icons/font/bootstrap-icons.css'

const Sidebar = () => {
  return (
    <div className="sidebar d-flex justify-content-between flex-column bg-dark text-white py-3 ps-3 pe-4 vh-100">
      <div>
        <span href="" className="p-3">
          <i className="bi bi-code-slash fs-4 me-4"></i>
          <span className="fs-4">Sidebar</span>
        </span>
        <hr className="text-white mt-2" />
        <ul className="nav nav-pills flex-column mt-3">
          <li className="nav-item p-2">
            <a href="/" className="p-1 text-white">
              <i className="bi bi-speedometer2 me-3 fs-5"></i>
              <span className="fs-5">Dashboard</span>
            </a>
          </li>
          <li className="nav-item p-2">
            <a href="/user" className="p-1 text-white">
              <i className="bi bi-people me-3 fs-5"></i>
              <span className="fs-5">Users</span>
            </a>
          </li>
          <li className="nav-item p-2">
            <a href="/cart" className="p-1 text-white">
              <i className="bi bi-cart me-3 fs-5"></i>
              <span className="fs-5">Cart</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <hr className="text-white" />
        <div className="nav-item p-3">
          <a href="" className="p-1 text-white">
            <i className="bi bi-person-circle me-3 fs-5"></i>
            <span className="fs-5">User</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
