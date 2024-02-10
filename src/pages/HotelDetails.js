/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import NavBar from "../components/common/NavBar"
import { useAlert } from "react-alert"
import { useEffect, useState } from "react"
import useFetchApiCall from "../hooks/useFetchApiCall"
import Loader from "../components/common/Loader"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Input from "../components/form/Input"

const HotelDetails = () => {

    const { id } = useParams()

    const alert = useAlert()

    const [hotel, setHotel] = useState({});

    const [showImages, setShowImages] = useState(false);

    const [bookingInfo, setBookingInfo] = useState({
        checkIn: "",
        checkOut: "",
    });

    const [guest, setGuest] = useState(1);

    const { apiCall, loading } = useFetchApiCall()

    const onChange = (id, value) => {
        setBookingInfo({ ...bookingInfo, [id]: value })
    }

    const handleGuestNumber = (id, value) => {
        if (+value === +0) {
            setGuest(1)
        } else { setGuest(value) }

    }

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

    const amountAfterTax = () => {
        const amount = (hotel.price * guest) * (18 / 100)
        return (amount + (hotel.price * guest))
    }

    useEffect(() => {
        getHotel()
    }, [id]);

    if (showImages) {
        return <>
            <div className="absolute bg-black text-white inset-0 min-h-screen flex justify-center">
                <div className="p-8 grid">
                    <div>
                        <button onClick={() => setShowImages(false)} className="fixed bg-white text-black flex gap-2 px-2 py-1 rounded-xl right-8 top-24 opacity-80" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            Close
                        </button>
                        <h1 className="text-2xl font-bold mb-5">{hotel.title}</h1>
                    </div>
                    {hotel?.photos?.length > 0 && (
                        hotel?.photos?.map((img) => (
                            <>
                                <div>
                                    <img alt="" src={img} className="acpect-square object-cover mb-5 rounded-xl" width={800} height={800} />
                                </div>
                            </>
                        ))
                    )}
                </div>
            </div>
        </>
    }

    return (
        <div>
            <NavBar />
            {loading ?
                <Loader />
                :
                <div className="overflow-visible">
                    {hotel?.title && (
                        <div className="mt-8 mx-5">

                            <div>
                                <h1 className="font-bold xs:text-xl md:text-2xl lg:text-3xl">{hotel?.title}</h1>
                                <a className="underline font-semibold xs:text-base md:text-lg lg:text-xl" target="_blank" rel="noreferrer" href={`https://maps.google.com/?q=${hotel.city},${hotel.country}`}>{hotel.city}, {hotel.country}</a>
                            </div>

                            <div className="flex gap-5 mt-2 flex-col lg:flex-row">

                                <div className=" basis-3/4">
                                    <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false}>
                                        {hotel.photos.map((image, index) => (
                                            <div onClick={() => setShowImages(true)} key={index} className="aspect-h-5 aspect-w-4 cursor-pointer">
                                                <img
                                                    src={image}
                                                    alt={image}
                                                    className="object-cover h-[470px] rounded-md"
                                                />
                                            </div>
                                        ))}
                                    </Carousel>
                                </div>

                                <div className="basis-1/4 border p-5 bg-gray-200 rounded-2xl flex flex-col justify-evenly">
                                    <h1 className="text-2xl font-bold">₹ {hotel.price}/- Per Nigth</h1>

                                    <div className=" rounded-md p-2 bg-gray-300">
                                        <div className="flex">
                                            <Input name="CheckIn" id="checkIn" text="lg" type="datetime-local" onClick={onChange} value={bookingInfo.checkIn} />
                                            <Input name="CheckOut" id="checkOut" text="lg" type="datetime-local" onClick={onChange} value={bookingInfo.checkOut} />
                                        </div>
                                        <div className="-mt-7">
                                            <Input name="Number Of Guest" text="lg" id="guest" type="number" onClick={handleGuestNumber} value={guest} />
                                        </div>
                                    </div>

                                    <button className="bg-primary text-white w-full rounded-md py-3">Book Now</button>

                                    <div className="border-b-2 border-gray-600" />

                                    <div className="flex justify-between items-center">
                                        <p>₹ {hotel.price} X {guest} Night</p>
                                        <p>₹ {hotel.price * guest}</p>

                                    </div>

                                    <div className="border-b-[1px] border-gray-600" />

                                    <div className="flex justify-between items-center">
                                        <p>Total After 18% Tax</p>
                                        <p>₹ {amountAfterTax()}</p>
                                    </div>

                                </div>

                            </div>


                        </div>
                    )}
                </div>
            }

        </div>
    )
}

export default HotelDetails
