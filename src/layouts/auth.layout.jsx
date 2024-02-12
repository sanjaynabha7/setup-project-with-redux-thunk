import React from 'react'
import { Outlet } from "react-router-dom";
import AuthHeaderLayout from "./auth-header.layout";
import AuthLeftSidebarLayout from "./auth-left-sidebar.layout";

const AuthLayout = () => {
  return (
    <>
      <AuthHeaderLayout />
      <AuthLeftSidebarLayout />
      <Outlet />
    </>
  );
};

export default AuthLayout;
