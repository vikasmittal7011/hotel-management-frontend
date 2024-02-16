/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom"
import NavBar from "../components/common/NavBar"
import { useAlert } from "react-alert"
import { useContext, useEffect, useState } from "react"
import useFetchApiCall from "../hooks/useFetchApiCall"
import Loader from "../components/common/Loader"
import Images from "../components/hotel/Images"
import BookingCard from "../components/hotel/BookingCard"
import AllImages from "../components/hotel/AllImages"
import { perks } from "../utils/constant"
import { UserContext } from "../context/UserContext"
import ConfirmDelereModal from "../components/hotel/ConfirmDelereModal"

const HotelDetails = () => {

    const navigate = useNavigate()

    const { user } = useContext(UserContext)

    const { id } = useParams()

    const alert = useAlert()

    const [hotel, setHotel] = useState({});

    const [showImages, setShowImages] = useState(false);

    const [open, setOpen] = useState(false)

    const { apiCall, loading } = useFetchApiCall()

    const getHotel = async () => {
        try {
            const response = await apiCall("/hotel/" + id)
            if (response.success) {
                setHotel(response.hotel)
            } else {
                alert.error("Something is wrong try again later")
            }
        } catch (err) {
            alert.error(err.message)
        }
    }

    const getSVG = (p) => {
        const a = perks.filter((pr) => pr.value === p && pr.svg)
        return a[0].svg
    }

    useEffect(() => {
        getHotel()
    }, [id]);

    if (showImages) {
        return <>
            <AllImages hotel={hotel} setShowImages={setShowImages} />
        </>
    }

    return (
        <div>
            <NavBar />
            <ConfirmDelereModal open={open} setOpen={setOpen} id={hotel.id} />
            {loading ?
                <Loader />
                :
                <div className="overflow-visible">
                    {user.role === "admin" &&
                        <div className="flex justify-between">
                            <button onClick={() => { navigate(`/edit-hotel/${hotel.id}`) }} className="mt-5 md:mx-5 bg-primary text-white w-auto px-5 py-2 rounded-md">Edit</button>
                            <button onClick={() => { setOpen(true) }} className="mt-5 md:mx-5 bg-gray-500 text-white w-auto px-5 py-2 rounded-md">Delete</button>
                        </div>
                    }

                    {hotel?.title && (
                        <div className="mt-8 md:mx-5">

                            <div>
                                <h1 className="font-bold xs:text-xl md:text-2xl lg:text-3xl">{hotel?.title}</h1>
                                <a className="underline font-semibold xs:text-base md:text-lg lg:text-xl" target="_blank" rel="noreferrer" href={`https://maps.google.com/?q=${hotel.city},${hotel.country}`}>{hotel.city}, {hotel.country}</a>
                            </div>

                            <div className="flex gap-5 mt-2 flex-col lg:flex-row">

                                <Images hotel={hotel} setShowImages={setShowImages} />

                                <BookingCard hotel={hotel} />

                            </div>

                            <div className="border-b-[1px] border-gray-400 mt-10" />

                            <div className="mt-10">
                                <h1 className="text-xl md:text-3xl font-bold">Discription</h1>
                                <p className="my-3 text-gray-600 text-justify">
                                    {hotel.discription}
                                </p>
                                <h1 className="text-xl md:text-3xl font-bold">Extra Info</h1>
                                <p className="my-3 text-gray-600 text-justify">
                                    {hotel.extraInfo}
                                </p>
                            </div>

                            <div className="border-b-[1px] border-gray-400 mt-10" />

                            <div className="mt-10">
                                <h1 className="text-xl md:text-3xl font-bold">Perks</h1>
                                {hotel.perks.map((p, i) => (
                                    <div key={i} className="my-3 text-gray-600 flex gap-2">
                                        &#x2022; <div>{getSVG(p)}</div> {p}
                                    </div>
                                ))}
                            </div>

                            <div className="border-b-[1px] border-gray-400 mt-10" />

                            <div className="mt-10">
                                <h1 className="text-xl md:text-3xl font-bold">Hotel Rules</h1>
                                <p className="my-3 text-gray-600 flex items-center gap-2">
                                    <b>CheckIn After</b> :- {hotel.checkIn} AM
                                </p>
                                <p className="my-3 text-gray-600 flex items-center gap-2">
                                    <b>CheckOut Before</b> :- {hotel.checkOut} PM
                                </p>
                                <p className="my-3 text-gray-600 flex items-center gap-2">
                                    <b>Number Of Guest</b> :- {hotel.maxGuests}
                                </p>
                            </div>
                            <div className="border-b-[1px] border-gray-400 mt-10" />

                            <div className="mt-10">
                                <h1 className="text-xl md:text-3xl font-bold">Address</h1>
                                <p className="my-3 text-gray-600 flex items-center gap-2">
                                    {hotel.street}, {hotel.state},<br /> {hotel.city}, {hotel.pin}, <br /> {hotel.country}
                                </p>
                            </div>

                        </div>
                    )}
                </div>
            }

        </div>
    )
}

export default HotelDetails
