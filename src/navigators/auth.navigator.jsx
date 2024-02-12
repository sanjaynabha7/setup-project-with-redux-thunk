import React from 'react'
import { ROUTES } from "../consts/route.const";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";


const AuthNavigator = () => {
  const isLoggedIn = true;
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === ROUTES.HOME) {
      navigate(ROUTES.HOME, { replace: true });
    }
  }, [location.pathname, navigate]);

  if (!isLoggedIn) {
    return <Navigate to={ROUTES.AUTH_LOGIN} replace />;
  }
  return <Outlet />;
};

export default AuthNavigator;
