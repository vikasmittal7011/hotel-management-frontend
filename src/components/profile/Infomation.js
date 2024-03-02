import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { UserContext } from "../../context/UserContext"
import useFetchApiCall from "../../hooks/useFetchApiCall"

const Infomation = () => {

    const { user, setUser } = useContext(UserContext)

    const { apiCall } = useFetchApiCall()

    const navigate = useNavigate()

    const logout = async () => {
        await apiCall("/auth/logout", "POST")
        setUser(null)
        navigate("/")
    }

    return (
        <div className="text-center mt-10 max-w-lg mx-auto">
            <p>Logged in as {user.name} {user.email}</p>

            <button onClick={logout} className="mt-5 bg-primary text-white w-full p-2 rounded-full max-w-sm">Log Out</button>

        </div>
    )
}

export default Infomation
