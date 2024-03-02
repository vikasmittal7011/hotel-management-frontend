import { useAlert } from "react-alert";
import { ClipLoader } from "react-spinners";
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import Input from "../components/form/Input"
import NavBar from "../components/common/NavBar"
import { UserContext } from "../context/UserContext";
import useFetchApiCall from "../hooks/useFetchApiCall";

const Login = () => {

    const { setUser } = useContext(UserContext)

    const alert = useAlert()

    const navigate = useNavigate()

    const { apiCall, loading } = useFetchApiCall()

    const [credentials, setcredentials] = useState({
        email: "",
        password: ""
    });

    const onChange = (id, value) => {
        setcredentials({ ...credentials, [id]: value })
    }

    const loginuser = async (e) => {
        e.preventDefault()

        if (credentials.email === "" || credentials.password === "") {
            alert.error("Enter valid credentials!!")
            return;
        }

        if (loading === true) {
            return;
        }

        try {
            const response = await apiCall("/auth/login", "POST", credentials)
            if (response.success) {
                alert.success("Login suucess")
                setUser(response.user)
                navigate("/")
            } else {
                alert.error(response.message)
            }
        } catch (error) {
            alert.error(error.message)
        }

    }

    return (
        <div>
            <NavBar />
            <div className="flex mt-14">
                <h2 className="text-4xl font-bold leading-7 mx-auto text-gray-900">Login</h2>
            </div>

            <div className="mx-auto max-w-xl mt-4 center">
                <form>
                    <div className="relative">
                        <Input onClick={onChange} name="Email" type="email" placeholder="Enter your email..." id="email" value={credentials.email} />
                        <Input onClick={onChange} name="Pasword" type="password" placeholder="Enter your paasword..." id="password" value={credentials.password} />
                        <Link to="/forgot-password" className="absolute right-0 mt-2 text-blue-600 underline text-right">Forget Password?</Link>


                        <div className="mt-12">
                            <button disabled={loading} type="submit" onClick={loginuser} className={`w-full rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex justify-center items-center gap-2 ${loading ? "cursor-not-allowed" : "cursor-pointer"} `}> <ClipLoader color='white' size="20px" loading={loading} /> <div>Login</div> </button>
                        </div>
                        <div className="flex justify-around mt-2">
                            <p>Don't have an account yet? <Link to="/register" className="text-blue-600 underline">Register</Link></p>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login
