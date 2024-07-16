// pages/dashboard/layout.js

import React from "react";
import Head from "next/head";
import Header from "./header";
import Sidebar from "./sidebar";

const DashboardLayout = ({ children }) => (
  <>
    <Header />
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-md-10">{children}</div>
      </div>
    </div>
  </>
);

export default DashboardLayout;
