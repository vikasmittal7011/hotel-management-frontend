import { useContext } from "react"

import { useNavigate } from "react-router-dom"
import { UserContext } from "../../context/UserContext"

const UserProtect = ({ children }) => {
    const navigate = useNavigate

    const { user } = useContext(UserContext)

    if (!user) {
        return
    }

    if (!user.role === "user") {
        navigate("/")
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default UserProtect
