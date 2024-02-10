/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react"
import Input from "../form/Input"
import TextArea from "../form/TextArea";
import CheckBox from "../form/CheckBox";
import { perks, validHotelInfo } from "../../utils/constant";
import usePreviewImg from "../../hooks/useImagePreview";
import useFetchApiCall from "../../hooks/useFetchApiCall";
import { useAlert } from "react-alert";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";


const AddHotelForm = () => {

    const navigate = useNavigate()

    const alert = useAlert()

    const { apiCall, loading } = useFetchApiCall()

    const imgClickRef = useRef()

    const { handleImageChange, imgUrl, setImgUrl } = usePreviewImg()

    const [hotelInfo, setHotelInfo] = useState({
        title: "",
        discription: "",
        extraInfo: "",
        price: "",
        maxGuests: "",
        checkIn: "",
        checkOut: "",
        street: "",
        city: "",
        state: "",
        pin: "",
        country: "",
    });

    const [images, setImages] = useState([]);

    const [imageURL, setImageURL] = useState("");

    const [perk, setPerk] = useState([]);

    const handleChange = (id, value) => {
        setHotelInfo({ ...hotelInfo, [id]: value });
    }

    const handleRefClick = () => {
        imgClickRef.current.click();
    }

    useEffect(() => {
        if (imgUrl) {
            setImages([...images, imgUrl])
            setImgUrl("")
        }
    }, [imgUrl]);

    const handleImageUrl = async () => {
        if (imageURL) {
            try {
                const response = await fetch(imageURL)
                const blob = await response.blob();

                // Read the blob as a data URL
                const reader = new FileReader();
                reader.onloadend = () => {
                    setImages([...images, reader.result])
                    setImageURL("")
                };
                reader.readAsDataURL(blob);
            } catch (Err) {
                console.log(Err.message)
            }

        }
    }

    const handleImageUrlInput = (e) => {
        setImageURL(e.target.value)
    }

    const handleCheckBox = (data) => {
        if (data.checked) {
            setPerk([...perk, data.value])
        } else {
            const newPerk = perk.filter((p) => p !== data.value)
            setPerk(newPerk)
        }
    }

    const addHotel = async (e) => {
        e.preventDefault()

        const { message, success } = validHotelInfo(hotelInfo, perk, images);

        if (success) {
            try {
                const response = await apiCall("/hotel", 'POST', { ...hotelInfo, images, perk })
                if (response.success) {
                    alert.success("Hotel added successfully")
                    navigate("/")
                }
                else
                    alert.error("Something is wrong, plase try again later!!!")
            } catch (err) {
                alert.error(err.message)
            }
        } else {
            alert.error(message)
        }

    }

    const removeImage = (img) => {
        const newImages = images.filter((i) => i !== img)
        setImages(newImages)
    }

    return (
        <div className="max-w-5xl mx-auto mb-10">
            <form className="space-y-12 mt-5">

                <div className="max-w-2xl">
                    <Input name="Title" placeholder="Enter place name..." id="title" value={hotelInfo.title} onClick={handleChange} mt="2" />
                </div>

                <div className="max-w-full">
                    <TextArea name="Discription" placeholder="Enter place discription..." id="discription" type="text" value={hotelInfo.discription} onClick={handleChange} />
                </div>

                <div className="max-w-md">
                    <Input name="Price" placeholder="Enter place price..." id="price" value={hotelInfo.price} onClick={handleChange} mt="2" />
                </div>

                <div className={`mt-2`}>
                    <label htmlFor="Photo" className="block text-xl font-medium leading-6 text-gray-900 pb-1">Photos</label>
                    <div className="mt-2 flex gap-1">
                        <input onChange={handleImageUrlInput} type="text" placeholder="Enter a link of a image" name="Photo" id="" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 placeholder:mx-5" required={false} value={imageURL} />
                        <button type="button" className="bg-gray-400 px-4 rounded-2xl" onClick={handleImageUrl}>Add&nbsp;This</button>
                    </div>
                </div>

                <div className="grid gap-3 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-2">
                    {images.length > 0 && images.map((img, i) => (
                        <div key={i} className="h-32 flex gap-5 relative">
                            <img src={img} alt="" className="rounded-2xl object-cover w-full" />
                            <div onClick={() => removeImage(img)} className="absolute bg-gray-700 text-white rounded-md right-2 bottom-2 cursor-pointer px-2 py-1 opacity-75">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </div>

                        </div>
                    ))}
                    <input type="file" multiple className="hidden" ref={imgClickRef} onChange={handleImageChange} />
                    <button type="button" onClick={handleRefClick} className="border bg-transparent rounded-2xl p-8 text-gray-600 text-2xl flex justify-center items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                        Upload
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                        <Input name="Street" placeholder="Enter place street..." id="street" value={hotelInfo.street} onClick={handleChange} mt="2" />
                    </div>
                    <div className="sm:col-span-2">
                        <Input name="City" placeholder="Enter place city..." id="city" value={hotelInfo.city} onClick={handleChange} mt="2" />
                    </div>
                    <div className="sm:col-span-2">
                        <Input name="State" placeholder="Enter place state..." id="state" value={hotelInfo.state} onClick={handleChange} mt="2" />
                    </div>
                    <div className="sm:col-span-2">
                        <Input name="Pin" placeholder="Enter place pin..." id="pin" value={hotelInfo.pin} onClick={handleChange} mt="2" />
                    </div>
                    <div className="sm:col-span-3">
                        <Input name="Country" placeholder="Enter place country..." id="country" value={hotelInfo.country} onClick={handleChange} mt="2" />
                    </div>
                </div>

                <CheckBox handleChnage={handleCheckBox} options={perks} id="perks" name="Perks" />

                <div className="max-w-full">
                    <TextArea name="Extra Informations" placeholder="Enter extra ingo..." id="extraInfo" type="text" value={hotelInfo.extraInfo} onClick={handleChange} />
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-2">
                        <Input name="Check In Time" type="time" placeholder="Enter checkin time..." id="checkIn" value={hotelInfo.checkIn} onClick={handleChange} mt="2" />
                    </div>
                    <div className="sm:col-span-2">
                        <Input name="Check Out Time" type="time" placeholder="Enter checkout time..." id="checkOut" value={hotelInfo.checkOut} onClick={handleChange} mt="2" />
                    </div>
                    <div className="sm:col-span-2">
                        <Input name="Max Guests" placeholder="Enter max guests..." id="maxGuests" value={hotelInfo.maxGuests} onClick={handleChange} mt="2" />
                    </div>
                </div>

                <button disabled={loading} onClick={addHotel} className={`bg-primary text-white w-full p-2 rounded-2xl flex justify-center items-center gap-2 ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}>
                    <ClipLoader color='white' size="20px" loading={loading} />
                    <div>Save</div>
                </button>

            </form>
        </div>
    )
}

export default AddHotelForm
