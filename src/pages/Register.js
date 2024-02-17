import { useState } from "react";
import Input from "../components/form/Input";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import NavBar from "../components/common/NavBar";
import useFetchApiCall from '../hooks/useFetchApiCall';
import { ClipLoader } from "react-spinners";


const Register = () => {
    const alert = useAlert();

    const { apiCall, loading } = useFetchApiCall()

    const navigate = useNavigate();

    const [credentials, setcredentials] = useState({
        name: "",
        email: "",
        password: "",
    });

    const onChange = (id, value) => {
        setcredentials({ ...credentials, [id]: value });
    };

    const sendOTP = async (e) => {
        if (e) {
            e.preventDefault();
        }

        if (credentials.password.length < 4 || credentials.email === "" || credentials.name === "") {
            alert.error("Enter valid credentials1!!");
            return;
        }

        if (loading) {
            return
        }

        try {
            const response = await apiCall("/auth/otp", "POST", credentials)
            if (response.success) {
                const data = { ...credentials, otp: response.otp }
                localStorage.setItem("data", JSON.stringify(data))
                navigate("/confirm-otp")
            } else {
                alert.error("Something is wrong plase try again later!!")
            }
        } catch (error) {
            alert.error(error.message)
        }

    };


    return (
        <div>
            <NavBar />
            <div className="flex mt-14">
                <h2 className="text-4xl font-bold leading-7 mx-auto text-gray-900">
                    Register
                </h2>
            </div>

            <div className="mx-auto max-w-xl mt-4 center">
                <form>
                    <div>
                        <Input
                            onClick={onChange}
                            name="Name"
                            type="text"
                            placeholder="Enter your name..."
                            id="name"
                            value={credentials.name}
                        />
                        <Input
                            onClick={onChange}
                            name="Email"
                            type="email"
                            placeholder="Enter your email..."
                            id="email"
                            value={credentials.email}
                        />
                        <Input
                            onClick={onChange}
                            name="Pasword"
                            type="password"
                            placeholder="Enter your paasword..."
                            id="password"
                            value={credentials.password}
                        />

                        <div id="sign-in-button" className="items-center" />
                        <div className="mt-6">
                            <button
                                disabled={loading}
                                type="submit"
                                onClick={sendOTP}
                                className={`w-full rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${loading ? "cursor-not-allowed" : "cursor-pointer"} flex justify-center items-center gap-2`}
                            >
                                <ClipLoader color='white' size="20" loading={loading} />  <div>Send OTP</div>
                            </button>
                        </div>
                        <div className="flex justify-around mt-2">
                            <p>
                                Already have an account?{" "}
                                <Link to="/login" className="text-blue-600 underline">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
