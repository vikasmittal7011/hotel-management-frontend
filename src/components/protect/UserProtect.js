import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { useNavigate } from "react-router-dom"

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
