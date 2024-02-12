import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../consts/route.const";

const UnauthLayout = () => {
  return (
    <>
      <Navigate to={ROUTES.HOME} replace />
      <Outlet />
    </>
  );
};

export default UnauthLayout;
