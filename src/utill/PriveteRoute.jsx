import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useLogin } from "../context/Context";

const PrivateRoutes = () => {
  const location = useLocation();
  const [login, setLogin] = useLogin();
  // console.log(location.pathname);

  return login.jwtToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location.pathname.split("/")[1] }} />
  );
};

export default PrivateRoutes;
