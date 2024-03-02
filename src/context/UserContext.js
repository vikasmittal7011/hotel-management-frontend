import { createContext, useEffect, useState } from "react";

import Loader from "../components/common/Loader";
import useFetchApiCall from "../hooks/useFetchApiCall";

export const UserContext = createContext()

export function UserContextProvider({ children }) {

    const { apiCall } = useFetchApiCall()

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(false);

    const getProfile = async () => {
        setLoading(true)
        try {
            const response = await apiCall("/user")
            if (response.success) {
                setUser(response.user)
                setLoading(false)
            }
            setLoading(false)
        } catch (err) {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!user) {
            getProfile()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return <Loader />
    }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}