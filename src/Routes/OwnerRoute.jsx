import { useContext } from "react";
import { Navigate } from "react-router";
import Loading from "../components/Loading/Loading";
import useOwner from "../hooks/useOwner";
import { AuthContext } from "../providers/AuthProvider";

const OwnerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isOwner, isOwnerLoading] = useOwner()

    if(loading || isOwnerLoading){
        return <Loading />
    }

    if (user && isOwner) {
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default OwnerRoute;