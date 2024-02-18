export const ITEM_PAGE_PER = 10

export const Classes = {
    h1_size:
        "2xl:text-6xl lg:text-3xl md:text-2xl sm:text-xl l:text-xl s:text-xl",
    commonClass: "cursor-pointer relative items-center py-2",

    commonBTNClass:
        "bg-white px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 inline-flex  rounded-md border border-gray-300",

    commonSreenBTNClass:
        "inline-flex px-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",

    hoverClass:
        "hidden px-4 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex",

    activeClass:
        "z-10 inline-flex bg-indigo-600 px-4 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",

    flexDirectionClass:
        "lg:flex-row md:flex-row sm:flex-row l:flex-col s:flex-col xs:flex-col",
};

export const perks = [
    {
        value: "Wifi",
        message: "",
        svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
        </svg>
    },
    {
        value: "Free Parking",
        message: "",
        svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
    },
    {
        value: "TV",
        message: "",
        svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
    },
    {
        value: "Radio",
        message: "",
        svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 7.5 16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 0 0 4.5 21h15a2.25 2.25 0 0 0 2.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0 0 12 6.75Zm-1.683 6.443-.005.005-.006-.005.006-.005.005.005Zm-.005 2.127-.005-.006.005-.005.005.005-.005.005Zm-2.116-.006-.005.006-.006-.006.005-.005.006.005Zm-.005-2.116-.006-.005.006-.005.005.005-.005.005ZM9.255 10.5v.008h-.008V10.5h.008Zm3.249 1.88-.007.004-.003-.007.006-.003.004.006Zm-1.38 5.126-.003-.006.006-.004.004.007-.006.003Zm.007-6.501-.003.006-.007-.003.004-.007.006.004Zm1.37 5.129-.007-.004.004-.006.006.003-.004.007Zm.504-1.877h-.008v-.007h.008v.007ZM9.255 18v.008h-.008V18h.008Zm-3.246-1.87-.007.004L6 16.127l.006-.003.004.006Zm1.366-5.119-.004-.006.006-.004.004.007-.006.003ZM7.38 17.5l-.003.006-.007-.003.004-.007.006.004Zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007Zm-.5 1.873h-.008v-.007h.008v.007ZM17.25 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm0 4.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
        </svg>
    },
    {
        value: "Pets",
        message: "",
        svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
        </svg>
    },
    {
        value: "Private Entrance",
        message: "",
        svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
        </svg>

    },
]

export const validHotelInfo = (hotelInfo, perk, images) => {
    if (hotelInfo.checkIn === "") {
        return { success: false, message: "Enter valid checkIn time" }
    }
    else if (hotelInfo.checkOut === "") {
        return { success: false, message: "Enter valid checkOut time" }
    }
    else if (hotelInfo.city === "") {
        return { success: false, message: "Enter valid city" }
    }
    else if (hotelInfo.country === "") {
        return { success: false, message: "Enter valid country" }
    }
    else if (hotelInfo.discription === "") {
        return { success: false, message: "Enter valid discription" }
    }
    else if (hotelInfo.extraInfo === "") {
        return { success: false, message: "Enter valid extraInfo" }
    }
    else if (hotelInfo.maxGuests === "") {
        return { success: false, message: "Enter valid maxGuests" }
    }
    else if (hotelInfo.pin === "") {
        return { success: false, message: "Enter pin" }
    }
    else if (hotelInfo.price === "") {
        return { success: false, message: "Enter valid price" }
    }
    else if (hotelInfo.state === "") {
        return { success: false, message: "Enter valid state" }
    }
    else if (hotelInfo.street === "") {
        return { success: false, message: "Enter valid street" }
    }
    else if (hotelInfo.title === "") {
        return { success: false, message: "Enter valid title" }
    } else if (perk.length === 0) {
        return { success: false, message: "Select aleast 1 perk" }
    } else if (images.length < 5) {
        return { success: false, message: "Select aleast 5 images" }
    } else {
        return { success: true }
    }
}

export const paymentMathods = [
    { id: 1, name: "Cash" },
    { id: 1, name: "Card" },
]

export const amountAfterTax = (hotel, bookingInfo, setBookingInfo) => {
    const amount = (hotel.price * bookingInfo.guest) * (18 / 100)

    if (bookingInfo.checkIn && bookingInfo.checkOut) {
        const differenceMS = Math.abs(new Date(bookingInfo.checkIn) - new Date(bookingInfo.checkOut))

        const days = Math.ceil(differenceMS / (1000 * 60 * 60 * 24))

        const totalAmount = (amount + (hotel.price * bookingInfo.guest)) * days
        setBookingInfo({ ...bookingInfo, totalAmount, days })
    } else {
        const totalAmount = (amount + (hotel.price * bookingInfo.guest))
        setBookingInfo({ ...bookingInfo, totalAmount })
    }
}

export const numbersOfNigts = (checkIn, checkOut) => {

    const differenceMS = Math.abs(new Date(checkIn) - new Date(checkOut))

    return Math.ceil(differenceMS / (1000 * 60 * 60 * 24))

}

export const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

export const sortOptions = [
    { name: "Best Rating", sort: "rating", order: "desc", current: false },
    {
        name: "Price: Low to High",
        sort: "price",
        order: "asc",
        current: false,
    },
    {
        name: "Price: High to Low",
        sort: "price",
        order: "desc",
        current: false,
    },
];