import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useOwner = () => {
    const {user, loading} = useContext(AuthContext)
    const {data: isOwner, isLoading: isOwnerLoading} = useQuery({
        queryKey: ['isOwner', user?.email],
        enabled: !loading,
        queryFn: async() => {
            const res = await axios.get(`http://localhost:5000/owner/${user?.email}`)
            return res.data.owner;
        }
    })
    return [isOwner, isOwnerLoading];
}

export default useOwner;