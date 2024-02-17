/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import useFetchApiCall from "../../hooks/useFetchApiCall"
import Loader from "../common/Loader"
import BookingCard from "./BookingCard";

const Booking = () => {

    const [booking, setBooking] = useState([]);

    const { apiCall, loading } = useFetchApiCall()

    const getMyBooking = async () => {
        const response = await apiCall("/booking")
        setBooking(response.booking)
    }

    useEffect(() => {
        getMyBooking()
    }, []);

    return (
        <>
            {loading ? <Loader /> :
                <div>
                    {booking.length > 0 ? <BookingCard booking={booking} /> :
                        <h1 className="font-bold text-center my-2 md:my-10 text-xl md:text-2xl">You don't book any hotel yet!!</h1>
                    }
                </div>
            }
        </>
    )
}

export default Booking
