/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState, useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import Input from "../components/form/Input";
import PaymentMethods from "../components/hotel/PaymentMethods ";
import useFetchApiCall from "../hooks/useFetchApiCall";
import { UserContext } from "../context/UserContext";
import { amountAfterTax } from "../utils/constant";
import { useAlert } from "react-alert";

const ConfirmBooking = () => {

    const alert = useAlert()

    const navigate = useNavigate()

    const { user } = useContext(UserContext)

    const { apiCall, loading } = useFetchApiCall()

    const hotel = JSON.parse(localStorage.getItem("hotel"));

    const [bookingInfo, setBookingInfo] = useState({ ...JSON.parse(localStorage.getItem("bookingInfo")), contact: "" });

    const onChange = (id, value) => {

        if (id === "guest") {
            if (+value > hotel.maxGuest) {
                setBookingInfo({ ...bookingInfo, [id]: hotel.maxGuest })
            }
        }
        setBookingInfo({ ...bookingInfo, [id]: value })
    }

    const handleClick = async (e) => {
        e.preventDefault()
        try {
            const response = await apiCall("/booking", "POST", { ...bookingInfo, hotel: hotel.id })
            if (response.success) {
                alert.success("Booking is done")
                navigate("/profile/booking")
            } else {
                alert.error(response.message || "Something is wrong, plase try again later!!")
            }
        } catch (error) {
            alert.error(error.message)
        }
    }

    const handleCancel = () => {
        localStorage.removeItem("hotel")
        localStorage.removeItem("bookingInfo")

        navigate("/")
    }

    useEffect(() => {
        if (bookingInfo) {
            amountAfterTax(hotel, bookingInfo, setBookingInfo)
        }
    }, [bookingInfo?.guest]);

    return (
        <div>
            {hotel && bookingInfo ? <div>
                <div>
                    <h1 className="text-center my-5 font-bold text-xl md:text-3xl">Plase Confirm Your Details Before Book</h1>
                </div>
                <div className="flex flex-col md:flex-row justify-around items-center gap-5">
                    <div className="bg-gray-200 rounded-2xl p-8 lg:p-20 w-full md:w-1/2">
                        <div className="mt-10">
                            <h1 className="text-xl md:text-2xl font-bold">Name of Hotel</h1>
                            <p className="my-3 text-gray-600 text-justify">
                                {hotel?.title}
                            </p>
                        </div>
                        <div className="mt-10">
                            <h1 className="text-xl md:text-2xl font-bold">Book By</h1>
                            <p className="my-3 text-gray-600 text-justify">
                                {user?.name} <br /> {user?.email}
                            </p>
                            <div className="md:block hidden">
                                <button disabled={loading} onClick={handleClick} className="cursor-pointer bg-primary text-white w-full rounded-md py-1 md:py-3">Confirm Booking</button>
                                <p onClick={handleCancel} className="text-blue-600 underline text-center my-2 cursor-pointer">Cancel Booking</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h1 className="text-lg md:text-xl mb-5 font-semibold">₹ {bookingInfo?.totalAmount} Total Charge</h1>
                        <form>
                            <div className="flex flex-col lg:flex-row gap-1">
                                <Input name="CheckIn" id="checkIn" text="base -mt-7 -mb-2" type="datetime-local" onClick={onChange} value={bookingInfo?.checkIn} />
                                <Input name="CheckOut" id="checkOut" text="base -mt-7 -mb-2" type="datetime-local" onClick={onChange} value={bookingInfo?.checkOut} />
                            </div>

                            <div className="-mt-6 -mb-1">
                                <Input name="Number Of Guest" text="base" id="guest" type="number" onClick={onChange} value={bookingInfo?.guest} />
                            </div>

                            <div className="-mt-6 -mb-1">
                                <Input name="Contact Number" text="base" id="contact" type="tel" onClick={onChange} value={bookingInfo?.contact} />
                            </div>

                            <div className="-mt-6 -mb-1">
                                <PaymentMethods text="base" handlePaymentInfo={onChange} />
                            </div>

                            <div className="block md:hidden">
                                <button disabled={loading} onClick={handleClick} className="my-5 bg-primary text-white w-full rounded-md py-1 md:py-3">Confirm Booking</button>
                                <p onClick={handleCancel} className="text-blue-600 underline text-center my-2 cursor-pointer">Cancel Booking</p>
                            </div>

                        </form>
                    </div>
                </div>
            </div> : <Navigate to="/" />}
        </div>
    )
}

export default ConfirmBooking
