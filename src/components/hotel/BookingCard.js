/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import Input from "../form/Input";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { amountAfterTax } from "../../utils/constant";

const BookingCard = ({ hotel }) => {

    const user = useContext(UserContext)

    const navigate = useNavigate()

    const alert = useAlert()

    const [bookingInfo, setBookingInfo] = useState({
        checkIn: "",
        checkOut: "",
        guest: 1,
        totalAmount: "",
        days: 1
    });

    const onChange = (id, value) => {

        if (id === "guest") {
            if (+value > hotel.maxGuest) {
                setBookingInfo({ ...bookingInfo, [id]: hotel.maxGuest })
            }
        }
        setBookingInfo({ ...bookingInfo, [id]: value })
    }

    const handleClick = (e) => {
        e.preventDefault()

        if (bookingInfo.checkIn === "") {
            alert.error("Plase enter check IN date and time")
            return
        } else if (bookingInfo.checkOut === "") {
            alert.error("Plase enter check OUT date and time")
            return
        } else if (bookingInfo.guest < 1) {
            alert.error("Plase enter a valid guest number")
            return
        } else if (bookingInfo.checkIn > bookingInfo.checkOut) {
            alert.error("CheckIn date must be earlier than checkout date")
            return
        }

        if (user) {
            localStorage.setItem("bookingInfo", JSON.stringify(bookingInfo))
            localStorage.setItem("hotel", JSON.stringify(hotel))

            navigate("/confirm-booking")
        } else {
            alert.error("Plase login first to book an hotel!!")
        }
    }

    useEffect(() => {
        amountAfterTax(hotel, bookingInfo, setBookingInfo)
    }, [bookingInfo.guest, bookingInfo.checkIn, bookingInfo.checkOut]);

    return (
        <div className="basis-1/4 border p-5 bg-gray-200 rounded-2xl flex flex-col justify-evenly">
            <h1 className="text-lg md:text-2xl font-bold">₹ {hotel.price}/- Per Nigth</h1>

            <div className="rounded-md p-2 bg-gray-300 my-2">
                <div className="flex flex-col lg:flex-row gap-2">
                    <Input name="CheckIn" id="checkIn" text="base -mt-7 -mb-2" type="datetime-local" onClick={onChange} value={bookingInfo.checkIn} />
                    <Input name="CheckOut" id="checkOut" text="base -mt-7 -mb-2" type="datetime-local" onClick={onChange} value={bookingInfo.checkOut} />
                </div>
                <div className="-mt-7 -mb-1">
                    <Input name="Number Of Guest" text="base" id="guest" type="number" onClick={onChange} value={bookingInfo.guest} />
                </div>
            </div>

            <button onClick={handleClick} className="bg-primary text-white w-full rounded-md py-1 md:py-3">Book Now</button>

            <div className="border-b-2 border-gray-600 my-2" />

            <div className="flex justify-between items-center">
                <p>₹ {hotel.price} X {bookingInfo.guest} Guest</p>
                <p>₹ {hotel.price * bookingInfo.guest}</p>

            </div>

            <div className="border-b-[1px] border-gray-600 my-2" />

            <div className="flex justify-between items-center">
                <p>Total After 18% Tax And {bookingInfo.days} Nigth</p>
                <p>₹ {bookingInfo.totalAmount}</p>
            </div>

        </div>
    )
}

export default BookingCard
