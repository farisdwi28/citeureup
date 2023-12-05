import { getUserData, clearDataLogin } from "../utils/storage";
import { Navigate } from "react-router-dom";

const BumdesRoute = ({ children }) => {
  const userdata = getUserData();

  if (!userdata || userdata.level !== "BUMDES") {
    clearDataLogin();
    return <Navigate to="/Login" />;
  }

  return children;
};

export default BumdesRoute;
