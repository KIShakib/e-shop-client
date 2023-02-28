import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";
import Loader from "../Shared/Loader/Loader";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loader />
    }

    if (user && user.uid) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }}></Navigate>

}

export default PrivateRoute;