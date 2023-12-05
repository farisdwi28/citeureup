import { clearDataLogin, getUserData } from "../utils/storage";
import { Navigate } from "react-router-dom";
 
const UMKMRoute = ({children}) => {
    const userdata = getUserData();

    if (!userdata || userdata.level !== "UMKM") {
    clearDataLogin();
    return <Navigate to="/login" />
  }

    return children;
 }

 
export default UMKMRoute;