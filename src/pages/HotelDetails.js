/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import NavBar from "../components/common/NavBar"
import { useAlert } from "react-alert"
import { useEffect, useState } from "react"
import useFetchApiCall from "../hooks/useFetchApiCall"

const HotelDetails = () => {

    const { id } = useParams()

    const alert = useAlert()

    const [hotel, setHotel] = useState({});

    const [showImages, setShowImages] = useState(false);

    const { apiCall } = useFetchApiCall()

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

    useEffect(() => {
        getHotel()
    }, [id]);

    if (showImages) {
        return <>
            <div className="absolute bg-white inset-0 min-h-screen flex justify-center">
                <div className="p-8 grid">
                    <div>
                        <button onClick={() => setShowImages(false)} className="fixed bg-black text-white flex gap-2 px-2 py-1 rounded-xl right-8 top-24 opacity-80" >
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
            <div className="overflow-visible">
                {hotel?.title && (
                    <div className="mt-8 mx-5">

                        <div>
                            <h1 className="font-bold xs:text-xl md:text-2xl lg:text-3xl">{hotel?.title}</h1>
                            <a className="underline font-semibold xs:text-base md:text-lg lg:text-xl" target="_blank" rel="noreferrer" href="https://maps.google.com/?q=delhi,india">{hotel.city}, {hotel.country}</a>
                        </div>

                        <div className="relative">
                            <div className="mt-5 grid gap-2 xs:grid-cols-[2fr] md:grid-cols-[2fr_1fr] xl:grid-cols-[2fr_1fr_1fr] rounded-2xl overflow-hidden">
                                <div>
                                    <div>
                                        <img className="acpect-square object-cover" src={hotel?.photos?.[0]} alt="" />
                                    </div>
                                </div>

                                <div className="grid overflow-hidden md:block xs:hidden">
                                    <img className="acpect-square object-cover" src={hotel?.photos?.[1]} alt="" />
                                    <div>
                                        <img className="acpect-square object-cover relative top-2" src={hotel?.photos?.[2]} alt="" />
                                    </div>
                                </div>

                                <div className="grid overflow-hidden xs:hidden md:hidden xl:block">
                                    <img className="acpect-square object-cover" src={hotel?.photos?.[3]} alt="" />
                                    <img className="acpect-square object-cover relative top-2" src={hotel?.photos?.[4]} alt="" />

                                </div>

                            </div>

                            <button onClick={() => setShowImages(true)} className="flex gap-2 absolute bottom-2 right-3 bg-white px-3 py-1 rounded-xl opacity-70 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                Show All
                            </button>

                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HotelDetails
