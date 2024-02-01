import { createContext, useEffect, useState } from "react";
import useFetchApiCall from "../hooks/useFetchApiCall";
import Loader from "../components/common/Loader";
export const UserContext = createContext()

export function UserContextProvider({ children }) {

    const { apiCall } = useFetchApiCall()

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(false);

    const getProfile = async () => {
        setLoading(true)
        try {
            const response = await apiCall("/user")
            setUser(response.user)
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