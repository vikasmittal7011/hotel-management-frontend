import { useAlert } from 'react-alert';
import { ClipLoader } from 'react-spinners';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../components/form/Input'
import NavBar from '../components/common/NavBar'
import { UserContext } from '../context/UserContext';
import useFetchApiCall from '../hooks/useFetchApiCall';

const ConfirmOTP = () => {

    const { setUser } = useContext(UserContext)

    const alert = useAlert()

    const { apiCall, loading } = useFetchApiCall()

    const navigate = useNavigate()

    const data = JSON.parse(localStorage.getItem("data"))

    const [otp, setotp] = useState("");

    const onChange = (id, value) => {
        setotp(value);
    };


    const registerUser = async (e) => {
        e.preventDefault();

        if (otp.length !== 6) {
            alert.error("OTP is must be 6 digit")
            return
        }

        if (loading) {
            return
        }

        if (+otp === +data.otp) {

            try {
                const response = await apiCall("/auth", "POST", data)
                if (response.success) {
                    localStorage.removeItem("data")
                    setUser(response.user)
                    navigate("/")
                } else {
                    alert.error(response.message)
                }
            } catch (error) {
                alert.error(error.message)
            }
        } else {
            alert.error("Enter a valid OTP")
        }

    };

    return (
        <div>
            <NavBar />

            <div className="mx-auto max-w-xl mt-4 center">
                <form>
                    <div>
                        <Input
                            onClick={onChange}
                            name="Enter opt"
                            type="text"
                            placeholder="Enter your OTP..."
                            id="otp"
                            value={otp}
                        />
                        <div className="mt-6">
                            <button
                                disabled={loading}
                                type="submit"
                                onClick={registerUser}
                                className={`w-full rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex justify-center items-center gap-2 ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}
                            >
                                <ClipLoader color='white' size="20" loading={loading} />  <div>Verified / Register</div>
                            </button>
                        </div>
                        <div className="flex justify-around mt-2">
                            <div
                                className="text-blue-600 underline cursor-pointer"
                                onClick={() => {
                                    navigate("/register")
                                }}
                            >
                                Change Email?
                            </div>
                        </div>
                    </div>
                </form>
            </div >


        </div >
    )
}

export default ConfirmOTP
