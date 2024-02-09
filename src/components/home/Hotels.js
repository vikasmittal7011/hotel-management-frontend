/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react"
import useFetchApiCall from "../../hooks/useFetchApiCall"
import { useAlert } from "react-alert"
import Card from "../hotel/Card"

const Hotels = () => {

    const alert = useAlert()

    const { apiCall } = useFetchApiCall()

    const [hotels, setHotels] = useState([]);

    const getHotels = async () => {
        try {
            const response = await apiCall("/hotel")
            setHotels(response.hotels)
        } catch (err) {
            alert.error(err.message)
        }
    }

    useEffect(() => {
        getHotels()
    }, []);

    return (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {hotels.length > 0 &&
                hotels.map((hotel, i) => (<Card key={i} hotel={hotel} />))
            }
        </div>
    )
}

export default Hotels
